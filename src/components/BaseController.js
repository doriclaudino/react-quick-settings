export class BaseController {
  constructor (title, inputType, componentName) {
    this.title = title
    this.inputType = inputType
    this.componentName = componentName
  }

  attr (attribute, value) {
    this[attribute] = value
    return this
  }
}
