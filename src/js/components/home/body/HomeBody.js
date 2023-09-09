import { BodyFilms } from './BodyFilms.js'
import { BodyPeople } from './BodyPeople.js'

export class HomeBody extends HTMLElement {
  constructor() {
    super()
  }
  connectedCallback() {
    this.render()
  }
  render() {
    this.container = document.createElement('section')
    this.appendChild(this.container)
    this.container.id = 'home-body'

    this.currentRoute = window.location.pathname
    const [mainRoute] = this.currentRoute.split('/').slice(1)
    this.containerTest = document.createElement('p')
    this.appendChild(this.containerTest)

    this.containerTest.innerHTML = `The sections is ${mainRoute}`
  }
}

customElements.define('home-body', HomeBody)
