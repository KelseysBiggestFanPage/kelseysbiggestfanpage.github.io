export default async function handler(req, res) {
  try {
    const body =
      typeof req.body === "string"
        ? JSON.parse(req.body)
        : req.body;

    const image = body.image;

    if (!image) {
      return res.status(400).json({ error: "No image found" });
    }

    const cloudName = "dcxjio526";
    const uploadPreset = "unsigned_upload";

    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

    const formData = new URLSearchParams();
    formData.append("file", image);
    formData.append("upload_preset", uploadPreset);

    const response = await fetch(url, {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    return res.status(200).json({
      success: true,
      url: data.secure_url
    });

  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Upload failed" });
  }
}
