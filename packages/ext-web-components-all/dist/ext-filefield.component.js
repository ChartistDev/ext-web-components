import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_File from './Ext/field/File.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtFilefield =
/*#__PURE__*/
function (_Ext_field_File) {
  _inheritsLoose(ExtFilefield, _Ext_field_File);

  function ExtFilefield() {
    var _this;

    _this = _Ext_field_File.call(this, [], []) || this;
    _this.xtype = 'filefield';
    return _this;
  }

  return ExtFilefield;
}(Ext_field_File); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-filefield', ExtFilefield);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtFilefield as default };
window.customElements.define('ext-filefield', HTMLParsedElement.withParsedCallback(ExtFilefield)); //export default reactify(ExtFilefield);