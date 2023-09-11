import { HomeHeader } from './HomeHeader.js'
import { HomeBody } from './body/HomeBody.js'
import { HomePagination } from './HomePagination.js'

export class AppHome extends HTMLElement {
  constructor() {
    super()
  }
  connectedCallback() {
    this.render()
  }
  render() {
    this.header = new HomeHeader()
    this.appendChild(this.header)
    this.body = new HomeBody()
    this.appendChild(this.body)
    this.pagination = new HomePagination()
    this.appendChild(this.pagination)
  }
}

customElements.define('app-home', AppHome)
