import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL = process.env.BACKEND_URL ?? "http://localhost:3002";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "";

interface BackendRsvpItem {
  _id: string;
  nama: string;
  statusKehadiran: "hadir" | "tidak_hadir";
  jumlahHadir: number;
  ucapanDoa: string;
  createdAt: string;
  isDeleted: boolean;
  deletedAt: string | null;
}

function isAuthorized(request: NextRequest): boolean {
  const password = request.headers.get("x-admin-password");
  return ADMIN_PASSWORD !== "" && password === ADMIN_PASSWORD;
}

export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const response = await fetch(`${BACKEND_URL}/api/v1/rsvp/admin`, {
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Gagal mengambil data" }, { status: 500 });
    }

    const { data }: { data: BackendRsvpItem[] } = await response.json();

    const entries = data.map((item) => ({
      id: item._id,
      nama: item.nama,
      statusKehadiran: item.statusKehadiran,
      jumlahHadir: item.jumlahHadir,
      ucapanDoa: item.ucapanDoa,
      createdAt: item.createdAt,
      isDeleted: item.isDeleted,
      deletedAt: item.deletedAt,
    }));

    return NextResponse.json({ success: true, data: entries });
  } catch {
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 });
  }
}
