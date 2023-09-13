import { fetchDataSubRoute } from '../../../services/api.js'
import { fetchDataGroup } from '../../../services/api.js'

export class HomeDetails extends HTMLElement {
  constructor() {
    super()
    this.keyGroup = []
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
        value = fetchDataSubRoute(value).then(item => {
          this.liElement = document.createElement('li')
          this.liElement.textContent = `${key}: ${item.name}`
          this.ulElements.appendChild(this.liElement)
        })
      } else if (Array.isArray(value) && value.length !== 0) {
        this.liElement = document.createElement('li')
        this.liElement.textContent = `${key}:`
        this.liElement.classList.add(`${key}`)
        this.ulElements.appendChild(this.liElement)
        this.keyGroup.push(key)

        this.objGroup = fetchDataGroup(value).then(obj => {
          this.count = 1
          this.length = obj.length
          obj.map(item => {
            this.nameGroup = this.keyGroup[0]
            this.liElementRef = document.querySelector(`.${this.nameGroup}`)
            this.name = item.title ? item.title : item.name
            this.aElement = document.createElement('a')
            this.aElement.textContent = `${this.name}`
            this.aElement.setAttribute('href', item.url)
            this.liElementRef.appendChild(this.aElement)
            if (this.length === this.count) {
              this.keyGroup.shift()
            }
            this.count++
          })
        })
      } else {
        this.liElement = document.createElement('li')
        this.liElement.textContent = `${key}: ${value}`
        this.ulElements.appendChild(this.liElement)
      }
    })
  }
}
customElements.define('home-details', HomeDetails)
