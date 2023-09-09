import { HomeHeader } from './HomeHeader.js'
import { HomeBody } from './body/HomeBody.js'
import { BodyFilms } from './body/BodyFilms.js'

export class AppHome extends HTMLElement {
  constructor() {
    super()
  }
  connectedCallback() {
    this.render()
  }
  render () {
    this.header = new HomeHeader()
    this.appendChild(this.header)
    this.body = new HomeBody()
    this.appendChild(this.body)

  }
}

customElements.define('app-home', AppHome)
