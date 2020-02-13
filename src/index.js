import { QuickSettings } from "./components/QuickSettings";

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
let q = new QuickSettings(document.getElementById('container'));
q.addSlider({ title: 'how_many_cats1', defaultValue: 25, marks, onChange: (obj, value) => console.log(value) })
q.addSlider({ title: 'how_many_cats2', defaultValue: 25, onChange: (obj, value) => console.log(value) })
q.addSlider({ title: 'how_many_cats3', defaultValue: 25, onChange: (obj, value) => console.log(value) })
q.addSlider({ title: 'how_many_cats4', defaultValue: 25, onChange: (obj, value) => console.log(value) })


let color = '#7b1fa2'
/** example with color pickers */
q.addColorPicker({ title: 'car_color_01',  onChange:(color,event)=>{console.log(color);}})
q.addColorPicker({ title: 'car_color_02', color, componentName:'SwatchesPicker', onChange:(ecolor,event)=>{
    let c = {...q.state.controls['car_color_02']}
    c.color=ecolor.hex 
    q.setState({
        controls: {
            ...q.state.controls,
            ['car_color_02']: c
        }
    })
   // q.state.controls['car_color_02'].color=ecolor.hex 
}})
q.addColorPicker({ title: 'car_color_03', componentName:'CompactPicker', onChange:(ecolor,event)=>console.log(ecolor) })
console.log(q)