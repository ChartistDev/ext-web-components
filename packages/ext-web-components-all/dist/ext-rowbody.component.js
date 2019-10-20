import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_RowBody from './Ext/grid/RowBody.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtRowbody =
/*#__PURE__*/
function (_Ext_grid_RowBody) {
  _inheritsLoose(ExtRowbody, _Ext_grid_RowBody);

  function ExtRowbody() {
    var _this;

    _this = _Ext_grid_RowBody.call(this, [], []) || this;
    _this.xtype = 'rowbody';
    return _this;
  }

  return ExtRowbody;
}(Ext_grid_RowBody); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-rowbody', ExtRowbody);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtRowbody as default };
window.customElements.define('ext-rowbody', HTMLParsedElement.withParsedCallback(ExtRowbody)); //export default reactify(ExtRowbody);