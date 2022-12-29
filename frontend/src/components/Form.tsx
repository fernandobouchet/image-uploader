import { useState } from 'react';
import image from '../assets/image.svg';

const Form = () => {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleve') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files) {
      handleUpload(e.dataTransfer.files);
    }
  };

  const handleUpload = (data: FileList) => {
    console.log(data[0]);
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
            <img src={image} alt="" />
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
