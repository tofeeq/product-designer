import { HtmlControl } from './../HtmlControl.js'

export class Select extends HtmlControl{
  render() {
    let base = super.render()
    let ctrl = $('<select>')
    let options = ''
    for (var i in this.data.options) {
      let option = this.data.options[i]
      for (var j in option) {
        options += '<option value="' + j + '">' + option[j] + '</option>'
      }
    }
    ctrl.append(options)
    
    this.data.activeOption && ctrl.val(this.data.activeOption)
    ctrl.on('change', this.data.event)
    base.append(ctrl)
    return base
  }
}