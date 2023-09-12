import { fetchDataSubRoute } from '../../../services/api.js'

export class HomeDetails extends HTMLElement {
  constructor() {
    super()
    this.detailsListTitle = document.createElement('h2')
    this.detailsListTitle.textContent = 'Details'
    this.appendChild(this.detailsListTitle)
    this.ulElements = document.createElement('ul')
    this.ulElements.id = 'list_home-details'
    this.appendChild(this.ulElements)
  }
  static get observedAttributes() {
    return ['details-raw']
  }
  connectedCallback() {
    if (!this.hasAttribute('isDataDetailsRendered')) {
      this.backPage = document.createElement('button')
      this.backPage.classList.add('btn-backPage')
      this.backPage.textContent = 'Back'
      this.appendChild(this.backPage)
    }
  }
  attributeChangedCallback(name, oldValue, newValue) {
    this.render(newValue)
    this.setAttribute('isDataDetailsRendered', '')
  }

  render(dataRaw) {
    this.data = JSON.parse(dataRaw)

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
