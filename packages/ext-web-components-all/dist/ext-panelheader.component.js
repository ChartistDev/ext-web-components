import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_panel_Header from './Ext/panel/Header.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtPanelheader =
/*#__PURE__*/
function (_Ext_panel_Header) {
  _inheritsLoose(ExtPanelheader, _Ext_panel_Header);

  function ExtPanelheader() {
    var _this;

    _this = _Ext_panel_Header.call(this, [], []) || this;
    _this.xtype = 'panelheader';
    return _this;
  }

  return ExtPanelheader;
}(Ext_panel_Header); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-panelheader', ExtPanelheader);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtPanelheader as default };
window.customElements.define('ext-panelheader', HTMLParsedElement.withParsedCallback(ExtPanelheader)); //export default reactify(ExtPanelheader);