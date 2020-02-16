import React from 'react';
import ReactDOM from 'react-dom';
import QuickSettingsPanel from '../QuickPanel';

/**
 * expose and render QuickSettingsPanel on a specific container
 * we use this class to render passing the container like an basic API
 */
const QuickSettingsWrapper = container => {
  let panelRef = React.createRef();
  ReactDOM.render(
    <QuickSettingsPanel
      ref={c => {
        panelRef = c;
      }}
    />,
    container
  );
  return panelRef;
};

export default QuickSettingsWrapper;
