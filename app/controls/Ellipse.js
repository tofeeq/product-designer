import { Element } from './Element.js'

export class Ellipse extends Element {
  
  control(config) {
    return new fabric.Ellipse(config)
  }

  config() {
    return Object.assign({}, super.config(), {
      left: 100,
      top: 100,
      originX: 'left',
      originY: 'top',
      rx: 100,
      ry: 50,
      angle: 0,
      fill: this.defaultColor,
    })
  }
}