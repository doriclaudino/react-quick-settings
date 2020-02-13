import { QuickSettings } from "./components/QuickSettings";

/**
 * expose on window for suellen learning process
 */

window.QuickSettings = QuickSettings;

let q = new QuickSettings(document.getElementById('container'));
q.addSlider({title:'how_many_cats',value:25, onChange:(v)=>console.log(v)})
