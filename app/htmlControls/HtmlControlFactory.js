import { Select } from './controls/Select.js'
import { Button } from './controls/Button.js'
import { Color } from './controls/Color.js'
import { Icon } from './controls/Icon.js'
import { Svg } from './controls/Svg.js'
export class HtmlControlFactory {
  control(data) {
    switch (data.type) {
      case 'select':
        return new Select(data)
      case 'button':
        return new Button(data)
      case 'color':
        return new Color(data)
      case 'icon':
        return new Icon(data)
      case 'svg':
        return new Svg(data)
      
    }
  }
}