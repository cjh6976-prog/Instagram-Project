import fs from "fs";
import path from "path";
export default function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), "image.json"); 
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(jsonData);

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to load images" });
  }
}