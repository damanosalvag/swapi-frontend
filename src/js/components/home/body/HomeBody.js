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
  }
}

customElements.define('home-body', HomeBody)
