import { Router } from "express";
import Joi from "joi";
import { validate } from "../middlewares/validate.js";
import { rsvpRateLimiter } from "../middlewares/rateLimiter.js";
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
  nama: Joi.string().min(2).max(100).trim().required(),
  statusKehadiran: Joi.string().valid("hadir", "tidak_hadir").required(),
  jumlahHadir: Joi.when("statusKehadiran", {
    is: "hadir",
    then: Joi.number().integer().min(1).max(10).required(),
    otherwise: Joi.number().valid(0).default(0),
  }),
  ucapanDoa: Joi.string().min(5).max(500).trim().required(),
});

router.post("/", rsvpRateLimiter, validate(rsvpSchema), createRsvp);
router.get("/", getAllRsvp);
router.get("/admin", getAllRsvpAdmin);
router.get("/:id", getRsvpById);
router.delete("/:id", deleteRsvp);
router.patch("/:id/soft-delete", softDeleteRsvp);
router.patch("/:id/restore", restoreRsvp);

export default router;
