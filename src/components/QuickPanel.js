import { Slider as _SliderComponent } from '@material-ui/core'
import React, { Component } from 'react'
import * as reactColorPicker from 'react-color'
import { ColorPickerController } from './ColorPickerController'
import ButtonColorPicker from './ButtonColorPicker/ButtonColorPicker'
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
      controls: {},
      color: red
    }
    this.handleChangeComplete = this.handleChangeComplete.bind(this)
  }

  handleChangeComplete (data) {
    this.setState({ color: data })
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
    return { ...this.state.controls[title] }
  }

  /** should we add an type? */
  addColorPicker ({ title = `${inputType.colorPicker}01`, componentName = 'ColorPicker', ...rest }) {
    const boundSaveControlState = this.saveControlState.bind(this)

    const colorController = new ColorPickerController({ title, componentName, disabled: true, ...rest })

    colorController.onChange = function (color, event) {
      colorController.attr('color', color)
      boundSaveControlState(title, colorController)
      rest.onChange && rest.onChange(color, event)
    }
    this.saveControlState(title, { ...colorController })
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
        return componentName !== 'ColorPicker' ? reactColorPicker[componentName] : ColorPicker
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
      <div style={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1, height: '100vh' }}>
        <div style={{ width: 40, height: 40, backgroundColor: toRgba(this.state.color && this.state.color.rgb) }} />

        <ButtonColorPicker title='Color-red' color={this.state.color} onChange={this.handleChangeComplete} />

        <ColorPicker
          onChange={this.handleChangeComplete}
        />

        <ColorPicker
          title='color01'
          color={this.state.color && this.state.color.hsl}
          onChange={this.handleChangeComplete}
        />

        {/* <SketchExample />
        <SketchExample /> */}
        {/* {Object.keys(this.state.controls).map((mappedKeyItem) => {
          const item = this.state.controls[mappedKeyItem]
          const { title, inputType, componentName, ...rest } = item
          const Component = this.getComponentForType(inputType, componentName)
          const key = this.generateNewKey(item)
          console.log({ rest })
          return <Component {...rest} key={key} id={key} title={title} />
        })} */}
      </div>
    )
  }
}
