import express from "express";
import healthRoutes from "./routes/health.routes.js";
import rsvpRoutes from "./routes/rsvp.routes.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();

app.use(express.json());

app.use("/api/health", healthRoutes);
app.use("/api/v1/rsvp", rsvpRoutes);

app.use(errorHandler);

export default app;
