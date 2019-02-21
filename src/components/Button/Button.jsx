import React from 'react';
import { string, func } from 'prop-types';

const Button = ({ className, label, handleClick }) => (
  <button
    className={className}
    type="button"
    onClick={handleClick}
  >
    {label}
  </button>
);

Button.defaultProps = {
  handleClick: undefined,
  className: '',
};

Button.propTypes = {
  className: string,
  label: string.isRequired,
  handleClick: func,
};

export default Button;
