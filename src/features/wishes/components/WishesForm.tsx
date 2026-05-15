"use client";

import { useState } from "react";
import { createWish } from "../services/wishesService";
import type { CreateWishInput } from "../types";

interface WishesFormProps {
  onWishSubmitted: () => void;
}

export function WishesForm({ onWishSubmitted }: WishesFormProps) {
  const [formData, setFormData] = useState<CreateWishInput>({
    guestName: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasError, setHasError] = useState(false);

  async function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setHasError(false);

    try {
      await createWish(formData);
      setFormData({ guestName: "", message: "" });
      onWishSubmitted();
    } catch {
      setHasError(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col gap-1.5">
      <div className="flex flex-col gap-1.5">
        <label className="text-[1.125rem] text-foreground">
          Tuliskan nama anda:
        </label>
        <input
          type="text"
          required
          value={formData.guestName}
          onChange={(e) => setFormData({ ...formData, guestName: e.target.value })}
          className="w-full rounded-full border border-foreground/25 bg-transparent px-5 py-2.5 text-[1.125rem] text-foreground outline-none focus:border-foreground/50"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[1.125rem] text-foreground">
          Berikan ucapan dan doa:
        </label>
        <input
          type="text"
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full rounded-full border border-foreground/25 bg-transparent px-5 py-2.5 text-[1.125rem] text-foreground outline-none focus:border-foreground/50"
        />
      </div>

      {hasError && (
        <p className="text-center text-[1.125rem] text-red-500">
          Gagal mengirim. Silakan coba lagi.
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-1.5 w-full rounded-full bg-[#3B9CDA] py-3 text-[1rem] font-semibold text-white disabled:opacity-60"
      >
        {isSubmitting ? "Mengirim..." : "Kirim"}
      </button>
    </form>
  );
}
