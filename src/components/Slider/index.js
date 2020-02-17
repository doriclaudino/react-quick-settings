import React from 'react';
import propTypes from 'prop-types';
import { Typography, Slider } from '@material-ui/core';

const slider = ({ title, ...rest }) => {
  const getTitle = () => `label-for-slider-${title}`;

  return (
    <div>
      <Typography id={getTitle()} gutterBottom>
        {title}
      </Typography>
      <Slider aria-labelledby={getTitle()} {...rest} />
    </div>
  );
};

slider.propTypes = {
  title: propTypes.string.isRequired,
};

export default slider;
