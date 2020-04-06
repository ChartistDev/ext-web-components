import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_pivot_matrix_Base from '../../../Ext/pivot/matrix/Base.js';

var Mz_aggregate_matrix_Local = /*#__PURE__*/function (_Ext_pivot_matrix_Bas) {
  _inheritsLoose(Mz_aggregate_matrix_Local, _Ext_pivot_matrix_Bas);

  var _super = _createSuper(Mz_aggregate_matrix_Local);

  Mz_aggregate_matrix_Local.PROPERTIES = function PROPERTIES() {
    return ['aggregate', 'calculateAsExcel', 'cmp', 'colGrandTotalsPosition', 'collapsibleColumns', 'collapsibleRows', 'colSubTotalsPosition', 'compactViewColumnWidth', 'compactViewKey', 'grandTotalKey', 'keysSeparator', 'leftAxis', 'leftAxisType', 'listeners', 'recordsPerJob', 'resultType', 'rowGrandTotalsPosition', 'rowSubTotalsPosition', 'showZeroAsBlank', 'store', 'textGrandTotalTpl', 'textRowLabels', 'textTotalTpl', 'timeBetweenJobs', 'topAxis', 'topAxisType', 'type', 'useNaturalSorting', 'viewLayoutType'];
  };

  Mz_aggregate_matrix_Local.EVENTS = function EVENTS() {
    return [{
      name: 'afterupdate',
      parameters: 'matrix'
    }, {
      name: 'beforereconfigure',
      parameters: 'matrix,config'
    }, {
      name: 'beforeupdate',
      parameters: 'matrix'
    }, {
      name: 'buildtotals',
      parameters: 'matrix,totals'
    }, {
      name: 'cleardata',
      parameters: 'matrix'
    }, {
      name: 'columnsbuilt',
      parameters: 'matrix,columns'
    }, {
      name: 'done',
      parameters: 'matrix'
    }, {
      name: 'modelbuilt',
      parameters: 'matrix,model'
    }, {
      name: 'progress',
      parameters: 'matrix,index,total'
    }, {
      name: 'reconfigure',
      parameters: 'matrix,config'
    }, {
      name: 'recordbuilt',
      parameters: 'matrix,record,item'
    }, {
      name: 'start',
      parameters: 'matrix'
    }, {
      name: 'storebuilt',
      parameters: 'matrix,store'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Mz_aggregate_matrix_Local.getProperties = function getProperties(properties) {
    properties = properties.concat(Mz_aggregate_matrix_Local.PROPERTIES());
    return Ext_pivot_matrix_Base.getProperties(properties);
  };

  Mz_aggregate_matrix_Local.getEvents = function getEvents(events) {
    events = events.concat(Mz_aggregate_matrix_Local.EVENTS());
    return Ext_pivot_matrix_Base.getEvents(events);
  };

  _createClass(Mz_aggregate_matrix_Local, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_pivot_matrix_Bas.observedAttributes;
      Mz_aggregate_matrix_Local.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Mz_aggregate_matrix_Local.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Mz_aggregate_matrix_Local(properties, events) {
    return _Ext_pivot_matrix_Bas.call(this, properties.concat(Mz_aggregate_matrix_Local.PROPERTIES()), events.concat(Mz_aggregate_matrix_Local.EVENTS())) || this;
  }

  var _proto = Mz_aggregate_matrix_Local.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_pivot_matrix_Bas.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_pivot_matrix_Bas.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Mz_aggregate_matrix_Local;
}(Ext_pivot_matrix_Base);

export { Mz_aggregate_matrix_Local as default };