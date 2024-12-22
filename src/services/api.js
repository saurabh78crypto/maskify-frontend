import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_BASE_URL;

export const uploadImage = async (imageData) => {
  const formData = new FormData();
  formData.append("file", imageData);
  
  try {
    const response = await axios.post(`${API_BASE_URL}/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data", 
      },
    });
    return response.data;
  } catch (error) {
    console.error("Upload failed:", error);
    throw error;
  }
};

export const fetchImages = async () => {
  return axios.get(`${API_BASE_URL}/images`);
};
