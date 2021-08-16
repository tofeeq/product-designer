import { HtmlControl } from './../HtmlControl.js'

export class Svg extends HtmlControl{
  render() {
    let active = this.data.activeOption ? 'active' : ''
    let cssClass = this.data.class || ''
    let $icon = $('<svg class="icon ' + cssClass + ' ' + active + '" width="' + this.data.width + '" height="' + this.data.height + '"><use xlink:href="#' + this.data.icon + '" /></svg>')
    $icon.on('click', () => {
        this.data.event()
        this.data.activeOption !== undefined && $icon.toggleClass('active')
    })
    
    return $icon
  }
}