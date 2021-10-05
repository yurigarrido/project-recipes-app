import React from 'react';
import PropTypes from 'prop-types';

const Instructions = ({ inst }) => (
  <p data-testid="instructions">
    { inst }
  </p>
);

Instructions.propTypes = {
  inst: PropTypes.string.isRequired,
};

export default Instructions;
