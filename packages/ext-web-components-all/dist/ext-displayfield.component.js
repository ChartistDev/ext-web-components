import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Display from './Ext/form/Display.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtDisplayfield =
/*#__PURE__*/
function (_Ext_form_Display) {
  _inheritsLoose(ExtDisplayfield, _Ext_form_Display);

  function ExtDisplayfield() {
    var _this;

    _this = _Ext_form_Display.call(this, [], []) || this;
    _this.xtype = 'displayfield';
    return _this;
  }

  return ExtDisplayfield;
}(Ext_form_Display); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-displayfield', ExtDisplayfield);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtDisplayfield as default };
window.customElements.define('ext-displayfield', HTMLParsedElement.withParsedCallback(ExtDisplayfield)); //export default reactify(ExtDisplayfield);