import React from 'react';
import reactCSS from 'reactcss';
import PropTypes from 'prop-types';
import SliderSwatch from '../SliderSwatch';
import Shapes from '../../helper/shapes';

const SliderSwatches = ({ onClick, hsl }) => {
  const styles = reactCSS({
    default: {
      swatches: {
        marginTop: '4px',
      },
      swatch: {
        boxSizing: 'border-box',
        width: '20%',
        paddingRight: '1px',
        float: 'left',
      },
      clear: {
        clear: 'both',
      },
    },
  });

  // Acceptible difference in floating point equality
  const epsilon = 0.1;

  return (
    <div style={styles.swatches}>
      <div style={styles.swatch}>
        <SliderSwatch
          hsl={hsl}
          offset=".80"
          active={Math.abs(hsl.l - 0.8) < epsilon && Math.abs(hsl.s - 0.5) < epsilon}
          onClick={onClick}
          first
        />
      </div>
      <div style={styles.swatch}>
        <SliderSwatch
          hsl={hsl}
          offset=".65"
          active={Math.abs(hsl.l - 0.65) < epsilon && Math.abs(hsl.s - 0.5) < epsilon}
          onClick={onClick}
        />
      </div>
      <div style={styles.swatch}>
        <SliderSwatch
          hsl={hsl}
          offset=".50"
          active={Math.abs(hsl.l - 0.5) < epsilon && Math.abs(hsl.s - 0.5) < epsilon}
          onClick={onClick}
        />
      </div>
      <div style={styles.swatch}>
        <SliderSwatch
          hsl={hsl}
          offset=".35"
          active={Math.abs(hsl.l - 0.35) < epsilon && Math.abs(hsl.s - 0.5) < epsilon}
          onClick={onClick}
        />
      </div>
      <div style={{ ...styles.swatch, paddingRight: '0px' }}>
        <SliderSwatch
          hsl={hsl}
          offset=".20"
          active={Math.abs(hsl.l - 0.2) < epsilon && Math.abs(hsl.s - 0.5) < epsilon}
          onClick={onClick}
          last
        />
      </div>
      <div style={styles.clear} />
    </div>
  );
};

SliderSwatches.propTypes = {
  hsl: Shapes.hsl,
  onClick: PropTypes.func,
};

SliderSwatches.defaultProps = {
  hsl: undefined,
  onClick: undefined,
};

export default SliderSwatches;
