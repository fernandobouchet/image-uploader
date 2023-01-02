import axios from 'axios';
const API_URL = 'http://localhost:3000';

const uploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append('image', file);
  try {
    const result = await axios.post(`${API_URL}/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    if (result.status === 200) {
      return `${API_URL}/${result.data.imageId}`;
    }
  } catch (error) {
    console.log(error);
  }
};

export { uploadImage };
