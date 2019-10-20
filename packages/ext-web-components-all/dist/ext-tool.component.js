import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_panel_Tool from './Ext/panel/Tool.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtTool =
/*#__PURE__*/
function (_Ext_panel_Tool) {
  _inheritsLoose(ExtTool, _Ext_panel_Tool);

  function ExtTool() {
    var _this;

    _this = _Ext_panel_Tool.call(this, [], []) || this;
    _this.xtype = 'tool';
    return _this;
  }

  return ExtTool;
}(Ext_panel_Tool); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-tool', ExtTool);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtTool as default };
window.customElements.define('ext-tool', HTMLParsedElement.withParsedCallback(ExtTool)); //export default reactify(ExtTool);