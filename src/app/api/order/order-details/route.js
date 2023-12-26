import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import Order from "@/models/order";
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
          message: "Product ID is required",
        });

      const extractOrderDetails = await Order.findById(id).populate(
        "orderItems.product"
      );

      if (extractOrderDetails) {
        return NextResponse.json({
          success: true,
          data: extractOrderDetails,
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "Не успяхте да заредите детайлите на поръчката, моля опитайте отново!",
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
