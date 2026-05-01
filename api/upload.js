export default function handler(req, res) {
  const body = JSON.parse(req.body);

  const image = body.image;

  console.log("Image received (preview):", image.slice(0, 50));

  res.status(200).json({ success: true });
}
