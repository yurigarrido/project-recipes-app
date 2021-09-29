import React, { useEffect, useState } from 'react';
import clipboardCopy from 'clipboard-copy';
import shareIcon from '../../images/shareIcon.svg';

const ShareButton = () => {
  const [copied, setCopied] = useState(false);

  const handleClick = (() => {
    const link = window.location;
    clipboardCopy(link);
    setCopied(true);
  });

  useEffect(() => {
    const sec = 1000;
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, sec);
    }
  }, [copied]);

  return (
    <div>
      <button
        type="button"
        onClick={ () => handleClick() }
      >
        <img
          src={ shareIcon }
          alt="share icon"
          data-testid="share-btn"
        />
      </button>
      { copied && <p>Link copiado!</p> }
    </div>
  );
};

export default ShareButton;
