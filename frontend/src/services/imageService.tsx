import axios from 'axios';
const API_URL = 'https://image-uploader-sgfx.onrender.com';

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
    } else {
      console.log('Unknow error');
    }
  } catch (error) {
    console.log(error);
  }
};

export { uploadImage };
