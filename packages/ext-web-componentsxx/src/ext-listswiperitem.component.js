import Ext_dataview_listswiper_Item from './Ext/dataview/listswiper/Item'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtListswiperitemComponent extends Ext_dataview_listswiper_Item {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'listswiperitem'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-listswiperitem', ExtListswiperitemComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-listswiperitem', HTMLParsedElement.withParsedCallback(ExtListswiperitemComponent))