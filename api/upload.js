export default function handler(req, res) {
  const body =
    typeof req.body === "string"
      ? JSON.parse(req.body)
      : req.body;

  res.status(200).json({
    message: "Received",
    image: body.image
  });
}
