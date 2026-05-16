import mongoose from "mongoose";

const rsvpSchema = new mongoose.Schema(
  {
    nama: {
      type: String,
      required: true,
      maxlength: 100,
      trim: true,
    },
    statusKehadiran: {
      type: String,
      required: true,
      enum: ["hadir", "tidak_hadir"],
    },
    jumlahHadir: {
      type: Number,
      required: true,
      min: 0,
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
