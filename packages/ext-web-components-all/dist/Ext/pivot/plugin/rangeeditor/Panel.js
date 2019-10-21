import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Panel from '../../../../Ext/form/Panel.js';

var Ext_pivot_plugin_rangeeditor_Panel =
/*#__PURE__*/
function (_Ext_form_Panel) {
  _inheritsLoose(Ext_pivot_plugin_rangeeditor_Panel, _Ext_form_Panel);

  Ext_pivot_plugin_rangeeditor_Panel.PROPERTIES = function PROPERTIES() {
    return ['activeChildTabIndex', 'activeItem', 'alignSelf', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'anchor', 'anchorPosition', 'api', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoDestroy', 'autoSize', 'axisLock', 'baseParams', 'bbar', 'bind', 'bodyBorder', 'bodyCls', 'bodyPadding', 'bodyStyle', 'border', 'bottom', 'bubbleDirty', 'buttonAlign', 'buttons', 'buttonToolbar', 'cardSwitchAnimation', 'centered', 'closable', 'closeAction', 'closeToolText', 'cls', 'collapsed', 'collapsible', 'constrainAlign', 'contentEl', 'control', 'controller', 'data', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultToolWeights', 'defaultType', 'dirty', 'disabled', 'displayed', 'docked', 'draggable', 'enableSubmissionForm', 'enctype', 'fieldDefaults', 'fieldSeparators', 'flex', 'floated', 'focusableContainer', 'focusCls', 'fullscreen', 'header', 'headerPosition', 'height', 'hidden', 'hideAnimation', 'hideMode', 'hideOnMaskTap', 'html', 'icon', 'iconAlign', 'iconCls', 'id', 'inactiveChildTabIndex', 'innerCls', 'inputBorders', 'instanceCls', 'itemId', 'items', 'jsonSubmit', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'lbar', 'left', 'listeners', 'manageBorders', 'margin', 'masked', 'maxHeight', 'maxWidth', 'method', 'minButtonWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'multipartDetection', 'name', 'nameable', 'nameHolder', 'padding', 'paramOrder', 'paramsAsHash', 'plugins', 'publishes', 'rbar', 'record', 'reference', 'referenceHolder', 'relative', 'renderTo', 'resetFocusPosition', 'resizable', 'right', 'ripple', 'scrollable', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'standardButtons', 'standardSubmit', 'stateful', 'statefulDefaults', 'stateId', 'style', 'submitOnAction', 'tabIndex', 'tbar', 'timeout', 'title', 'titleAlign', 'titleCollapse', 'toFrontOnShow', 'toolDefaults', 'tools', 'tooltip', 'top', 'touchAction', 'tpl', 'tplWriteMode', 'trackResetOnLoad', 'translatable', 'twoWayBindable', 'ui', 'url', 'userCls', 'userSelectable', 'viewModel', 'weight', 'weighted', 'width', 'x', 'xtype', 'y', 'zIndex', 'platformConfig', 'responsiveConfig', 'fitToParent', 'config'];
  };

  Ext_pivot_plugin_rangeeditor_Panel.EVENTS = function EVENTS() {
    return [{
      name: 'activate',
      parameters: 'newActiveItem,pivotrangeeditor,oldActiveItem'
    }, {
      name: 'activeItemchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'add',
      parameters: 'pivotrangeeditor,item,index'
    }, {
      name: 'added',
      parameters: 'sender,container,index'
    }, {
      name: 'beforeactiveItemchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforebottomchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforecenteredchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforecollapse',
      parameters: 'pivotrangeeditor'
    }, {
      name: 'beforedisabledchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforedockedchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeexpand',
      parameters: 'pivotrangeeditor'
    }, {
      name: 'beforeheightchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforehiddenchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforehide',
      parameters: 'sender'
    }, {
      name: 'beforeleftchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforemaxHeightchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforemaxWidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeminHeightchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeminWidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeorientationchange',
      parameters: ''
    }, {
      name: 'beforeresizedragstart',
      parameters: 'pivotrangeeditor,context'
    }, {
      name: 'beforerightchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforescrollablechange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeshow',
      parameters: 'sender'
    }, {
      name: 'beforesubmit',
      parameters: 'pivotrangeeditor,values,options,e'
    }, {
      name: 'beforetofront',
      parameters: 'pivotrangeeditor'
    }, {
      name: 'beforetopchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforewidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'blur',
      parameters: 'pivotrangeeditor,event'
    }, {
      name: 'bottomchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'centeredchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'collapse',
      parameters: 'pivotrangeeditor'
    }, {
      name: 'deactivate',
      parameters: 'oldActiveItem,pivotrangeeditor,newActiveItem'
    }, {
      name: 'destroy',
      parameters: ''
    }, {
      name: 'dirtychange',
      parameters: 'pivotrangeeditor,dirty'
    }, {
      name: 'disabledchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'dockedchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'drawerhide',
      parameters: 'pivotrangeeditor'
    }, {
      name: 'drawershow',
      parameters: 'pivotrangeeditor'
    }, {
      name: 'erased',
      parameters: 'sender'
    }, {
      name: 'exception',
      parameters: 'pivotrangeeditor,result'
    }, {
      name: 'expand',
      parameters: 'pivotrangeeditor'
    }, {
      name: 'floatingchange',
      parameters: 'sender,positioned'
    }, {
      name: 'focus',
      parameters: 'pivotrangeeditor,event'
    }, {
      name: 'focusenter',
      parameters: 'pivotrangeeditor,event'
    }, {
      name: 'focusleave',
      parameters: 'pivotrangeeditor,event'
    }, {
      name: 'fullscreen',
      parameters: 'sender'
    }, {
      name: 'heightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'hiddenchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'hide',
      parameters: 'sender'
    }, {
      name: 'initialize',
      parameters: 'sender'
    }, {
      name: 'leftchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'maxHeightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'maxWidthchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'minHeightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'minWidthchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'move',
      parameters: 'pivotrangeeditor,item,toIndex,fromIndex'
    }, {
      name: 'moved',
      parameters: 'sender,container,toIndex,fromIndex'
    }, {
      name: 'orientationchange',
      parameters: ''
    }, {
      name: 'painted',
      parameters: 'sender,element'
    }, {
      name: 'positionedchange',
      parameters: 'sender,positioned'
    }, {
      name: 'remove',
      parameters: 'pivotrangeeditor,item,index'
    }, {
      name: 'removed',
      parameters: 'sender,container,index'
    }, {
      name: 'renderedchange',
      parameters: 'pivotrangeeditor,item,rendered'
    }, {
      name: 'resize',
      parameters: 'element,info'
    }, {
      name: 'resizedrag',
      parameters: 'pivotrangeeditor,context'
    }, {
      name: 'resizedragcancel',
      parameters: 'pivotrangeeditor,context'
    }, {
      name: 'resizedragend',
      parameters: 'pivotrangeeditor,context'
    }, {
      name: 'resizedragstart',
      parameters: 'pivotrangeeditor,context'
    }, {
      name: 'rightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'scrollablechange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'show',
      parameters: 'sender'
    }, {
      name: 'submit',
      parameters: 'pivotrangeeditor,result,e'
    }, {
      name: 'tofront',
      parameters: 'pivotrangeeditor'
    }, {
      name: 'topchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'updatedata',
      parameters: 'sender,newData'
    }, {
      name: 'widthchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'ready',
      parameters: ''
    }];
  };

  Ext_pivot_plugin_rangeeditor_Panel.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_pivot_plugin_rangeeditor_Panel.PROPERTIES());
    return Ext_form_Panel.getProperties(properties);
  };

  Ext_pivot_plugin_rangeeditor_Panel.getEvents = function getEvents(events) {
    events = events.concat(Ext_pivot_plugin_rangeeditor_Panel.EVENTS());
    return Ext_form_Panel.getEvents(events);
  } //events
  ////configs
  //
  //static XTYPE() {return 'pivotrangeeditor'}
  //static PROPERTIESOBJECT() { return {
  //[object Object]}}
  //static METHODS() { return [
  //]}
  ;

  _createClass(Ext_pivot_plugin_rangeeditor_Panel, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_form_Panel.observedAttributes; //for (var property in Ext_pivot_plugin_rangeeditor_Panel.PROPERTIESOBJECT()) {
      //    attrs.push(property)
      //}

      Ext_pivot_plugin_rangeeditor_Panel.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_pivot_plugin_rangeeditor_Panel.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_pivot_plugin_rangeeditor_Panel(properties, events) {
    return _Ext_form_Panel.call(this, properties.concat(Ext_pivot_plugin_rangeeditor_Panel.PROPERTIES()), events.concat(Ext_pivot_plugin_rangeeditor_Panel.EVENTS())) || this;
  }

  var _proto = Ext_pivot_plugin_rangeeditor_Panel.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_form_Panel.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_form_Panel.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_pivot_plugin_rangeeditor_Panel;
}(Ext_form_Panel);

export { Ext_pivot_plugin_rangeeditor_Panel as default };