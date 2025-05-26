
import cloudinary from "@/utils/cloudinary";
import { v4 as uuidv4 } from "uuid";

export const UploadToCloudinary = async (file: File, folder: string)=> {
  if (!(file instanceof File)) throw new Error("Invalid file");

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const uniqueId = `${Date.now()}-${uuidv4()}`;

  return new Promise<{ url: string }>((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      {
        folder,
        public_id: uniqueId,
        resource_type: "image",
      },
      (error, result) => {
        if (error) return reject(error);
        resolve({ url: result!.secure_url });
      }
    ).end(buffer);
  });
}
