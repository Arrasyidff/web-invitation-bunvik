import { NextRequest, NextResponse } from "next/server";
import type { CreateWishInput } from "@/features/wishes/types";
import { wishesStore } from "@/lib/wishesStore";

export async function GET() {
  return NextResponse.json(wishesStore);
}

export async function POST(request: NextRequest) {
  try {
    const body: CreateWishInput = await request.json();

    if (!body.guestName || !body.message || !body.attendanceStatus) {
      return NextResponse.json({ error: "Data tidak lengkap" }, { status: 400 });
    }

    wishesStore.unshift({
      id: crypto.randomUUID(),
      guestName: body.guestName,
      message: body.message,
      attendanceStatus: body.attendanceStatus,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Request tidak valid" }, { status: 400 });
  }
}
