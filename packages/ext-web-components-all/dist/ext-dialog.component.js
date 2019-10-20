import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_window_Window from './Ext/window/Window.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtDialog =
/*#__PURE__*/
function (_Ext_window_Window) {
  _inheritsLoose(ExtDialog, _Ext_window_Window);

  function ExtDialog() {
    var _this;

    _this = _Ext_window_Window.call(this, [], []) || this;
    _this.xtype = 'dialog';
    return _this;
  }

  return ExtDialog;
}(Ext_window_Window); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-dialog', ExtDialog);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtDialog as default };
window.customElements.define('ext-dialog', HTMLParsedElement.withParsedCallback(ExtDialog)); //export default reactify(ExtDialog);