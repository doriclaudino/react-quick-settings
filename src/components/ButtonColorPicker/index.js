import React, { useState } from 'react'
import reactCSS from 'reactcss'
import colorUtils, { red } from 'react-color/lib/helpers/color'
import ColorPicker from '../ColorPicker/ColorPicker'
import { toRgba } from '../../helper/string'

export const ButtonColorPicker = ({ title, color, onChange }) => {
  const [isToggle, setToggled] = useState(false)
  const toggleTrueFalse = () => setToggled(!isToggle)

  const styles = reactCSS({
    default: {
      title: {
        color: color.rgb.a < 0.5 ? '#000' : colorUtils.getContrastingColor(color)
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
        backgroundColor: toRgba(color.rgb)
      },
      popover: {
        position: 'absolute',
        zIndex: '2'
      },
      cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px'
      }
    }
  })

  return (
    <div>
      <div style={styles.swatch} onClick={toggleTrueFalse}>
        <div style={styles.title}>{title}</div>
      </div>
      {isToggle ? <div style={styles.popover}>
        <div style={styles.cover} onClick={toggleTrueFalse} />
        <ColorPicker color={color && color.rgb} onChange={onChange} />
      </div> : null}
    </div>
  )
}

export default ButtonColorPicker

ButtonColorPicker.defaultProps = {
  color: red
}
