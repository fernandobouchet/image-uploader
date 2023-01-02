import image from '../assets/image.svg';
import { uploadImage } from '../services/imageService';
import * as React from 'react';

type Props = {
  setimageUrl: React.Dispatch<React.SetStateAction<undefined | string>>;
};

const Form: React.FC<Props> = ({ setimageUrl }) => {
  const handleDrag = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files) {
      handleUpload(e.dataTransfer.files);
    }
  };

  const handleUpload = async (data: FileList) => {
    setimageUrl(await uploadImage(data[0]));
  };

  return (
    <>
      <form id="form">
        <h2>Upload your image</h2>
        <p>File should be Jpeg, Png,...</p>
        <label
          id="input-label"
          htmlFor="input-file"
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <div id="drop-img-container">
            <img src={image} alt="" draggable="false" />
            <p>Drag & Drop your image here</p>
          </div>
        </label>
        <p>Or</p>
        <label htmlFor="input-file-label" className="file-upload-button">
          Choose a file
          <input
            type="file"
            id="input-file-label"
            accept="image/jpeg, image/jpg, image/png"
            onChange={(e) => handleUpload(e.target.files!)}
          />
        </label>
      </form>
    </>
  );
};
export default Form;
