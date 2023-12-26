import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import Address from "@/models/address";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function DELETE(req) {
  try {
    await connectToDB();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({
        success: false,
        message: "Необходим е ID на адреса!",
      });
    }

    const isAuthUser = await AuthUser(req);

    if (isAuthUser) {
      const deletedAddress = await Address.findByIdAndDelete(id);

      if (deletedAddress) {
        return NextResponse.json({
          success: true,
          message: "Адреса бе изтрит!",
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "Не успяхте да изтриете адреса!",
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        message: "Не сте удостоверени!",
      });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      success: false,
      message: "Нещо се обърка, опитайте отново по-късно!",
    });
  }
}
