import { NextRequest, NextResponse } from "next/server";
import type { RsvpFormData } from "@/features/rsvp/types";
import { wishesStore } from "@/lib/wishesStore";

export async function POST(request: NextRequest) {
  try {
    const body: RsvpFormData = await request.json();

    if (!body.guestName || !body.attendanceStatus) {
      return NextResponse.json({ error: "Data tidak lengkap" }, { status: 400 });
    }

    console.log("RSVP submitted:", body);

    if (body.message?.trim()) {
      wishesStore.unshift({
        id: crypto.randomUUID(),
        guestName: body.guestName,
        message: body.message.trim(),
        attendanceStatus: body.attendanceStatus,
        createdAt: new Date().toISOString(),
      });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Request tidak valid" }, { status: 400 });
  }
}
