import { Slider as _SliderComponent } from '@material-ui/core';
import React, { Component } from 'react';
import ColorPicker from '../ColorPicker';
import ButtonColorPicker from '../ButtonColorPicker';
import { isFunction } from '../../helper/common';

export const inputType = {
  slider: 'slider',
  colorPicker: 'colorPicker',
  buttonColorPicker: 'buttonColorPicker',
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
        return _SliderComponent;
      case inputType.colorPicker:
        return ColorPicker;
      case inputType.buttonColorPicker:
        return ButtonColorPicker;
      default:
        return null;
    }
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
      if (isFunction(rest.onChange)) rest.onChange(eColor, event);
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
      if (typeof rest.onChange === 'function') rest.onChange(eColor, event);
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
          // eslint-disable-next-line react/jsx-props-no-spreading
          return <DefinedComponent key={mappedKeyItem} {...item} />;
        })}
      </div>
    );
  }
}
