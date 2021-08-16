export class HtmlControl {
  constructor(data) {
    this.data = data
  }

  render() {
    return $('<label>' + this.data.title + ' </label>')
  }
}