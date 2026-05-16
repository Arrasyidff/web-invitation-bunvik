import rateLimit from "express-rate-limit";

export const rsvpRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Terlalu banyak permintaan. Coba lagi dalam 15 menit.",
  },
});
