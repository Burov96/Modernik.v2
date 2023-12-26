import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import Cart from "@/models/cart";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    await connectToDB();

    const isAuthUser = await AuthUser(req);

    if (isAuthUser) {
      const { searchParams } = new URL(req.url);
      const id = searchParams.get("id");

      if (!id)
        return NextResponse.json({
          success: false,
          message: "Моля, първо влезте!",
        });
      const extractAllCartItems = await Cart.find({ userID: id }).populate(
        "productID"
      );

      if (extractAllCartItems) {
        return NextResponse.json({ success: true, data: extractAllCartItems });
      } else {
        return NextResponse.json({
          success: false,
          message: "Нямате продукти в количката!",
          status: 204,
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        message: "Не сте удостоверени!",
      });
    }
  } catch (e) {
    return NextResponse.json({
      success: false,
      message: "Нещо се обърка, опитайте отново по-късно!",
    });
  }
}
