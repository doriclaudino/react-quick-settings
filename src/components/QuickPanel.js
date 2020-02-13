import { Slider as _SliderComponent } from '@material-ui/core';
import React,  { Component }  from "react";

var inputType  = {
    slider: 'slider'
  };

/**
 * Main class
 */
export class QuickSettingsPanel extends Component {
    constructor(props) {
      super(props);
      this.state = {
        controls: {}
      };
    }
  
    /** should we add an type? */
    addSlider = ({title='slider01', options}) => {
      this.setState({
        controls: {
          ...this.state.controls,
          [title]: {
            inputType:  inputType.slider,
            title,
            options
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

    getComponentForType = (type)=>{
        switch (type) {
            case inputType.slider:
                return _SliderComponent;
            default:
                break;
        }
    }

    generateNewKey = (control) => `control_${control.inputType}_${control.title}` 
  
    /**
     * for now just render the state.controls as JSON
     */
    render() {
      return (
        <div>
          {Object.keys(this.state.controls).map((mappedKeyItem) => {
              let item = this.state.controls[mappedKeyItem]
              const {title, options, inputType} = item              
              let Component = this.getComponentForType(inputType)
              let key = this.generateNewKey(item)
              console.log(title)
              return <Component key id={key} {...options}/>  
          })
          }
        </div>
      );
    }
  }