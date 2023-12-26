import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import Cart from "@/models/cart";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function DELETE(req) {
  try {
    await connectToDB();
    const isAuthUser = await AuthUser(req);
    if (isAuthUser) {
      const { searchParams } = new URL(req.url);
      const id = searchParams.get("id");
      if (!id)
        return NextResponse.json({
          success: false,
          message: "Необходим е номер на продукта",
        });

      const deleteCartItem = await Cart.findByIdAndDelete(id);

      if (deleteCartItem) {
        return NextResponse.json({
          success: true,
          message: "Продукта е премахнат успешно",
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "Не успяхте да премахнете този продукт.",
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        message: "Не сте удостоверени!",
      });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Нещо се обърка, опитайте отново по-късно!",
    });
  }
}
