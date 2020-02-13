import React from "react";
import ReactDOM from "react-dom";
import { QuickSettingsPanel } from "./QuickPanel";

/**
 * expose and render QuickSettingsPanel on a specific container
 * we use this class to render passing the container like an basic API
 */
class QuickSettingsWrapper {
  constructor(container) {
    return this._render(container);
  }
  _render = container => {
    return ReactDOM.render(<QuickSettingsPanel />, container);
  };
}

export const QuickSettings = QuickSettingsWrapper;
