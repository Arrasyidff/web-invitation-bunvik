import mongoose from "mongoose";
import { DEFAULT_INVITATION_ID, INVITATION_IDS } from "../config/invitations.js";

const rsvpSchema = new mongoose.Schema(
  {
    invitationId: {
      type: String,
      enum: INVITATION_IDS,
      default: DEFAULT_INVITATION_ID,
      index: true,
    },
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
    isDeleted: {
      type: Boolean,
      default: false,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  }
);

export const Rsvp = mongoose.model("Rsvp", rsvpSchema);
