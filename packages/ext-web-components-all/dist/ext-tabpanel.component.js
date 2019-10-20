import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_TabPanel from './Ext/TabPanel.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtTabpanel =
/*#__PURE__*/
function (_Ext_TabPanel) {
  _inheritsLoose(ExtTabpanel, _Ext_TabPanel);

  function ExtTabpanel() {
    var _this;

    _this = _Ext_TabPanel.call(this, [], []) || this;
    _this.xtype = 'tabpanel';
    return _this;
  }

  return ExtTabpanel;
}(Ext_TabPanel); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-tabpanel', ExtTabpanel);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtTabpanel as default };
window.customElements.define('ext-tabpanel', HTMLParsedElement.withParsedCallback(ExtTabpanel)); //export default reactify(ExtTabpanel);