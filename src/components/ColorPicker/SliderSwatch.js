import React from 'react'
import reactCSS from 'reactcss'

export const SliderSwatch = ({ hsl, offset, onClick = () => { }, active }) => {
  const styles = reactCSS({
    default: {
      swatch: {
        height: '12px',
        background: `hsl(${hsl.h}, 50%, ${(offset * 100)}%)`,
        cursor: 'pointer'
      }
    },
    active: {
      swatch: {
        transform: 'scaleY(1.2)',
        borderRadius: '3.6px/2px'
      }
    }
  }, { active })

  const handleClick = e => onClick({
    h: hsl.h,
    s: 0.5,
    l: offset,
    source: 'hsl'
  }, e)

  return (
    <div style={styles.swatch} onClick={handleClick} />
  )
}

export default SliderSwatch
