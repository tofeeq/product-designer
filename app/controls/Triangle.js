import { Element } from './Element.js'
export class Triangle extends Element {
  
  control(config) {
    return new fabric.Triangle(config)
  }

  config() {
    return Object.assign({}, super.config(), {
      width: 100, 
      height: 100, 
      fill: this.defaultColor,
    })
  }
}