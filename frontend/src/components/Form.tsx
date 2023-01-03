import image from '../assets/image.svg';
import { uploadImage } from '../services/imageService';

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

    if (
      (e.dataTransfer.files && e.dataTransfer.files[0].type === 'image/jpeg') ||
      e.dataTransfer.files[0].type === 'image/jpg' ||
      e.dataTransfer.files[0].type === 'image/png'
    ) {
      handleUpload(e.dataTransfer.files);
    } else {
      alert('File must be image/jpeg, image/jpg or image/png');
    }
  };

  const handleUpload = async (data: FileList) => {
    setimageUrl(await uploadImage(data[0]));
  };

  return (
    <>
      <form className="container">
        <h2>Upload your image</h2>
        <p className="form-p">File should be Jpeg, Png,...</p>
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
            <p className="form-p-sub">Drag & Drop your image here</p>
          </div>
        </label>
        <p className="form-p-sub">Or</p>
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
