import { NextRequest, NextResponse } from "next/server";
import type { RsvpFormData } from "@/features/rsvp/types";

export async function POST(request: NextRequest) {
  try {
    const body: RsvpFormData = await request.json();

    if (!body.guestName || !body.attendanceStatus) {
      return NextResponse.json({ error: "Data tidak lengkap" }, { status: 400 });
    }

    // TODO: simpan ke Supabase setelah tabel rsvp dikonfigurasi
    console.log("RSVP submitted:", body);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Request tidak valid" }, { status: 400 });
  }
}
