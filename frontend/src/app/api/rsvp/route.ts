import { NextRequest, NextResponse } from "next/server";
import type { RsvpFormData } from "@/features/rsvp/types";

const BACKEND_URL = process.env.BACKEND_URL ?? "http://localhost:3002";

export async function POST(request: NextRequest) {
  try {
    const body: RsvpFormData = await request.json();

    if (!body.guestName || !body.attendanceStatus) {
      return NextResponse.json({ error: "Data tidak lengkap" }, { status: 400 });
    }

    const backendPayload = {
      nama: body.guestName,
      statusKehadiran: body.attendanceStatus,
      jumlahHadir: body.attendanceStatus === "hadir" ? body.guestCount : 0,
      ucapanDoa: body.message?.trim() || (body.attendanceStatus === "hadir" ? "Hadir" : "Tidak Hadir"),
    };

    const response = await fetch(`${BACKEND_URL}/api/v1/rsvp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(backendPayload),
    });

    if (!response.ok) {
      const errorData: { message?: string } = await response.json().catch(() => ({}));
      return NextResponse.json(
        { error: errorData.message ?? "Gagal menyimpan RSVP" },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Request tidak valid" }, { status: 400 });
  }
}
