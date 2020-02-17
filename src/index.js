import { red } from 'react-color/lib/helpers/color';
import QuickSettings from './components/QuickSettings';

/**
 * expose on window for suellen learning process
 */

window.QuickSettings = QuickSettings;

/**
 * quick example using slides https://material-ui.com/pt/components/slider/#api
 */
const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];
const colorPickerMocks = [
  { title: 'picker1', color: red.hsl },
  { title: 'picker2', color: red.hsl },
  { title: 'picker3', color: red.hsl },
  { title: 'picker4', color: red.hsl },
];
const buttonColorPickerMocks = [
  { title: 'btn1', color: red },
  { title: 'btn2', color: red },
  { title: 'btn3', color: red },
];
const sliderMocks = [
  {
    title: 'slider1',
    marks,
    defaultValue: 25,
    styles: { label: { color: 'green', fontWeight: 'bold' } },
  },
  { title: 'slider2', defaultValue: 10 },
  { title: 'slider3', defaultValue: 2 },
];

const q = new QuickSettings(document.getElementById('container'));
window.q = q;
buttonColorPickerMocks.forEach(mock => q.addButtonColorPicker(mock));
colorPickerMocks.forEach(mock => q.addColorPicker(mock));
sliderMocks.forEach(mock => q.addSlider(mock));

/** teste */
