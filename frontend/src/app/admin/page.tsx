import type { Metadata } from "next";
import { AdminContent } from "@/features/admin/components/AdminContent";

export const metadata: Metadata = {
  title: "Admin — Hendra & Vika",
};

export default function AdminPage() {
  return <AdminContent />;
}
