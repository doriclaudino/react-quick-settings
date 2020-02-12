import React, { Component } from "react";
import ReactDOM from "react-dom";

/**
 * expose and render QuickSettingsInstance on a specific container
 * we use this class to render passing the container like an basic API
 */
class QuickSettingsWrapper {
  constructor(container) {
    return this._render(container);
  }
  _render = container => {
    return ReactDOM.render(<QuickSettingsInstance />, container);
  };
}

/**
 * Main class
 */
class QuickSettingsInstance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      controls: {}
    };
  }

  /** should we add an type? */
  addSlider = (title, min, max, value, step, callback) => {
    this.setState({
      controls: {
        ...this.state.controls,
        [title]: {
          title,
          min,
          max,
          value,
          step,
          callback
        }
      }
    });
    return this;
  };

  /** remove control object using title as index
   * what about same title? generate ids?
   */
  remove = title => {
    let controls = { ...this.state.controls };
    delete controls[title];
    this.setState({
      controls
    });
    return this;
  };

  /**
   * for now just render the state.controls as JSON
   */
  render() {
    return (
      <div>
        {Object.keys(this.state.controls).map((key, index) => (
          <p key={key}>
            <b>mapping object number {index} - </b>
            {JSON.stringify(this.state.controls[key])}
          </p>
        ))}
      </div>
    );
  }
}

export const QuickSettings = QuickSettingsWrapper;
