import { Slider as _SliderComponent } from '@material-ui/core'
import React, { Component } from 'react'
import ColorPicker from './ColorPicker/ColorPicker'
import { red } from 'react-color/lib/helpers/color'
import { toRgba } from '../helper/string'

export const inputType = {
  slider: 'slider',
  colorPicker: 'colorPicker'
}
/**
 * Main class
 */
export class QuickSettingsPanel extends Component {
  constructor (props) {
    super(props)
    this.state = {
      controls: {
      }
    }
  }

  updateColor (title, color) {
    const stateCopy = { ...this.state }
    stateCopy.controls[title].color = color.rgb
    this.setState(stateCopy)
  }

  addColorPicker ({ title, color, onChange, ...rest }) {
    const boundSaveControlState = this.saveControlState.bind(this)

    const colorController = {
      title,
      color,
      inputType: inputType.colorPicker,
      ...rest
    }

    colorController.onChange = function (color, event) {
      colorController.color = color.hsl
      boundSaveControlState(title, colorController)
      rest.onChange && rest.onChange(color, event)
    }
    this.saveControlState(title, { ...colorController })
    return this
  };

  addSlider ({ title, ...rest }) {
    this.setState({
      controls: {
        ...this.state.controls,
        [title]: {
          inputType: inputType.slider,
          title,
          ...rest
        }
      }
    })
    return this
  };

  saveControlState (title, newState) {
    this.setState({
      controls: {
        ...this.state.controls,
        [title]: {
          ...newState
        }
      }
    })
  }

  getControl (title) {
    return this.state.controls[title]
  }

  /** remove control object using title as index
   * what about same title? generate ids?
   */
  remove (title) {
    const controls = { ...this.state.controls }
    delete controls[title]
    this.setState({
      controls
    })
    return this
  };

  getComponentForType (type, componentName) {
    switch (type) {
      case inputType.slider:
        return _SliderComponent
      case inputType.colorPicker:
        return ColorPicker
      default:
        break
    }
  }

  generateNewKey (control) { return `control_${control.inputType}_${control.title}` }

  /**
   * for now just render the state.controls as JSON
   */
  render () {
    return (
      <div style={{ justifyContent: 'space-between', display: 'flex', flexWrap: 'wrap', padding: '10px' }}>
        {Object.keys(this.state.controls).map((mappedKeyItem) => {
          const item = this.getControl(mappedKeyItem)
          const Component = this.getComponentForType(item.inputType)
          return (<Component key={mappedKeyItem} {...item} />)
        })}
      </div>
    )
  }
}
