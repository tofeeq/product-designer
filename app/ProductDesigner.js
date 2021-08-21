//Abstract Class Designer
import { HtmlControlFactory } from './htmlControls/HtmlControlFactory.js'
export class ProductDesigner {
  constructor(canvas, $toolbar) {
    this.defaultColor = '#eef'
    this.elment = undefined
    this.canvas = canvas
    this.$toolbar = $toolbar
    this.htmlFactory = new HtmlControlFactory()

    if (new.target === ProductDesigner) {
      throw new TypeError("Cannot construct Abstract instances directly");
    }

    this.canvas.on('mouse:down', (options) => {
      //console.log(options.e.clientX, options.e.clientY);
      if (options.target) {
        //console.log('an object was clicked! ', options.target.type);
        this.elment = options.target
      }  
      if (!this.elment) {
        let objs = canvas.getObjects()
        let obj = objs[objs.length - 1]
      }
      
      if (! this.getActiveControl()) {
        this.canvas.setActiveObject(this.elment)
      }
    })
  }

  addToCanvas(ctrl) {
    ctrl.on('selected', () => {
      //render/re-render navigation on selection of control
      this.navigation()
    })
    this.canvas.add(ctrl);
    this.canvas.setActiveObject(ctrl)
    //this.navigation()
  }

  navigationButtons() {
    if (!this.canvas.getObjects().length) {
      return false
    }

    return [
      {
        type: 'svg',
        width: '20',
        height: '20',
        icon: 'delete',
        title: 'Delete',
        class: 'right',
        event: () => {
          this.canvas.remove(this.getActiveControl())
        }
      },
    ]
  }
  
  navigation() {
    this.$toolbar.empty()
    const navButtons = this.navigationButtons()
    for (var i in navButtons) {
      let control = this.htmlFactory.control(navButtons[i])
      this.$toolbar.append(control.render())
    }
  }
  
  config() {
    return {
      left: 100, 
      top: 100, 
      editable: true
    }
  }

  updateControl(prop, value, toggleValue) {
    if (toggleValue !== undefined && this.getActiveControl().get(prop) == value) {
      //check if element contains prop as value then use toggleValue
      value = toggleValue
    }

    this.getActiveControl().set(prop, value)
    this.canvas.renderAll()
  }

  getActiveControl() {
    return this.canvas.getActiveObject() || this.element
  }

  getActiveControlProp(prop) {
    if (!this.getActiveControl()) return false
    return this.getActiveControl().get(prop)
  }

  render() {
    const control = this.control(this.config())
    this.addToCanvas(control)
  }

  
  
} 
