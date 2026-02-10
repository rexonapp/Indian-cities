import express from "express";
import citiesRoute from "./routes/cities.js";

const app = express();

// Use PORT from environment (required for production)
const PORT = process.env.PORT || 3000;

// Trust reverse proxy (important for Vercel/Render)
app.set("trust proxy", true);

// Routes
app.use("/api/cities", citiesRoute);

// Health check (optional but useful)
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
