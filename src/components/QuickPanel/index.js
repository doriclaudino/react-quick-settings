import React, { Component } from 'react';
import Slider from '../Slider';
import ColorPicker from '../ColorPicker';
import ButtonColorPicker from '../ButtonColorPicker';
import { isFunction } from '../../helper/common';
import switchButton from '../Switch';

export const inputType = {
  slider: 'slider',
  colorPicker: 'colorPicker',
  buttonColorPicker: 'buttonColorPicker',
  switchButton: 'switchButton',
};
/**
 * Main class
 */
export default class QuickSettingsPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      controls: {},
    };
  }

  getControl(title) {
    const { controls } = this.state;
    return controls[title];
  }

  // eslint-disable-next-line class-methods-use-this
  getComponentForType(type) {
    switch (type) {
      case inputType.slider:
        return Slider;
      case inputType.colorPicker:
        return ColorPicker;
      case inputType.buttonColorPicker:
        return ButtonColorPicker;
      case inputType.switchButton:
        return switchButton;
      default:
        throw new Error('Component type not implemented yet.');
    }
  }

  addSwitchButton({ title, onChange, ...rest }) {
    const controller = {
      title,
      inputtype: inputType.switchButton,
      ...rest,
    };
    this.saveControlState(title, { ...controller });
    return this;
  }

  addButtonColorPicker({ title, color, onChange, ...rest }) {
    const boundSaveControlState = this.saveControlState.bind(this);
    const colorController = {
      title,
      color,
      inputtype: inputType.buttonColorPicker,
      ...rest,
    };

    colorController.onChange = (eColor, event) => {
      colorController.color = eColor;
      boundSaveControlState(title, colorController);
      if (isFunction(onChange)) onChange(eColor, event);
    };
    this.saveControlState(title, { ...colorController });
    return this;
  }

  addColorPicker({ title, color, onChange, ...rest }) {
    const boundSaveControlState = this.saveControlState.bind(this);

    const colorController = {
      title,
      color,
      inputtype: inputType.colorPicker,
      ...rest,
    };

    colorController.onChange = (eColor, event) => {
      colorController.color = eColor.hsl;
      boundSaveControlState(title, colorController);
      if (typeof onChange === 'function') onChange(eColor, event);
    };
    this.saveControlState(title, { ...colorController });
    return this;
  }

  addSlider({ title, ...rest }) {
    const { controls } = this.state;
    this.setState({
      controls: {
        ...controls,
        [title]: {
          inputtype: inputType.slider,
          title,
          ...rest,
        },
      },
    });
    return this;
  }

  saveControlState(title, newState) {
    const { controls } = this.state;
    this.setState({
      controls: {
        ...controls,
        [title]: {
          ...newState,
        },
      },
    });
  }

  /** remove control object using title as index
   * what about same title? generate ids?
   */
  remove(title) {
    const { controls } = this.state;
    delete controls[title];
    this.setState({
      controls,
    });
    return this;
  }

  updateColor(title, color) {
    const stateCopy = { ...this.state };
    stateCopy.controls[title].color = color.rgb;
    this.setState(stateCopy);
  }

  /**
   * for now just render the state.controls as JSON
   */
  render() {
    const { controls } = this.state;
    return (
      <div
        style={{
          justifyContent: 'space-between',
          display: 'flex',
          flexWrap: 'wrap',
          padding: '10px',
        }}
      >
        {Object.keys(controls).map(mappedKeyItem => {
          const item = this.getControl(mappedKeyItem);
          const DefinedComponent = this.getComponentForType(item.inputtype);
          return <DefinedComponent key={mappedKeyItem} {...item} />;
        })}
      </div>
    );
  }
}
