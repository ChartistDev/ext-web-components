import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_data_validator_AbstractDate from '../../../Ext/data/validator/AbstractDate.js';

var Ext_data_validator_Date = /*#__PURE__*/function (_Ext_data_validator_A) {
  _inheritsLoose(Ext_data_validator_Date, _Ext_data_validator_A);

  var _super = _createSuper(Ext_data_validator_Date);

  Ext_data_validator_Date.PROPERTIES = function PROPERTIES() {
    return ['format', 'message'];
  };

  Ext_data_validator_Date.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_data_validator_Date.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_validator_Date.PROPERTIES());
    return Ext_data_validator_AbstractDate.getProperties(properties);
  };

  Ext_data_validator_Date.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_validator_Date.EVENTS());
    return Ext_data_validator_AbstractDate.getEvents(events);
  };

  _createClass(Ext_data_validator_Date, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_validator_A.observedAttributes;
      Ext_data_validator_Date.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_validator_Date.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_validator_Date(properties, events) {
    return _Ext_data_validator_A.call(this, properties.concat(Ext_data_validator_Date.PROPERTIES()), events.concat(Ext_data_validator_Date.EVENTS())) || this;
  }

  var _proto = Ext_data_validator_Date.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_validator_A.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_validator_A.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_validator_Date;
}(Ext_data_validator_AbstractDate);

export { Ext_data_validator_Date as default };