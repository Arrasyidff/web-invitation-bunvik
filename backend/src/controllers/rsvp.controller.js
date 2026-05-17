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

export const getAllRsvpAdmin = async (req, res, next) => {
  try {
    const rsvps = await rsvpService.getAllRsvpAdmin();
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

export const deleteRsvp = async (req, res, next) => {
  try {
    await rsvpService.deleteRsvpById(req.params.id);
    res.status(200).json({
      success: true,
      message: "RSVP berhasil dihapus permanen",
    });
  } catch (err) {
    next(err);
  }
};

export const softDeleteRsvp = async (req, res, next) => {
  try {
    const rsvp = await rsvpService.softDeleteRsvpById(req.params.id);
    res.status(200).json({
      success: true,
      data: rsvp,
      message: "RSVP berhasil disembunyikan",
    });
  } catch (err) {
    next(err);
  }
};

export const restoreRsvp = async (req, res, next) => {
  try {
    const rsvp = await rsvpService.restoreRsvpById(req.params.id);
    res.status(200).json({
      success: true,
      data: rsvp,
      message: "RSVP berhasil dipulihkan",
    });
  } catch (err) {
    next(err);
  }
};
