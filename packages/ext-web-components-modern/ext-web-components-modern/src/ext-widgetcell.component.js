import Ext_grid_cell_Widget from './Ext/grid/cell/Widget.js';
import ElementParser from './common/ElementParser.js';

export default class EWCWidgetcell extends Ext_grid_cell_Widget {
  constructor() {
    super ([], []);
    this.xtype = 'widgetcell';
  }
}
try {
  if (window.customElements.get('ext-widgetcell') == undefined) {
    window.customElements.define('ext-widgetcell', ElementParser.withParsedCallback(EWCWidgetcell));
  }
}
catch(e) {
  if (window.customElements.get('ext-widgetcell') == undefined) {
    window.customElements.define('ext-widgetcell', EWCWidgetcell);
  }
}
