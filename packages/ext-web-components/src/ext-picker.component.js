import Ext_Picker from './Ext/Picker'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtPickerComponent extends Ext_Picker {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'picker'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-picker', ExtPickerComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-picker', HTMLParsedElement.withParsedCallback(ExtPickerComponent))