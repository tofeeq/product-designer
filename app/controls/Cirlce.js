import { Element } from './Element.js'
export class Circle extends Element {
  
  control(config) {
    return new fabric.Circle(config)
  }

  config() {
    return Object.assign({}, super.config(), {
      radius: 50,
      fill: this.defaultColor,
    })
  }
}