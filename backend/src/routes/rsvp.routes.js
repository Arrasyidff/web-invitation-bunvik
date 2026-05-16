import { Router } from "express";
import Joi from "joi";
import { validate } from "../middlewares/validate.js";
import { rsvpRateLimiter } from "../middlewares/rateLimiter.js";
import { createRsvp, getAllRsvp, getRsvpById } from "../controllers/rsvp.controller.js";

const router = Router();

const rsvpSchema = Joi.object({
  nama: Joi.string().min(2).max(100).trim().required(),
  jumlahHadir: Joi.number().integer().min(1).max(10).required(),
  ucapanDoa: Joi.string().min(5).max(500).trim().required(),
});

router.post("/", rsvpRateLimiter, validate(rsvpSchema), createRsvp);
router.get("/", getAllRsvp);
router.get("/:id", getRsvpById);

export default router;
