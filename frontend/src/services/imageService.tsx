import axios from 'axios';
const API_URL = 'http://localhost:3000/';

const uploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append('image', file);
  try {
    const result = await axios.post(`${API_URL}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    if (result.status === 200) {
      return result.data.imageId;
    }
  } catch (error) {
    console.log(error);
  }
};

const getImage = async (imageId: Number) => {
  try {
    const result = await axios.get(`${API_URL}/imageId`);
    if (result.status === 200) {
      console.log(result);
      return result;
    }
  } catch (error) {
    console.log(error);
  }
};

export { uploadImage, getImage };
