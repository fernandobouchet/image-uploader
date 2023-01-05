import { useEffect, useState } from 'react';
import check from '../assets/check.svg';
import CopyLinkButton from './CopyLinkButton';
import Loader from './Loader';

type Props = {
  imageUrl: string;
};

const Card: React.FC<Props> = ({ imageUrl }) => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);

  useEffect(() => {
    const image = new window.Image();
    image.src = imageUrl;
    image.onload = () => {
      setImageIsLoaded(true);
    };
  }, [imageUrl]);

  return (
    <>
      {imageIsLoaded ? (
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
            <CopyLinkButton imageId={imageUrl} />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
export default Card;
