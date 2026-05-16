import rateLimit from "express-rate-limit";

const isDev = process.env.NODE_ENV === "development";

export const rsvpRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: isDev ? 100 : 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Terlalu banyak permintaan. Coba lagi dalam 15 menit.",
  },
});
