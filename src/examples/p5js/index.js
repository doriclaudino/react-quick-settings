import React from 'react';
import ReactDOM from 'react-dom';
import { slide as Menu } from 'react-burger-menu';
import Sketch from 'react-p5';
import tinycolor from 'tinycolor2';
import QuickSettings from '../../components/QuickSettings';

const RenderMenu = () => {
  const styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px',
    },
    bmBurgerBars: {
      background: '#373a47',
    },
    bmBurgerBarsHover: {
      background: '#a90000',
    },
    bmCrossButton: {
      height: '24px',
      width: '24px',
    },
    bmCross: {
      background: '#bdc3c7',
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
    },
    bmMorphShape: {
      fill: '#373a47',
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em',
    },
    bmItem: {
      display: 'inline-block',
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)',
    },
  };
  return <Menu styles={styles} id="burguer-menu" />;
};

const RenderP5Example = () => {
  let x = 50;
  let color = 'red';
  const y = 50;

  const createSettings = () => {
    // add settings to the burguer menu
    const burguerMenu = document.getElementById('burguer-menu');
    const settings = new QuickSettings(burguerMenu);

    settings.addColorPicker({
      title: 'btn1',
      color,
      onChange: pColor => {
        const newColor = tinycolor(pColor.rgb);
        // make the new color as rgba(...)
        color = newColor.toRgbString();
      },
    });
  };

  const setup = (p5, canvasParentRef) => {
    p5.frameRate(10); // 1 frame per second to see the change
    p5.createCanvas(500, 500).parent(canvasParentRef); // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
    createSettings();
  };

  const draw = p5 => {
    p5.background(0);
    p5.fill(color);
    p5.colorMode(p5.RGB, 1);
    p5.ellipse(x, y, 70, 70);
    x += 1;
  };

  return <Sketch setup={setup} draw={draw} />;
};

/**
 * render the canvas
 */
const p5container = document.getElementById('p5container');
ReactDOM.render(<RenderP5Example />, p5container);

/**
 * render the menu
 */
const container = document.getElementById('container');
ReactDOM.render(<RenderMenu />, container);
