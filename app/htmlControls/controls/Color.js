import { HtmlControl } from './../HtmlControl.js'

export class Color extends HtmlControl{
  render() {
    let $label = $('<label>' + this.data.title + ' </label>')
    let $button = $('<input type="color" value="' + this.data.activeOption + '">')
    $button.on('change', this.data.event)
    $button.on('input', this.data.event)
    $label.append($button)
    return $label
  }
}