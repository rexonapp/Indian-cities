import fs from "fs";
import path from "path";
import express from "express";

const router = express.Router();

// Load JSON once at startup (VERY fast)
const citiesPath = path.join(process.cwd(), "data", "cities.json");
const cities = JSON.parse(fs.readFileSync(citiesPath, "utf-8"));

router.get("/", (req, res) => {
  const search = (req.query.search || "").toLowerCase().trim();

  if (!search || search.length < 2) {
    return res.json([]);
  }

  const result = cities
  .filter(item => {
    const city = item.city?.toLowerCase() || "";
    const alt = item["alternate names"]?.toLowerCase() || "";

    return city.startsWith(search) || alt.includes(search);
  })
  .slice(0, 50);

  res.json(result);
});

export default router;
