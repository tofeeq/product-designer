import {ProductDesigner} from '../ProductDesigner.js'
export class Text extends ProductDesigner {
  constructor(canvas, toolbar, option) {
    super(canvas, toolbar)
    this.option = option
  }
	control(title, config) {
    this.element = new fabric.IText(title, config)
    return this.element
  }

  config() {

    let config = super.config()
    
    config.fontSize = 16
    config.top = 240

    switch (this.option) {
      case 'heading':
        config.fontSize = 42
        config.top = 100
      break
      case 'subheading':
        config.fontSize = 33
        config.top = 180
      break
    }

    
    return Object.assign({}, config, { 
      fontFamily: 'Comic Sans',
      }
    )
  }

  render() {
    const control = this.control('Hello Text!', this.config())
    this.addToCanvas(control)
  }

  fontSizes() {
    return [
      {8: 8},
      {10: 10},
      {12: 12},
      {14: 14},
      {16: 16},
      {18: 18},
      {21: 21},
      {24: 24},
      {27: 27},
      {30: 30},
      {33: 33},
      {36: 36},
      {39: 39},
      {42: 42},
      {45: 45},
      {48: 48},
      {51: 51},
      {54: 54},
      {57: 57},
      {60: 60},
      {65: 65},
      {70: 70},
      {75: 75},
      {80: 80},
      {85: 85},
      {90: 90} 
    ]
  }
  fontList() {
    return [
    {'Comic Sans': 'Comic Sans'},
    {'Proxima Nova': 'Proxima Nova'},
    {'Times New Roman': 'Times New Roman'},
    {'Arial': 'Arial'},
    {'Calibri': 'Calibri'},
    {'Verdana': 'Verdana'},
    {'Helvetica': 'Helvetica'},
    {'Courier New': 'Courier New'},
    {'Courier': 'Courier'},
    {'Baskerville': 'Baskerville'},
    {'Cambria': 'Cambria'},
    {'Century Gothic': 'Century Gothic'},
    {'Georgia': 'Georgia'},
    ]
  }

  navigationButtons() {
    const navButtons = [
      {
        type: 'svg',
        width: '24',
        height: '24',
        icon: 'bold',
        title: 'B',
        activeOption: this.getActiveControlProp('fontWeight') == 'bold',
        //use arrow function otherwise reference to this for productDesigner class ll not be available
        event: (event) => {
          this.updateControl("fontWeight", 'bold', 'normal')
        }
      },
      {
        type: 'svg',
        icon: 'italic',
        width: '24',
        height: '24',
        title: 'I',
        activeOption: this.getActiveControlProp('fontStyle') == 'italic',
        //use arrow function otherwise reference to this for productDesigner class ll not be available
        event: (event) => {
          this.updateControl("fontStyle", 'italic', 'normal')
        }
      },
      {
        type: 'svg',
        icon: 'strike',
        width: '22',
        height: '22',
        title: 'U',
        activeOption: this.getActiveControlProp('underline') == true,
        //use arrow function otherwise reference to this for productDesigner class ll not be available
        event: (event) => {
          this.updateControl("underline", true, false)
        }
      },
      {
        type: 'select',
        title: 'Font Size',
        options: this.fontSizes(),
        activeOption: this.getActiveControlProp('fontSize'),
        event: (event) => {
          this.updateControl("fontSize", event.target.value)
        }
      },
      {
        type: 'select',
        title: 'Font Family',
        options: this.fontList(),
        activeOption: this.getActiveControlProp('fontFamily'),
        event: (event) => {
          this.updateControl("fontFamily", event.target.value)
        }
      }
    ]
    return navButtons.concat(super.navigationButtons())
  }
  setBackgroundColor(event) {
    this.getActiveControl().set("textBackgroundColor", event.target.value)
    event.target.select()
  }
}