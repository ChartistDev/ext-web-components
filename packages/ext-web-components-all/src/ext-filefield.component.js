import Ext_field_File from './Ext/field/File.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtFilefield extends Ext_field_File {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'filefield'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-filefield', ExtFilefield);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-filefield', HTMLParsedElement.withParsedCallback(ExtFilefield))
//export default reactify(ExtFilefield);