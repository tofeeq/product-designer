import { Element } from './Element.js'
export class Line extends Element {
  
  points = [50, 100, 200, 200]

  control(config) {
    return new fabric.Line(this.points, config)
  }

  config() {
    return Object.assign({}, super.config(), {
      left: 100,
      top: 100,
      stroke: this.defaultColor,
    })
  }

  navigationButtons() {
    if (!this.canvas.getObjects().length) {
      return false
    }
    return super.navigationButtons().filter(button => 
      button.title != 'Color')

  }
}