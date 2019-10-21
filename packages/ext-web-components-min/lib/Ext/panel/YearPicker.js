import Ext_dataview_BoundList_Component from '../../Ext/dataview/BoundList';

export default class Ext_panel_YearPicker_Component extends Ext_dataview_BoundList_Component {
//events
//configs

static XTYPE() {return 'yearpicker'}
static PROPERTIESOBJECT() { return {
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

constructor() {
    super (
        Ext_panel_YearPicker_Component.METHODS(),
        Ext_panel_YearPicker_Component.XTYPE(),
        Ext_panel_YearPicker_Component.PROPERTIESOBJECT(),
        Ext_panel_YearPicker_Component.EVENTS()
    )
    this.XTYPE = Ext_panel_YearPicker_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_panel_YearPicker_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_panel_YearPicker_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_panel_YearPicker_Component.EVENTS());
  }

connectedCallback() {
    super.connectedCallback()
}

attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
}

}
(function () {
  Ext.onReady(function() {
    window.customElements.define('ext-yearpicker', Ext_panel_YearPicker_Component);
  });
})();
