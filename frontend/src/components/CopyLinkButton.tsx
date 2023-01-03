import { useState } from 'react';

type Props = {
  imageUrl: string;
};

const CopyLinkButton: React.FC<Props> = ({ imageUrl }) => {
  const [copied, setCopied] = useState(false);

  return (
    <button
      className={copied ? 'link-button link-button-true' : 'link-button'}
      onClick={() => {
        setCopied(true);
        navigator.clipboard.writeText(imageUrl);
      }}
    >
      {copied ? 'Copied' : 'Copy link'}
    </button>
  );
};
export default CopyLinkButton;
