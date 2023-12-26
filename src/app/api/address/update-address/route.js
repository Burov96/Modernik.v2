import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import Address from "@/models/address";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function PUT(req) {
  try {
    await connectToDB();
    const isAuthUser = await AuthUser(req);

    if (isAuthUser) {
      const data = await req.json();
      const { _id, fullName, city, address, country, postalCode } = data;

      const updateAddress = await Address.findOneAndUpdate(
        {
          _id: _id,
        },
        { fullName, city, address, country, postalCode },
        { new: true }
      );

      if (updateAddress) {
        return NextResponse.json({
          success: true,
          message: "Адресът бе обновен успешно!",
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "Не успяхте да добавите адреса!",
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
