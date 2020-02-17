import React from 'react';
import propTypes from 'prop-types';
import { Typography, Slider } from '@material-ui/core';
import merge from 'lodash/merge';

const slider = ({ title, styles: passedStyles = {}, ...rest }) => {
  const getTitle = () => `label-for-slider-${title}`;

  const styles = merge({ container: { flex: 1 }, slider: {}, label: {} }, passedStyles);
  return (
    <div style={styles.container}>
      <Typography id={getTitle()} gutterBottom style={styles.label}>
        {title}
      </Typography>
      <Slider aria-labelledby={getTitle()} {...rest} style={styles.slider} />
    </div>
  );
};

slider.propTypes = {
  title: propTypes.string.isRequired,
  styles: propTypes.oneOfType([propTypes.object, propTypes.objectOf(StyleSheet)]),
};

slider.defaultProps = {
  styles: undefined,
};

export default slider;
