import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Spinner from './Ext/form/Spinner.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtSpinnerfield =
/*#__PURE__*/
function (_Ext_form_Spinner) {
  _inheritsLoose(ExtSpinnerfield, _Ext_form_Spinner);

  function ExtSpinnerfield() {
    var _this;

    _this = _Ext_form_Spinner.call(this, [], []) || this;
    _this.xtype = 'spinnerfield';
    return _this;
  }

  return ExtSpinnerfield;
}(Ext_form_Spinner); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-spinnerfield', ExtSpinnerfield);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtSpinnerfield as default };
window.customElements.define('ext-spinnerfield', HTMLParsedElement.withParsedCallback(ExtSpinnerfield)); //export default reactify(ExtSpinnerfield);