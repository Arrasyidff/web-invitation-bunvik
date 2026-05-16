import { NextRequest, NextResponse } from "next/server";
import type { WishItem, CreateWishInput } from "@/features/wishes/types";

const BACKEND_URL = process.env.BACKEND_URL ?? "http://localhost:3002";

interface BackendRsvpItem {
  _id: string;
  nama: string;
  statusKehadiran: "hadir" | "tidak_hadir";
  ucapanDoa: string;
  createdAt: string;
}

export async function GET() {
  try {
    const response = await fetch(`${BACKEND_URL}/api/v1/rsvp`, {
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json([], { status: 200 });
    }

    const { data }: { data: BackendRsvpItem[] } = await response.json();

    const wishes: WishItem[] = data.map((item) => ({
      id: item._id,
      guestName: item.nama,
      message: item.ucapanDoa,
      attendanceStatus: item.statusKehadiran,
      createdAt: item.createdAt,
    }));

    return NextResponse.json(wishes);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: CreateWishInput = await request.json();

    if (!body.guestName || !body.message) {
      return NextResponse.json({ error: "Data tidak lengkap" }, { status: 400 });
    }

    const backendPayload = {
      nama: body.guestName,
      statusKehadiran: "hadir",
      jumlahHadir: 1,
      ucapanDoa: body.message,
    };

    const response = await fetch(`${BACKEND_URL}/api/v1/rsvp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(backendPayload),
    });

    if (!response.ok) {
      const errorData: { message?: string } = await response.json().catch(() => ({}));
      return NextResponse.json(
        { error: errorData.message ?? "Gagal mengirim ucapan" },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Request tidak valid" }, { status: 400 });
  }
}
