import { ProductDesigner } from '../ProductDesigner.js';
export class Element extends ProductDesigner {
  navigationButtons() {
    if (!this.canvas.getObjects().length) {
      return false;
    }

    return [
      {
        type: 'color',
        title: 'Color',
        //use arrow function otherwise reference to this for productDesigner class ll not be available
        activeOption: this.getActiveControlProp('fill') || '#000000',
        event: (event) => {
          this.setColor(event);
        },
      },
      {
        type: 'color',
        title: 'Stroke Color',
        //use arrow function otherwise reference to this for productDesigner class ll not be available
        activeOption: this.getActiveControlProp('stroke') || '#000000',
        event: (event) => {
          this.setStrokeColor(event);
        },
      },
    ].concat(super.navigationButtons());
  }
  setColor(event) {
    this.getActiveControl().set('fill', event.target.value);
    event.target.select();
  }
  setStrokeColor(event) {
    this.getActiveControl().set('stroke', event.target.value);
    event.target.select();
  }

  config() {
    return {
      left: 100,
      top: 100,
      editable: true,
    };
  }
}
