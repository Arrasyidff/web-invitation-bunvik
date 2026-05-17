"use client";

import { useState, useEffect } from "react";
import type { RsvpEntry } from "../types";
import { formatTimeAgo } from "@/lib/utils";

const SESSION_KEY = "admin_authenticated";

type DeleteAction = "softDelete" | "hardDelete";

interface PendingAction {
  id: string;
  type: DeleteAction | "restore";
}

interface ActionPickerModal {
  id: string;
  nama: string;
}

export function AdminContent() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isLoginLoading, setIsLoginLoading] = useState(false);

  const [entries, setEntries] = useState<RsvpEntry[]>([]);
  const [isFetchLoading, setIsFetchLoading] = useState(false);
  const [fetchError, setFetchError] = useState("");

  const [pendingAction, setPendingAction] = useState<PendingAction | null>(null);
  const [actionPicker, setActionPicker] = useState<ActionPickerModal | null>(null);
  const [processingId, setProcessingId] = useState<string | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem(SESSION_KEY);
    if (stored) {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchEntries();
    }
  }, [isAuthenticated]);

  function getPassword(): string {
    return sessionStorage.getItem(SESSION_KEY) ?? "";
  }

  async function fetchEntries() {
    setIsFetchLoading(true);
    setFetchError("");
    try {
      const response = await fetch("/api/admin/rsvp", {
        headers: { "x-admin-password": getPassword() },
      });

      if (!response.ok) {
        setFetchError("Gagal mengambil data. Coba refresh halaman.");
        return;
      }

      const { data }: { data: RsvpEntry[] } = await response.json();
      setEntries(data);
    } catch {
      setFetchError("Terjadi kesalahan. Coba refresh halaman.");
    } finally {
      setIsFetchLoading(false);
    }
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setIsLoginLoading(true);
    setLoginError("");

    const response = await fetch("/api/admin/rsvp", {
      headers: { "x-admin-password": passwordInput },
    });

    setIsLoginLoading(false);

    if (response.status === 401) {
      setLoginError("Password salah.");
      return;
    }

    if (!response.ok) {
      setLoginError("Terjadi kesalahan. Coba lagi.");
      return;
    }

    sessionStorage.setItem(SESSION_KEY, passwordInput);
    const { data }: { data: RsvpEntry[] } = await response.json();
    setEntries(data);
    setIsAuthenticated(true);
  }

  function handleLogout() {
    sessionStorage.removeItem(SESSION_KEY);
    setIsAuthenticated(false);
    setEntries([]);
    setPasswordInput("");
  }

  async function handleConfirmedAction() {
    if (!pendingAction) return;
    const { id, type } = pendingAction;

    setProcessingId(id);
    setPendingAction(null);

    try {
      if (type === "hardDelete") {
        const response = await fetch(`/api/admin/rsvp/${id}`, {
          method: "DELETE",
          headers: { "x-admin-password": getPassword() },
        });
        if (!response.ok) { alert("Gagal menghapus. Coba lagi."); return; }
        setEntries((prev) => prev.filter((e) => e.id !== id));
      } else {
        const action = type === "softDelete" ? "softDelete" : "restore";
        const response = await fetch(`/api/admin/rsvp/${id}`, {
          method: "PATCH",
          headers: {
            "x-admin-password": getPassword(),
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ action }),
        });
        if (!response.ok) { alert("Gagal memproses. Coba lagi."); return; }
        setEntries((prev) =>
          prev.map((e) =>
            e.id === id
              ? { ...e, isDeleted: action === "softDelete", deletedAt: action === "softDelete" ? new Date().toISOString() : null }
              : e
          )
        );
      }
    } catch {
      alert("Terjadi kesalahan. Coba lagi.");
    } finally {
      setProcessingId(null);
    }
  }

  const activeEntries = entries.filter((e) => !e.isDeleted);
  const totalHadir = activeEntries.filter((e) => e.statusKehadiran === "hadir").length;
  const totalTidakHadir = activeEntries.filter((e) => e.statusKehadiran === "tidak_hadir").length;
  const totalTamu = activeEntries.reduce((sum, e) => sum + e.jumlahHadir, 0);
  const totalDisembunyikan = entries.filter((e) => e.isDeleted).length;

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-1">Admin Panel</h1>
          <p className="text-sm text-gray-500 mb-6">Masukkan password untuk melanjutkan</p>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input
              type="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              placeholder="Password"
              required
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent"
            />
            {loginError && (
              <p className="text-sm text-red-500 -mt-1">{loginError}</p>
            )}
            <button
              type="submit"
              disabled={isLoginLoading}
              className="w-full bg-rose-500 hover:bg-rose-600 disabled:bg-rose-300 text-white font-semibold py-3 rounded-lg text-sm transition-colors"
            >
              {isLoginLoading ? "Memeriksa..." : "Masuk"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {actionPicker && (
        <ActionPickerModalComponent
          nama={actionPicker.nama}
          onSelect={(type) => {
            setPendingAction({ id: actionPicker.id, type });
            setActionPicker(null);
          }}
          onCancel={() => setActionPicker(null)}
        />
      )}
      {pendingAction && (
        <ConfirmModal
          action={pendingAction.type}
          entryName={entries.find((e) => e.id === pendingAction.id)?.nama ?? ""}
          onConfirm={handleConfirmedAction}
          onCancel={() => setPendingAction(null)}
        />
      )}

      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
          <p className="text-xs text-gray-400 mt-0.5">Data RSVP & Ucapan Tamu</p>
        </div>
        <button onClick={handleLogout} className="text-sm text-gray-500 hover:text-gray-800 transition-colors">
          Keluar
        </button>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <StatCard label="Total Respons" value={activeEntries.length} color="blue" />
          <StatCard label="Hadir" value={totalHadir} color="green" />
          <StatCard label="Tidak Hadir" value={totalTidakHadir} color="gray" />
          <StatCard label="Total Tamu" value={totalTamu} color="rose" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <h2 className="font-semibold text-gray-700">Daftar RSVP</h2>
              {totalDisembunyikan > 0 && (
                <span className="text-xs bg-amber-100 text-amber-700 font-medium px-2 py-0.5 rounded-full">
                  {totalDisembunyikan} disembunyikan
                </span>
              )}
            </div>
            <button onClick={fetchEntries} className="text-sm text-rose-500 hover:text-rose-700 transition-colors">
              Refresh
            </button>
          </div>

          {isFetchLoading && (
            <div className="py-16 text-center text-gray-400 text-sm">Memuat data...</div>
          )}
          {fetchError && !isFetchLoading && (
            <div className="py-16 text-center text-red-500 text-sm">{fetchError}</div>
          )}
          {!isFetchLoading && !fetchError && entries.length === 0 && (
            <div className="py-16 text-center text-gray-400 text-sm">Belum ada data RSVP.</div>
          )}

          {!isFetchLoading && !fetchError && entries.length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    <th className="px-6 py-3">Nama</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3 text-center">Tamu</th>
                    <th className="px-6 py-3">Ucapan / Doa</th>
                    <th className="px-6 py-3">Waktu</th>
                    <th className="px-6 py-3 text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {entries.map((entry) => (
                    <tr
                      key={entry.id}
                      className={`transition-colors ${entry.isDeleted ? "bg-red-50 opacity-60" : "hover:bg-gray-50"}`}
                    >
                      <td className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          {entry.isDeleted && (
                            <span className="text-xs text-red-500 font-semibold">[Disembunyikan]</span>
                          )}
                          <span className={entry.isDeleted ? "line-through text-gray-400" : ""}>
                            {entry.nama}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        {entry.statusKehadiran === "hadir" ? (
                          <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-700">Hadir</span>
                        ) : (
                          <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-gray-500">Tidak Hadir</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center text-gray-600">{entry.jumlahHadir}</td>
                      <td className="px-6 py-4 text-gray-600 max-w-xs">
                        <p className="line-clamp-2">{entry.ucapanDoa}</p>
                      </td>
                      <td className="px-6 py-4 text-gray-400 whitespace-nowrap text-xs">
                        {formatTimeAgo(entry.createdAt)}
                      </td>
                      <td className="px-6 py-4">
                        <ActionCell
                          entry={entry}
                          isProcessing={processingId === entry.id}
                          onAction={(type) => setPendingAction({ id: entry.id, type })}
                          onOpenPicker={() => setActionPicker({ id: entry.id, nama: entry.nama })}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

interface ActionCellProps {
  entry: RsvpEntry;
  isProcessing: boolean;
  onAction: (type: DeleteAction | "restore") => void;
  onOpenPicker: () => void;
}

function ActionCell({ entry, isProcessing, onAction, onOpenPicker }: ActionCellProps) {
  if (isProcessing) {
    return <div className="text-center text-gray-400 text-xs">Memproses...</div>;
  }

  if (entry.isDeleted) {
    return (
      <div className="flex items-center justify-center gap-2">
        <button
          onClick={() => onAction("restore")}
          className="text-xs text-green-600 font-semibold hover:text-green-800 transition-colors whitespace-nowrap"
        >
          Pulihkan
        </button>
        <span className="text-gray-300">|</span>
        <button
          onClick={() => onAction("hardDelete")}
          className="text-xs text-red-500 font-semibold hover:text-red-700 transition-colors whitespace-nowrap"
        >
          Hapus Permanen
        </button>
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <button
        onClick={onOpenPicker}
        className="text-gray-300 hover:text-red-500 transition-colors"
        title="Hapus"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
          <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
}

interface ActionPickerModalComponentProps {
  nama: string;
  onSelect: (type: DeleteAction) => void;
  onCancel: () => void;
}

function ActionPickerModalComponent({ nama, onSelect, onCancel }: ActionPickerModalComponentProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-6">
        <h3 className="text-base font-bold text-gray-800 mb-1">Kelola ucapan</h3>
        <p className="text-sm text-gray-500 mb-5">Pilih tindakan untuk ucapan dari <span className="font-medium text-gray-700">{nama}</span>.</p>
        <div className="flex flex-col gap-2 mb-4">
          <button
            onClick={() => onSelect("softDelete")}
            className="w-full text-left px-4 py-3 rounded-xl border border-amber-200 bg-amber-50 hover:bg-amber-100 transition-colors"
          >
            <span className="block text-sm font-semibold text-amber-700">Sembunyikan</span>
            <span className="block text-xs text-amber-600/70 mt-0.5">Tersimpan di database, tidak tampil di halaman publik</span>
          </button>
          <button
            onClick={() => onSelect("hardDelete")}
            className="w-full text-left px-4 py-3 rounded-xl border border-red-200 bg-red-50 hover:bg-red-100 transition-colors"
          >
            <span className="block text-sm font-semibold text-red-700">Hapus Permanen</span>
            <span className="block text-xs text-red-600/70 mt-0.5">Dihapus selamanya dari database, tidak bisa dipulihkan</span>
          </button>
        </div>
        <button
          onClick={onCancel}
          className="w-full border border-gray-200 text-gray-600 font-semibold py-2.5 rounded-lg text-sm hover:bg-gray-50 transition-colors"
        >
          Batal
        </button>
      </div>
    </div>
  );
}

interface ConfirmModalProps {
  action: DeleteAction | "restore";
  entryName: string;
  onConfirm: () => void;
  onCancel: () => void;
}

function ConfirmModal({ action, entryName, onConfirm, onCancel }: ConfirmModalProps) {
  const config = {
    softDelete: {
      title: "Sembunyikan ucapan?",
      description: `Ucapan dari "${entryName}" akan disembunyikan dari halaman publik, tapi tetap tersimpan di database dan bisa dipulihkan kapan saja.`,
      confirmLabel: "Ya, Sembunyikan",
      confirmClass: "bg-amber-500 hover:bg-amber-600",
    },
    hardDelete: {
      title: "Hapus permanen?",
      description: `Ucapan dari "${entryName}" akan dihapus selamanya dari database dan tidak bisa dipulihkan.`,
      confirmLabel: "Ya, Hapus Permanen",
      confirmClass: "bg-red-500 hover:bg-red-600",
    },
    restore: {
      title: "Pulihkan ucapan?",
      description: `Ucapan dari "${entryName}" akan ditampilkan kembali di halaman publik.`,
      confirmLabel: "Ya, Pulihkan",
      confirmClass: "bg-green-500 hover:bg-green-600",
    },
  };

  const { title, description, confirmLabel, confirmClass } = config[action];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-6">
        <h3 className="text-base font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-6">{description}</p>
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 border border-gray-200 text-gray-600 font-semibold py-2.5 rounded-lg text-sm hover:bg-gray-50 transition-colors"
          >
            Batal
          </button>
          <button
            onClick={onConfirm}
            className={`flex-1 text-white font-semibold py-2.5 rounded-lg text-sm transition-colors ${confirmClass}`}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

interface StatCardProps {
  label: string;
  value: number;
  color: "blue" | "green" | "gray" | "rose";
}

const colorMap = {
  blue: "text-blue-700",
  green: "text-green-700",
  gray: "text-gray-600",
  rose: "text-rose-700",
};

function StatCard({ label, value, color }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm px-5 py-4">
      <p className="text-xs font-medium text-gray-400 mb-1">{label}</p>
      <p className={`text-2xl font-bold ${colorMap[color]}`}>{value}</p>
    </div>
  );
}
