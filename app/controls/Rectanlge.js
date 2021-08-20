import { ProductDesigner } from '../ProductDesigner.js'
export class Rectanlge extends ProductDesigner {
  
  control(config) {
    this.element = new fabric.Rect(config)
    return this.element
  }

  config() {
    return Object.assign({}, super.config(), {
      fill: this.defaultColor,
      width: 100,
      height: 70,
    })
  }

  
}