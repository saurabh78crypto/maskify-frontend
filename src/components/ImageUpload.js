import React from "react";
import { uploadImage } from "../services/api";
import { SnackbarProvider, useSnackbar } from "notistack";

function ImageUpload({ setOriginalImage }) {
  const { enqueueSnackbar } = useSnackbar();

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if(!file) return;

    const allowedTypes = ["image/jpeg", "image/png"];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!allowedTypes.includes(file.type)) {
      enqueueSnackbar("Please upload a JPEG or PNG file.", { variant: "warning" });
      return;
    }
  
    if (file.size > maxSize) {
      enqueueSnackbar("File size exceeds the 5MB limit.", { variant: "warning" });
      return;
    }
    
    const reader = new FileReader();
    reader.onload = async () => {
      setOriginalImage(reader.result);
      try {
        await uploadImage(file);
        enqueueSnackbar("Image uploaded successfully!", { variant: "success" });
      } catch (error) {
        enqueueSnackbar("Failed to upload the image.", { variant: "error" });
      }
    };
    reader.readAsDataURL(file);
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6 w-full max-w-md">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Upload an Image</h3>
      <input
        type="file"
        accept="image/jpeg, image/png"
        onChange={handleImageUpload}
        className="block w-full text-sm text-gray-600 border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}

export default function ImageUploadWithSnackbar(props) {
  return (
    <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
      <ImageUpload {...props} />
    </SnackbarProvider>
  );
}