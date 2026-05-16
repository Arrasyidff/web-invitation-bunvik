import { Rsvp } from "../models/rsvp.model.js";

export const createRsvp = async (data) => {
  const rsvp = new Rsvp(data);
  return await rsvp.save();
};

export const getAllRsvp = async () => {
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
