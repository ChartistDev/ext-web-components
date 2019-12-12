//import Ext_slider_Slider from '@sencha/ext-runtime-base/dist/./Ext/slider/Slider.js';
import Ext_slider_Slider from './Ext/slider/Slider.js';
import ElementParser from './ElementParser.js';

export default class EWCSliderfield extends Ext_slider_Slider {
    constructor() {
        super ([], []);
        this.xtype = 'sliderfield';
    }

}
window.customElements.define('ext-sliderfield', ElementParser.withParsedCallback(EWCSliderfield));
