import { Rsvp } from "../models/rsvp.model.js";

export const createRsvp = async (data) => {
  const rsvp = new Rsvp(data);
  return await rsvp.save();
};

export const getAllRsvp = async () => {
  return await Rsvp.find({ isDeleted: false }).sort({ createdAt: -1 });
};

export const getAllRsvpAdmin = async () => {
  return await Rsvp.find().sort({ createdAt: -1 });
};

export const getRsvpById = async (id) => {
  const rsvp = await Rsvp.findById(id);
  if (!rsvp) {
    const err = new Error("RSVP tidak ditemukan");
    err.statusCode = 404;
    throw err;
  }
  return rsvp;
};

export const deleteRsvpById = async (id) => {
  const rsvp = await Rsvp.findByIdAndDelete(id);
  if (!rsvp) {
    const err = new Error("RSVP tidak ditemukan");
    err.statusCode = 404;
    throw err;
  }
  return rsvp;
};

export const softDeleteRsvpById = async (id) => {
  const rsvp = await Rsvp.findByIdAndUpdate(
    id,
    { isDeleted: true, deletedAt: new Date() },
    { new: true }
  );
  if (!rsvp) {
    const err = new Error("RSVP tidak ditemukan");
    err.statusCode = 404;
    throw err;
  }
  return rsvp;
};

export const restoreRsvpById = async (id) => {
  const rsvp = await Rsvp.findByIdAndUpdate(
    id,
    { isDeleted: false, deletedAt: null },
    { new: true }
  );
  if (!rsvp) {
    const err = new Error("RSVP tidak ditemukan");
    err.statusCode = 404;
    throw err;
  }
  return rsvp;
};
