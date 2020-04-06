import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_data_Model from '../../../Ext/data/Model.js';

var Ext_ux_desktop_ShortcutModel = /*#__PURE__*/function (_Ext_data_Model) {
  _inheritsLoose(Ext_ux_desktop_ShortcutModel, _Ext_data_Model);

  var _super = _createSuper(Ext_ux_desktop_ShortcutModel);

  Ext_ux_desktop_ShortcutModel.PROPERTIES = function PROPERTIES() {
    return ['belongsTo', 'clientIdProperty', 'convertOnSet', 'fields', 'hasMany', 'hasOne', 'identifier', 'idProperty', 'manyToMany', 'proxy', 'schema', 'summary', 'validationSeparator', 'validators', 'versionProperty'];
  };

  Ext_ux_desktop_ShortcutModel.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_ux_desktop_ShortcutModel.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_ux_desktop_ShortcutModel.PROPERTIES());
    return Ext_data_Model.getProperties(properties);
  };

  Ext_ux_desktop_ShortcutModel.getEvents = function getEvents(events) {
    events = events.concat(Ext_ux_desktop_ShortcutModel.EVENTS());
    return Ext_data_Model.getEvents(events);
  };

  _createClass(Ext_ux_desktop_ShortcutModel, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_Model.observedAttributes;
      Ext_ux_desktop_ShortcutModel.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_ux_desktop_ShortcutModel.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_ux_desktop_ShortcutModel(properties, events) {
    return _Ext_data_Model.call(this, properties.concat(Ext_ux_desktop_ShortcutModel.PROPERTIES()), events.concat(Ext_ux_desktop_ShortcutModel.EVENTS())) || this;
  }

  var _proto = Ext_ux_desktop_ShortcutModel.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_Model.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_Model.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_ux_desktop_ShortcutModel;
}(Ext_data_Model);

export { Ext_ux_desktop_ShortcutModel as default };