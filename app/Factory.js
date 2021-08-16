import { Text } from './controls/Text.js'
export class Factory {
  control(name, canvas, toolbar) {
    switch (name) {
      case 'heading':
        return new Text(canvas, toolbar, 'heading')
      case 'subheading':
        return new Text(canvas, toolbar, 'subheading')
      case 'text':
        return new Text(canvas, toolbar, 'text')
    }
  }
}