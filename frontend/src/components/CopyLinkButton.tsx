import { useState } from 'react';

type Props = {
  imageId: string;
};

const CopyLinkButton: React.FC<Props> = ({ imageId }) => {
  const [copied, setCopied] = useState(false);

  return (
    <button
      className={copied ? 'link-button link-button-true' : 'link-button'}
      onClick={() => {
        setCopied(true);
        navigator.clipboard.writeText(`${imageId}`);
      }}
    >
      {copied ? 'Copied' : 'Copy link'}
    </button>
  );
};
export default CopyLinkButton;
