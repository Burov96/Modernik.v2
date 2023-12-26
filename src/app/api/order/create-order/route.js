import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import Cart from "@/models/cart";
import Order from "@/models/order";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDB();
    const isAuthUser = await AuthUser(req);

    if (isAuthUser) {
      const data = await req.json();
      const { user } = data;

      const saveNewOrder = await Order.create(data);

      if (saveNewOrder) {
        await Cart.deleteMany({ userID: user });

        return NextResponse.json({
          success: true,
          message: "Поръчката ви е на път!",
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "Не успяхте да създадете поръчка, моля опитайте отново!",
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
