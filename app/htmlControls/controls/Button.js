import { HtmlControl } from './../HtmlControl.js'

export class Button extends HtmlControl{
  render() {
    let $button = $('<button>' + this.data.title + '</button>')
    $button.on('click', this.data.event)
    return $button
  }
}