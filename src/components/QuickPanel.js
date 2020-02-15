import { Slider as _SliderComponent } from '@material-ui/core'
import React, { Component } from 'react'
import * as reactColorPicker from 'react-color'

var inputType = {
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
      controls: {}
    }
  }

  /** should we add an type? */
  addSlider ({ title = `${inputType.slider}01`, ...rest }) {
    this.setState({
      controls: {
        ...this.state.controls,
        [title]: {
          inputType: inputType.slider,
          componentName: undefined,
          title,
          ...rest
        }
      }
    })
    return this
  };

  getControl (title) {
    return { ...this.state.controls[title] }
  }

  onColorChange (color, title) {
    const control = this.getControl(title)
    control.color = color
    this.setState({
      controls: {
        ...this.state.controls,
        [title]: control
      }
    })
  }

  /** should we add an type? */
  addColorPicker ({ title = `${inputType.colorPicker}01`, componentName = 'SketchPicker', ...rest }) {
    const boundColorChange = this.onColorChange.bind(this)
    this.setState({
      controls: {
        ...this.state.controls,
        [title]: {
          inputType: inputType.colorPicker,
          componentName,
          title,
          ...rest,
          onChange: function (color, event) {
            boundColorChange(color, title)
            rest.onChange(color, event)
          }
        }
      }
    })
    return this
  };

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
        return reactColorPicker[componentName]
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
      <div>
        {Object.keys(this.state.controls).map((mappedKeyItem) => {
          const item = this.state.controls[mappedKeyItem]
          const { title, inputType, componentName, ...rest } = item
          const Component = this.getComponentForType(inputType, componentName)
          const key = this.generateNewKey(item)
          return <Component {...rest} key={key} id={key} />
        })}
      </div>
    )
  }
}
