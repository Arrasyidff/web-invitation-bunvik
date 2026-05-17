import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL = process.env.BACKEND_URL ?? "http://localhost:3002";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "";

function isAuthorized(request: NextRequest): boolean {
  const password = request.headers.get("x-admin-password");
  return ADMIN_PASSWORD !== "" && password === ADMIN_PASSWORD;
}

type RouteContext = { params: Promise<{ id: string }> };

export async function DELETE(request: NextRequest, { params }: RouteContext) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  try {
    const response = await fetch(`${BACKEND_URL}/api/v1/rsvp/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      const errorData: { message?: string } = await response.json().catch(() => ({}));
      return NextResponse.json(
        { error: errorData.message ?? "Gagal menghapus data" },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true, message: "RSVP berhasil dihapus permanen" });
  } catch {
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest, { params }: RouteContext) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const body: { action: "softDelete" | "restore" } = await request.json();

  const endpoint =
    body.action === "softDelete"
      ? `${BACKEND_URL}/api/v1/rsvp/${id}/soft-delete`
      : `${BACKEND_URL}/api/v1/rsvp/${id}/restore`;

  try {
    const response = await fetch(endpoint, { method: "PATCH" });

    if (!response.ok) {
      const errorData: { message?: string } = await response.json().catch(() => ({}));
      return NextResponse.json(
        { error: errorData.message ?? "Gagal memproses permintaan" },
        { status: response.status }
      );
    }

    const result: { message?: string } = await response.json();
    return NextResponse.json({ success: true, message: result.message });
  } catch {
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 });
  }
}
