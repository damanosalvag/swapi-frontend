export class AppButton extends HTMLElement {
  constructor() {
    super()
    this.render()
    this.addEventListener('click', this.handleClick)
  }
  render() {
    const element = document.createElement('button')
    element.id = 'btn'
    element.textContent = 'Click Me'
    this.appendChild(element)
  }
  handleClick = () => {
    const app = document.querySelector('app-element')
    const count = app.getAttribute('name')
    app.setAttribute('name', parseInt(count) + 1)
  }
}

customElements.define('app-button', AppButton)
