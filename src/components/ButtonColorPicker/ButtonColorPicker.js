import React from 'react'
import reactCSS from 'reactcss'
import colorUtils from 'react-color/lib/helpers/color'
import ColorPicker from '../ColorPicker/ColorPicker';
import { toRgba } from '../../helper/string';

class ButtonColorPicker extends React.Component {
    constructor() {
        super()
        this.state = {
            displayColorPicker: false
        };
    }

    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    handleClose = () => {
        this.setState({ displayColorPicker: false })
    };

    render() {
        const styles = reactCSS({
            default: {
                title: {
                    color: this.props.color.rgb.a < 0.5 ? '#000' : colorUtils.getContrastingColor(this.props.color)
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
                    backgroundColor: toRgba(this.props.color.rgb)
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
                    <ColorPicker {...this.props} color={this.props.color && this.props.color.rgb} />
                </div> : null}
            </div>
        )
    }
}

export default ButtonColorPicker