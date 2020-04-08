import Ext_layout_container_Auto from '../../../Ext/layout/container/Auto.js';

export default class Ext_layout_container_Column extends Ext_layout_container_Auto {
  static PROPERTIES() { return [
    'animatePolicy',
    'childEls',
    'itemCls',
    'reserveScrollbar',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_layout_container_Column.PROPERTIES());
    return Ext_layout_container_Auto.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_layout_container_Column.EVENTS());
    return Ext_layout_container_Auto.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_layout_container_Column.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_layout_container_Column.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_layout_container_Column.PROPERTIES()),
      events.concat(Ext_layout_container_Column.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
