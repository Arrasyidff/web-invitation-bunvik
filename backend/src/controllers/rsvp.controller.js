import * as rsvpService from "../services/rsvp.service.js";

export const createRsvp = async (req, res, next) => {
  try {
    const rsvp = await rsvpService.createRsvp(req.body);
    res.status(201).json({
      success: true,
      data: rsvp,
      message: "RSVP berhasil disimpan",
    });
  } catch (err) {
    next(err);
  }
};

export const getAllRsvp = async (req, res, next) => {
  try {
    const rsvps = await rsvpService.getAllRsvp();
    res.status(200).json({
      success: true,
      data: rsvps,
    });
  } catch (err) {
    next(err);
  }
};

export const getRsvpById = async (req, res, next) => {
  try {
    const rsvp = await rsvpService.getRsvpById(req.params.id);
    res.status(200).json({
      success: true,
      data: rsvp,
    });
  } catch (err) {
    next(err);
  }
};
