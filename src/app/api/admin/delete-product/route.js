import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function DELETE(req) {
  try {
    await connectToDB();
    const isAuthUser = await AuthUser(req);

    if (isAuthUser?.role === "admin") {
      const { searchParams } = new URL(req.url);
      const id = searchParams.get("id");

      if (!id)
        return NextResponse.json({
          success: false,
          message: "Необходим е продуктов номер",
        });

      const deletedProduct = await Product.findByIdAndDelete(id);

      if (deletedProduct) {
        return NextResponse.json({
          success: true,
          message: "Продукта е премахнат успешно",
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "Не успяхте да премахнете продукта",
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        message: "Не сте удостоверени!",
      });
    }
  } catch (e) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Нещо се обърка, опитайте отново по-късно!",
    });
  }
}
