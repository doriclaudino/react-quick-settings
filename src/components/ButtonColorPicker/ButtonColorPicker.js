import React from 'react'
import reactCSS from 'reactcss'
import colorUtils from 'react-color/lib/helpers/color'
import ColorPicker from '../ColorPicker/ColorPicker';
import { ColorWrap } from 'react-color/lib/components/common';

class SketchExample extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            displayColorPicker: false,
            color: colorUtils.toState(this.props.color)
        };
    }

    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    handleClose = () => {
        this.setState({ displayColorPicker: false })
    };

    handleChange = (color) => {
        this.setState({ color })
    };

    toRgba = (rgb) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.color !== this.props.color)
            this.setState({ color: colorUtils.toState(this.props.color) })
    }

    render() {
        const styles = reactCSS({
            default: {
                title: {
                    color: this.state.color.rgb.a < 0.5 ? '#000' : colorUtils.getContrastingColor(this.state.color)
                },
                swatch: {
                    borderRadius: '2px',
                    boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minWidth: 48,
                    padding: 4,
                    flexGrow: 1,
                    height: 24,
                    backgroundColor: this.toRgba(this.state.color.rgb)
                },
                popover: {
                    position: 'absolute',
                    zIndex: '2',
                },
                cover: {
                    position: 'fixed',
                    top: '0px',
                    right: '0px',
                    bottom: '0px',
                    left: '0px',
                },
            },
        });

        return (
            <div>
                <div style={styles.swatch} onClick={this.handleClick}>
                    <div style={styles.title}>{this.props.title}</div>
                </div>
                {this.state.displayColorPicker ? <div style={styles.popover}>
                    <div style={styles.cover} onClick={this.handleClose} />
                    <ColorPicker color={this.state.color.rgb} onChange={this.handleChange} />
                </div> : null}

            </div>
        )
    }
}

export default ColorWrap(SketchExample)