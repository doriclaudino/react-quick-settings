import React, { useState } from 'react';
import reactCSS from 'reactcss';
import propTypes from 'prop-types';
import colorUtils, { red } from 'react-color/lib/helpers/color';
import tinycolor from 'tinycolor2';
import { ColorWrap } from 'react-color/lib/components/common';
import ColorPicker from '../ColorPicker';
import Shapes from '../../helper/shapes';

const buttonColorPicker = ({ title, rgb, onChange }) => {
  const [isToggle, setToggled] = useState(false);
  const toggleTrueFalse = () => setToggled(!isToggle);

  const styles = reactCSS({
    default: {
      title: {
        color: rgb.a < 0.5 ? '#000' : colorUtils.getContrastingColor(tinycolor(rgb)),
      },
      swatch: {
        borderRadius: '2px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 48,
        padding: 4,
        flexGrow: 1,
        height: 24,
        backgroundColor: tinycolor(rgb).toString('prgb'),
      },
      popover: {
        position: 'absolute',
        zIndex: '2',
      },
      cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      },
    },
  });

  return (
    <div>
      <div style={styles.swatch} onClick={toggleTrueFalse} role="presentation">
        <div style={styles.title}>{title}</div>
      </div>
      {isToggle ? (
        <div style={styles.popover}>
          <div style={styles.cover} onClick={toggleTrueFalse} role="presentation" />
          <ColorPicker color={rgb} onChange={onChange} />
        </div>
      ) : null}
    </div>
  );
};

buttonColorPicker.propTypes = {
  title: propTypes.string.isRequired,
  rgb: Shapes.rgb,
  onChange: propTypes.func,
};

buttonColorPicker.defaultProps = {
  rgb: red.rgb,
  onChange: undefined,
};

export default ColorWrap(buttonColorPicker);
