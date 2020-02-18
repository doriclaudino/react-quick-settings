import React from 'react';
import ReactDOM from 'react-dom';
import { slide as Menu } from 'react-burger-menu';
import { red } from 'react-color/lib/helpers/color';
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

const container = document.getElementById('container');
ReactDOM.render(<RenderMenu />, container);
const burguerMenu = document.getElementById('burguer-menu');
const settings = new QuickSettings(burguerMenu);

settings
  .addButtonColorPicker({ title: 'btn1', color: 'blue' })
  .addButtonColorPicker({ title: 'btn2', color: red });
