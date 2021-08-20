import { Text } from './controls/Text.js'
import { Circle } from './controls/Cirlce.js'
import { Triangle } from './controls/Triangle.js'
import { Rectanlge } from './controls/Rectanlge.js'
export class Factory {
  control(name, canvas, toolbar) {
    switch (name) {
      case 'heading':
        return new Text(canvas, toolbar, 'heading')
      case 'subheading':
        return new Text(canvas, toolbar, 'subheading')
      case 'text':
        return new Text(canvas, toolbar, 'text')
      case 'circle':
        return new Circle(canvas, toolbar)
      case 'triangle':
        return new Triangle(canvas, toolbar)
      case 'rectangle':
        return new Rectanlge(canvas, toolbar)
    }
  }
}