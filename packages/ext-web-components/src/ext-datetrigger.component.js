import Ext_field_trigger_Date from './Ext/field/trigger/Date'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtDatetriggerComponent extends Ext_field_trigger_Date {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'datetrigger'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-datetrigger', ExtDatetriggerComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-datetrigger', HTMLParsedElement.withParsedCallback(ExtDatetriggerComponent))