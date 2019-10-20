import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_column_Selection from './Ext/grid/column/Selection.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtSelectioncolumn =
/*#__PURE__*/
function (_Ext_grid_column_Sele) {
  _inheritsLoose(ExtSelectioncolumn, _Ext_grid_column_Sele);

  function ExtSelectioncolumn() {
    var _this;

    _this = _Ext_grid_column_Sele.call(this, [], []) || this;
    _this.xtype = 'selectioncolumn';
    return _this;
  }

  return ExtSelectioncolumn;
}(Ext_grid_column_Selection); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-selectioncolumn', ExtSelectioncolumn);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtSelectioncolumn as default };
window.customElements.define('ext-selectioncolumn', HTMLParsedElement.withParsedCallback(ExtSelectioncolumn)); //export default reactify(ExtSelectioncolumn);