import { QuickSettings } from './components/QuickSettings'
import { red } from 'react-color/lib/helpers/color'

/**
 * expose on window for suellen learning process
 */

window.QuickSettings = QuickSettings

/**
 * quick example using slides https://material-ui.com/pt/components/slider/#api
 */
const marks = [
  {
    value: 0,
    label: '0°C'
  },
  {
    value: 20,
    label: '20°C'
  },
  {
    value: 37,
    label: '37°C'
  },
  {
    value: 100,
    label: '100°C'
  }
]
const colorPickerMocks = [{ title: 'picker1', color: red.hsl }, { title: 'picker2', color: red.hsl }, { title: 'picker3', color: red.hsl }, { title: 'picker4', color: red.hsl }]

const q = new QuickSettings(document.getElementById('container'))
window.q = q
colorPickerMocks.forEach(mock => q.addColorPicker(mock))
q.addSlider({
  title: 'how_many_cats1',
  defaultValue: 25,
  marks,
  onChange: (obj, value) => console.log(value)
})
q.addSlider({
  title: 'how_many_cats2',
  defaultValue: 25,
  onChange: (obj, value) => console.log(value)
})
q.addSlider({
  title: 'how_many_cats3',
  defaultValue: 25,
  onChange: (obj, value) => console.log(value)
})
q.addSlider({
  title: 'how_many_cats4',
  defaultValue: 25,
  onChange: (obj, value) => console.log(value)
})

// let propColor = '#000'
// function userOnChangeCallback (color, event) {
//   propColor = color
// }
/** example with color pickers */

// q.addColorPicker({
//   title: 'car_color_04'
// })
// q.addColorPicker({
//   title: 'car_color_03',
//   componentName: 'CompactPicker',
//   onChange: userOnChangeCallback
// })
// console.log(q)
