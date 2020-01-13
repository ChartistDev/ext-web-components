import Ext_form_field_ComboBox from '../../Ext/form/field/ComboBox.js';

export default class Ext_form_Time extends Ext_form_field_ComboBox {
  static PROPERTIES() { return [
    'activeCounter',
    'activeError',
    'activeErrorsTpl',
    'afterBodyEl',
    'afterLabelTextTpl',
    'afterLabelTpl',
    'afterSubTpl',
    'alignOnScroll',
    'alignTarget',
    'allowBlank',
    'allowOnlyWhitespace',
    'allQuery',
    'altFormats',
    'alwaysOnTop',
    'anchor',
    'animateShadow',
    'anyMatch',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaErrorText',
    'ariaHelp',
    'ariaLabel',
    'ariaLabelledBy',
    'autoEl',
    'autoFitErrors',
    'autoHideInputMask',
    'autoLoadOnValue',
    'autoRender',
    'autoSelect',
    'autoSelectLast',
    'autoShow',
    'baseBodyCls',
    'baseCls',
    'beforeBodyEl',
    'beforeLabelTextTpl',
    'beforeLabelTpl',
    'beforeSubTpl',
    'bind',
    'blankText',
    'border',
    'caseSensitive',
    'checkChangeBuffer',
    'checkChangeEvents',
    'childEls',
    'clearFilterOnBlur',
    'cls',
    'columnWidth',
    'componentCls',
    'componentLayout',
    'constrain',
    'constraintInsets',
    'constrainTo',
    'contentEl',
    'controller',
    'data',
    'defaultAlign',
    'defaultListConfig',
    'defaultListenerScope',
    'dirtyCls',
    'disabled',
    'disabledCls',
    'disableKeyFilter',
    'displayField',
    'displayTpl',
    'dock',
    'draggable',
    'editable',
    'emptyCls',
    'emptyText',
    'enableKeyEvents',
    'enableRegEx',
    'enforceMaxLength',
    'errorMsgCls',
    'fieldBodyCls',
    'fieldCls',
    'fieldLabel',
    'fieldStyle',
    'fieldSubTpl',
    'fixed',
    'flex',
    'floating',
    'focusCls',
    'focusOnToFront',
    'forceSelection',
    'format',
    'formatText',
    'formBind',
    'formItemCls',
    'frame',
    'grow',
    'growMax',
    'growMin',
    'growToLongestValue',
    'height',
    'hidden',
    'hiddenDataCls',
    'hiddenName',
    'hideEmptyLabel',
    'hideLabel',
    'hideMode',
    'hideTrigger',
    'html',
    'id',
    'increment',
    'inputAttrTpl',
    'inputId',
    'inputMask',
    'inputType',
    'inputWrapCls',
    'invalidCls',
    'invalidText',
    'isTextInput',
    'itemId',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'labelableRenderTpl',
    'labelAlign',
    'labelAttrTpl',
    'labelCls',
    'labelClsExtra',
    'labelPad',
    'labelSeparator',
    'labelStyle',
    'labelWidth',
    'liquidLayout',
    'listConfig',
    'listeners',
    'liveDrag',
    'loader',
    'margin',
    'maskDefaults',
    'maskElement',
    'maskRe',
    'matchFieldWidth',
    'maxHeight',
    'maxLength',
    'maxLengthText',
    'maxText',
    'maxValue',
    'maxWidth',
    'minChars',
    'minHeight',
    'minLength',
    'minLengthText',
    'minText',
    'minValue',
    'minWidth',
    'modal',
    'modelValidation',
    'msgTarget',
    'name',
    'nameable',
    'openCls',
    'overCls',
    'padding',
    'pageSize',
    'pickerAlign',
    'pickerMaxHeight',
    'pickerOffset',
    'plugins',
    'preventMark',
    'publishes',
    'queryCaching',
    'queryDelay',
    'queryMode',
    'queryParam',
    'readOnly',
    'readOnlyCls',
    'reference',
    'regex',
    'regexText',
    'region',
    'renderConfig',
    'renderData',
    'renderTo',
    'renderTpl',
    'repeatTriggerClick',
    'requiredCls',
    'resizable',
    'resizeHandles',
    'saveDelay',
    'scrollable',
    'selection',
    'selectOnFocus',
    'selectOnTab',
    'session',
    'shadow',
    'shadowOffset',
    'shareableName',
    'shim',
    'shrinkWrap',
    'snapToIncrement',
    'stateEvents',
    'stateful',
    'stateId',
    'store',
    'stripCharsRe',
    'style',
    'submitFormat',
    'submitValue',
    'tabIndex',
    'toFrontOnShow',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'transform',
    'transformInPlace',
    'triggerAction',
    'triggerCls',
    'triggers',
    'triggerWrapCls',
    'twoWayBindable',
    'typeAhead',
    'typeAheadDelay',
    'ui',
    'uiCls',
    'userCls',
    'validateBlank',
    'validateOnBlur',
    'validateOnChange',
    'validateOnFocusLeave',
    'validation',
    'validationField',
    'validator',
    'value',
    'valueField',
    'valueNotFoundText',
    'valuePublishEvent',
    'viewModel',
    'vtype',
    'vtypeText',
    'weight',
    'width',
    'xtype',
  ]};
  static EVENTS() { return [
    {name:'activate', parameters:'sender'},
    {name:'added', parameters:'sender,container,pos'},
    {name:'afterlayoutanimation', parameters:'sender'},
    {name:'afterrender', parameters:'sender'},
    {name:'autosize', parameters:'sender,width'},
    {name:'beforeactivate', parameters:'sender'},
    {name:'beforedeactivate', parameters:'sender'},
    {name:'beforedeselect', parameters:'combo,record,index'},
    {name:'beforedestroy', parameters:'sender'},
    {name:'beforehide', parameters:'sender'},
    {name:'beforequery', parameters:'queryPlan'},
    {name:'beforerender', parameters:'sender'},
    {name:'beforeselect', parameters:'combo,record,index'},
    {name:'beforeshow', parameters:'sender'},
    {name:'beforestaterestore', parameters:'sender,state'},
    {name:'beforestatesave', parameters:'sender,state'},
    {name:'blur', parameters:'sender,event'},
    {name:'boxready', parameters:'sender,width,height'},
    {name:'change', parameters:'sender,newValue,oldValue'},
    {name:'collapse', parameters:'field'},
    {name:'deactivate', parameters:'sender'},
    {name:'destroy', parameters:'sender'},
    {name:'dirtychange', parameters:'sender,isDirty'},
    {name:'disable', parameters:'sender'},
    {name:'enable', parameters:'sender'},
    {name:'errorchange', parameters:'sender,error'},
    {name:'expand', parameters:'field'},
    {name:'focus', parameters:'sender,event'},
    {name:'focusenter', parameters:'sender,event'},
    {name:'focusleave', parameters:'sender,event'},
    {name:'hide', parameters:'sender'},
    {name:'keydown', parameters:'sender,e'},
    {name:'keypress', parameters:'sender,e'},
    {name:'keyup', parameters:'sender,e'},
    {name:'move', parameters:'sender,x,y'},
    {name:'paste', parameters:'sender,e'},
    {name:'removed', parameters:'sender,ownerCt'},
    {name:'render', parameters:'sender'},
    {name:'resize', parameters:'sender,width,height,oldWidth,oldHeight'},
    {name:'select', parameters:'combo,record'},
    {name:'show', parameters:'sender'},
    {name:'specialkey', parameters:'sender,e'},
    {name:'staterestore', parameters:'sender,state'},
    {name:'statesave', parameters:'sender,state'},
    {name:'validitychange', parameters:'sender,isValid'},
    {name:'writeablechange', parameters:'sender,Read'},
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_form_Time.PROPERTIES());
    return Ext_form_field_ComboBox.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_form_Time.EVENTS());
    return Ext_form_field_ComboBox.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_form_Time.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_form_Time.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_form_Time.PROPERTIES()),
      events.concat(Ext_form_Time.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
