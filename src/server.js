import express from "express";
import citiesRoute from "./routes/cities.js";

const app = express();
const PORT = 3000;

app.use("/api/cities", citiesRoute);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
