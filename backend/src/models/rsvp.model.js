import mongoose from "mongoose";

const rsvpSchema = new mongoose.Schema(
  {
    nama: {
      type: String,
      required: true,
      maxlength: 100,
      trim: true,
    },
    jumlahHadir: {
      type: Number,
      required: true,
      min: 1,
      max: 10,
    },
    ucapanDoa: {
      type: String,
      required: true,
      maxlength: 500,
      trim: true,
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  }
);

export const Rsvp = mongoose.model("Rsvp", rsvpSchema);
