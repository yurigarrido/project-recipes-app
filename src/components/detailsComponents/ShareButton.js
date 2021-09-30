import React, { useState } from 'react';
import clipboardCopy from 'clipboard-copy';
import shareIcon from '../../images/shareIcon.svg';

const ShareButton = () => {
  const [copied, setCopied] = useState(false);

  const handleClick = (() => {
    const link = window.location;
    const sec = 1000;
    clipboardCopy(link);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, sec);
  });

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
