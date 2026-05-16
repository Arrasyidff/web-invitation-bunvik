import { getDBStatus } from "../config/db.js";
import { NODE_ENV } from "../config/env.js";

export const healthCheck = (req, res) => {
  const dbStatus = getDBStatus();
  const isHealthy = dbStatus === "connected";

  res.status(isHealthy ? 200 : 503).json({
    success: isHealthy,
    status: isHealthy ? "ok" : "degraded",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: NODE_ENV,
    database: { status: dbStatus },
  });
};
