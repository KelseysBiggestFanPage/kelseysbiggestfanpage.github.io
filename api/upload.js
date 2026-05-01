export default function handler(req, res) {
  const body =
    typeof req.body === "string"
      ? JSON.parse(req.body)
      : req.body;

  if (!body || !body.image) {
    return res.status(400).json({ error: "No image received" });
  }

  console.log("Image received (preview):", body.image.slice(0, 50));

  res.status(200).json({ success: true });
}
