import Ext_field_Text from '../../Ext/field/Text';

export default class Ext_field_TextArea extends Ext_field_Text {

    static PROPERTIES() { return [
'alignSelf',
'alwaysOnTop',
'animateUnderline',
'ariaAttributes',
'ariaDescribedBy',
'ariaLabel',
'ariaLabelledBy',
'autoCapitalize',
'autoComplete',
'autoCorrect',
'autoFitErrors',
'autoHideInputMask',
'axisLock',
'badFormatMessage',
'bind',
'bodyAlign',
'border',
'bottom',
'bubbleDirty',
'centered',
'clearable',
'cls',
'constrainAlign',
'contentEl',
'controller',
'data',
'dataType',
'defaultListenerScope',
'dirty',
'disabled',
'displayed',
'docked',
'draggable',
'editable',
'error',
'errorMessage',
'errorTarget',
'errorTip',
'errorTpl',
'flex',
'floated',
'focusCls',
'fullscreen',
'height',
'hidden',
'hideAnimation',
'hideMode',
'hideOnMaskTap',
'html',
'id',
'inline',
'inputMask',
'inputType',
'inputValue',
'instanceCls',
'itemId',
'keyMap',
'keyMapEnabled',
'keyMapTarget',
'label',
'labelAlign',
'labelCls',
'labelInPlaceholder',
'labelMinWidth',
'labelTextAlign',
'labelWidth',
'labelWrap',
'left',
'listeners',
'margin',
'maxHeight',
'maxLength',
'maxRows',
'maxWidth',
'minHeight',
'minWidth',
'modal',
'modelValidation',
'name',
'nameable',
'padding',
'parseValidator',
'pattern',
'placeholder',
'plugins',
'publishes',
'readOnly',
'record',
'reference',
'relative',
'renderTo',
'required',
'requiredMessage',
'right',
'ripple',
'scrollable',
'session',
'shadow',
'shareableName',
'shim',
'showAnimation',
'sideError',
'stateful',
'statefulDefaults',
'stateId',
'stripCharsRe',
'style',
'tabIndex',
'textAlign',
'tipError',
'titleError',
'toFrontOnShow',
'tooltip',
'top',
'touchAction',
'tpl',
'tplWriteMode',
'translatable',
'triggers',
'twoWayBindable',
'ui',
'underError',
'userCls',
'userSelectable',
'validateDisabled',
'validationMessage',
'validators',
'value',
'viewModel',
'weight',
'width',
'x',
'xtype',
'y',
'zIndex',
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
]};
    static EVENTS() { return [
{name:'action',parameters:'textareafield,e'},
{name:'added',parameters:'sender,container,index'},
{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehide',parameters:'sender'},
{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeorientationchange',parameters:''},
{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeshow',parameters:'sender'},
{name:'beforetofront',parameters:'textareafield'},
{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'textareafield,e'},
{name:'bottomchange',parameters:'sender,value,oldValue'},
{name:'centeredchange',parameters:'sender,value,oldValue'},
{name:'change',parameters:'textareafield,newValue,oldValue'},
{name:'clearicontap',parameters:'textareafield,input,e'},
{name:'click',parameters:'e'},
{name:'destroy',parameters:''},
{name:'dirtychange',parameters:'textareafield,dirty'},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'dockedchange',parameters:'sender,value,oldValue'},
{name:'erased',parameters:'sender'},
{name:'errorchange',parameters:'textareafield,error'},
{name:'floatingchange',parameters:'sender,positioned'},
{name:'focus',parameters:'textareafield,e'},
{name:'focusenter',parameters:'textareafield,event'},
{name:'focusleave',parameters:'textareafield,event'},
{name:'fullscreen',parameters:'sender'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'hide',parameters:'sender'},
{name:'initialize',parameters:'sender'},
{name:'keydown',parameters:'textareafield,e'},
{name:'keyup',parameters:'textareafield,e'},
{name:'leftchange',parameters:'sender,value,oldValue'},
{name:'maxHeightchange',parameters:'sender,value,oldValue'},
{name:'maxWidthchange',parameters:'sender,value,oldValue'},
{name:'minHeightchange',parameters:'sender,value,oldValue'},
{name:'minWidthchange',parameters:'sender,value,oldValue'},
{name:'mousedown',parameters:'textareafield,e'},
{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
{name:'orientationchange',parameters:''},
{name:'painted',parameters:'sender,element'},
{name:'paste',parameters:'textareafield,e'},
{name:'positionedchange',parameters:'sender,positioned'},
{name:'removed',parameters:'sender,container,index'},
{name:'resize',parameters:'element,info'},
{name:'rightchange',parameters:'sender,value,oldValue'},
{name:'scrollablechange',parameters:'sender,value,oldValue'},
{name:'show',parameters:'sender'},
{name:'tofront',parameters:'textareafield'},
{name:'topchange',parameters:'sender,value,oldValue'},
{name:'updatedata',parameters:'sender,newData'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
]};
    static getProperties(properties) {
        properties = properties.concat(Ext_field_TextArea.PROPERTIES());
        return Ext_field_Text.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_field_TextArea.EVENTS());
        return Ext_field_Text.getEvents(events);
    }
//events
////configs
//
//static XTYPE() {return 'textareafield'}
//static PROPERTIESOBJECT() { return {
//[object Object]}}

//static METHODS() { return [
//]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        //for (var property in Ext_field_TextArea.PROPERTIESOBJECT()) {
        //    attrs.push(property)
        //}
        Ext_field_TextArea.PROPERTIES().forEach(function (property, index, array) {
            attrs.push(property)
        })
        Ext_field_TextArea.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(properties, events) {
        super (
            properties.concat(Ext_field_TextArea.PROPERTIES()),
            events.concat(Ext_field_TextArea.EVENTS())
        )
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}