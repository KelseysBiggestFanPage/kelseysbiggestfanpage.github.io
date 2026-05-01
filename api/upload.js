export default async function handler(req, res) {
  const body =
    typeof req.body === "string"
      ? JSON.parse(req.body)
      : req.body;

  const image = body.image;

  if (!image) {
    return res.status(400).json({ error: "No image" });
  }

  // Cloudinary upload
  const cloudName = "YOUR_CLOUD_NAME";

  const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

  const formData = new URLSearchParams();
  formData.append("file", image);
  formData.append("upload_preset", "unsigned_upload");

  const response = await fetch(url, {
    method: "POST",
    body: formData
  });

  const data = await response.json();

  res.status(200).json({
    success: true,
    url: data.secure_url
  });
}
