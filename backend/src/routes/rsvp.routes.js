import { Router } from "express";
import Joi from "joi";
import { validate, validateQuery } from "../middlewares/validate.js";
import { rsvpRateLimiter } from "../middlewares/rateLimiter.js";
import { INVITATION_IDS } from "../config/invitations.js";
import {
  createRsvp,
  getAllRsvp,
  getAllRsvpAdmin,
  getRsvpById,
  deleteRsvp,
  softDeleteRsvp,
  restoreRsvp,
} from "../controllers/rsvp.controller.js";

const router = Router();

const rsvpSchema = Joi.object({
  invitationId: Joi.string().valid(...INVITATION_IDS),
  nama: Joi.string().min(2).max(100).trim().required(),
  statusKehadiran: Joi.string().valid("hadir", "tidak_hadir").required(),
  jumlahHadir: Joi.when("statusKehadiran", {
    is: "hadir",
    then: Joi.number().integer().min(1).max(10).required(),
    otherwise: Joi.number().valid(0).default(0),
  }),
  ucapanDoa: Joi.string().min(5).max(500).trim().required(),
});

const listQuerySchema = Joi.object({
  invitationId: Joi.string().valid(...INVITATION_IDS),
});

router.post("/", rsvpRateLimiter, validate(rsvpSchema), createRsvp);
router.get("/", validateQuery(listQuerySchema), getAllRsvp);
router.get("/admin", validateQuery(listQuerySchema), getAllRsvpAdmin);
router.get("/:id", getRsvpById);
router.delete("/:id", deleteRsvp);
router.patch("/:id/soft-delete", softDeleteRsvp);
router.patch("/:id/restore", restoreRsvp);

export default router;
