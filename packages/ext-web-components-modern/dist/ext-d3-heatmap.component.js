import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_d3_HeatMap from '@sencha/ext-runtime-base/dist/./Ext/d3/HeatMap.js';
import Ext_d3_HeatMap from './Ext/d3/HeatMap.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCD3_heatmap =
/*#__PURE__*/
function (_Ext_d3_HeatMap) {
  _inheritsLoose(EWCD3_heatmap, _Ext_d3_HeatMap);

  function EWCD3_heatmap() {
    var _this;

    _this = _Ext_d3_HeatMap.call(this, [], []) || this;
    _this.xtype = 'd3-heatmap';
    return _this;
  }

  return EWCD3_heatmap;
}(Ext_d3_HeatMap);

export { EWCD3_heatmap as default };
window.customElements.define('ext-d3-heatmap', HTMLParsedElement.withParsedCallback(EWCD3_heatmap));