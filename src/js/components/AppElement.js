import { handleRouteChange } from '../utils/router.js'

class AppElement extends HTMLElement {
  constructor() {
    super()
  }
  connectedCallback() {
    this.render()
    handleRouteChange()
  }

  render() {
    this.container = document.createElement('section')
    this.appendChild(this.container)
    this.container.id = 'app-container'
  }
}

customElements.define('app-element', AppElement)
