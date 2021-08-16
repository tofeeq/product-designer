import { HtmlControl } from './../HtmlControl.js'

export class Icon extends HtmlControl{
  render() {
    let $icon = $('<svg class="icon"><use xlink:href="#beaker" /></svg>')
    return $icon
  }
}