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
    const header = new HomeHeader()
    this.appendChild(header)
    const body = new HomeBody()
    this.appendChild(body)
  }
}

customElements.define('app-home', AppHome)
