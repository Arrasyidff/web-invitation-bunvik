import "./src/config/env.js";
import { PORT } from "./src/config/env.js";
import { connectDB } from "./src/config/db.js";
import app from "./src/app.js";

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err.message);
    process.exit(1);
  });
