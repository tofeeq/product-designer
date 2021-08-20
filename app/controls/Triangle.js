import { ProductDesigner } from '../ProductDesigner.js'
export class Triangle extends ProductDesigner {
  
  control(config) {
    this.element = new fabric.Triangle(config)
    return this.element
  }

  config() {
    return Object.assign({}, super.config(), {
      width: 100, 
      height: 100, 
      fill: this.defaultColor,
    })
  }
}