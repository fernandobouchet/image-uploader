type Props = {
  imageUrl: string;
};

const Card: React.FC<Props> = ({ imageUrl }) => {
  return (
    <div id="card">
      <h2>Upload Successfully!</h2>
      <img src={imageUrl} alt="" width={340} />
      <div>
        <input type="text" defaultValue={imageUrl} disabled />
        <button
          className="file-upload-button"
          onClick={() => {
            navigator.clipboard.writeText(imageUrl);
          }}
        >
          Copy link
        </button>
      </div>
    </div>
  );
};
export default Card;
