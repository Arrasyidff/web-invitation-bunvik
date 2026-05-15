import { NextRequest, NextResponse } from "next/server";
import type { WishItem, CreateWishInput } from "@/features/wishes/types";

// TODO: ganti dengan Supabase setelah tabel wishes dikonfigurasi
const wishesStore: WishItem[] = [];

export async function GET() {
  return NextResponse.json(wishesStore);
}

export async function POST(request: NextRequest) {
  try {
    const body: CreateWishInput = await request.json();

    if (!body.guestName || !body.message) {
      return NextResponse.json({ error: "Data tidak lengkap" }, { status: 400 });
    }

    const newWish: WishItem = {
      id: crypto.randomUUID(),
      guestName: body.guestName,
      message: body.message,
      createdAt: new Date().toISOString(),
    };

    wishesStore.unshift(newWish);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Request tidak valid" }, { status: 400 });
  }
}
