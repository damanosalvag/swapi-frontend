import { fetchDataSubRoute } from '../../../services/api.js'

export class HomeDetails extends HTMLElement {
  constructor() {
    super()
    this.detailsListTitle = document.createElement('h2')
    this.detailsListTitle.textContent = 'Details'
    this.ulElements = document.createElement('ul')
    this.ulElements.id = 'list_home-details'
    this.appendChild(this.ulElements)
  }
  connectedCallback() {
    this.render()
  }
  render() {
    this.detailsContainer = document.querySelector('home-body')
    this.dataRaw = this.detailsContainer.getAttribute('data')
    this.data = JSON.parse(this.dataRaw)

    Object.keys(this.data).forEach(key => {
      let value = this.data[key]
      if (
        typeof value === 'string' &&
        value.startsWith('https://swapi.dev/api/')
      ) {
        value = fetchDataSubRoute(value).then(obj => {
          this.liElement = document.createElement('li')
          this.liElement.textContent = `${key}: ${obj.name}`
          this.ulElements.appendChild(this.liElement)
        })
      } else if (Array.isArray(value)) {
        value = 'test'
        this.liElement = document.createElement('li')
        this.liElement.textContent = `${key}: ${value}`
        this.ulElements.appendChild(this.liElement)
      } else {
        this.liElement = document.createElement('li')
        this.liElement.textContent = `${key}: ${value}`
        this.ulElements.appendChild(this.liElement)
      }
    })
  }
}
customElements.define('home-details', HomeDetails)
