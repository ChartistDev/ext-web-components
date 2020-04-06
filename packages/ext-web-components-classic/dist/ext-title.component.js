import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_panel_Title from './Ext/panel/Title.js';
import ElementParser from './common/ElementParser.js';

var EWCTitle = /*#__PURE__*/function (_Ext_panel_Title) {
  _inheritsLoose(EWCTitle, _Ext_panel_Title);

  var _super = _createSuper(EWCTitle);

  function EWCTitle() {
    var _this;

    _this = _Ext_panel_Title.call(this, [], []) || this;
    _this.xtype = 'title';
    return _this;
  }

  return EWCTitle;
}(Ext_panel_Title);

export { EWCTitle as default };

try {
  if (window.customElements.get('ext-title') == undefined) {
    window.customElements.define('ext-title', ElementParser.withParsedCallback(EWCTitle));
  }
} catch (e) {
  if (window.customElements.get('ext-title') == undefined) {
    window.customElements.define('ext-title', EWCTitle);
  }
}