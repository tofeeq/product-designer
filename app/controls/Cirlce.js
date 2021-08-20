import { ProductDesigner } from '../ProductDesigner.js'
export class Circle extends ProductDesigner {
  
  control(config) {
    this.element = new fabric.Circle(config)
    return this.element
  }

  config() {
    return Object.assign({}, super.config(), {
      radius: 50,
      fill: this.defaultColor,
    })
  }
}