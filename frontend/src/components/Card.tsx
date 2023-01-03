import check from '../assets/check.svg';

type Props = {
  imageUrl: string;
};

const Card: React.FC<Props> = ({ imageUrl }) => {
  return (
    <div className="container">
      <div className="check-success">
        <img src={check} alt="" />
        <h2>Upload Successfully!</h2>
      </div>
      <img
        className="card-img"
        src={imageUrl}
        alt=""
        width={340}
        height={225}
      />
      <div className="link-container">
        <input
          className="link-input"
          type="text"
          defaultValue={imageUrl}
          disabled
        />
        <button
          className="link-button"
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
