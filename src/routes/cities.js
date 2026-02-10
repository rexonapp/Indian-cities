import fs from "fs";
import path from "path";
import express from "express";

const router = express.Router();

// Load JSON once at startup (VERY fast)
const citiesPath = path.join(process.cwd(), "data", "cities.json");
const cities = JSON.parse(fs.readFileSync(citiesPath, "utf-8"));

router.get("/", (req, res) => {
  const search = (req.query.search || "").toLowerCase();

  if (!search || search.length < 2) {
    return res.json([]);
  }

  const result = cities.filter(item =>
    item.city.toLowerCase().startsWith(search)
  );

  res.json(result);
});

export default router;
