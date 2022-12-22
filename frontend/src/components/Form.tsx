import image from '../assets/image.svg';

const Form = () => {
  return (
    <>
      <form>
        <h2>Upload your image</h2>
        <p>File should be Jpeg, Png,...</p>
        <label htmlFor="">
          <div>
            <img src={image} alt="" />
            <p>Drag & Drop your image here</p>
          </div>
        </label>
        <p>Or</p>
        <input type="file" />
      </form>
    </>
  );
};
export default Form;
