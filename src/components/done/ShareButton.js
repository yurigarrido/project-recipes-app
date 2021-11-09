import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clipboardCopy from 'clipboard-copy';
import shareIcon from '../../images/shareIcon.svg';

const ShareButton = ({ type, id, index }) => {
  const [copied, setCopied] = useState(false);

  const handleClick = (() => {
    const sec = 1000;
    const { pathname } = window.location;
    const link = window.location.href.replace(pathname, '');
    clipboardCopy(`${link}/${type}s/${id}`);
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
          data-testid={ `${index}-horizontal-share-btn` }
          src={ shareIcon }
          alt="share icon"
        />
      </button>
      { copied && <p>Link copiado!</p> }
    </div>
  );
};

ShareButton.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default ShareButton;
