import { Element } from './Element.js'
export class Rectanlge extends Element {
  
  control(config) {
    return new fabric.Rect(config)
  }

  config() {
    return Object.assign({}, super.config(), {
      fill: this.defaultColor,
      width: 100,
      height: 70,
    })
  }

  
}