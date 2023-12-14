import { fetchDataSubRoute, fetchDataGroup } from '../../../services/api.js'
import { handleListEventDetails } from '../../../utils/handleData.js'
import { removeKeys } from '../../../utils/handleRemove.js'

export class HomeDetails extends HTMLElement {
  constructor() {
    super()
    this.keyGroup = []
    this.version = this.countHomeDetails()
    this.id = `home-details_${this.version}`
    this.detailsListTitle = document.createElement('h2')
    this.detailsListTitle.textContent = `Details_${this.version}`
    this.appendChild(this.detailsListTitle)
    this.ulElements = document.createElement('ul')
    this.ulElements.id = `list_home-details_${this.version}`
    this.appendChild(this.ulElements)
  }
  static get observedAttributes() {
    return ['details-raw']
  }
  connectedCallback() {
    if (!this.hasAttribute(`isDataDetailsRendered_${this.version}`)) {
      this.closeBtn = document.createElement('button')
      this.closeBtn.classList.add('btn-close')
      this.closeBtn.textContent = 'close'
      this.appendChild(this.closeBtn)
      this.closeBtn.addEventListener('click', () => {
        this.remove()
      })
    }
  }
  attributeChangedCallback(name, oldValue, newValue) {
    this.render(newValue)
    this.setAttribute(`isDataDetailsRendered_${this.version}`, '')
  }

  render(dataRaw) {
    this.dataJson = JSON.parse(dataRaw)
    this.data = removeKeys(this.dataJson)
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
            this.liElementRef = this.ulElements.querySelector(
              `.${this.nameGroup}`
            )
            this.name = item.title ? item.title : item.name
            this.aElement = document.createElement('a')
            this.aElement.textContent = `  | ${this.name}`
            this.aElement.setAttribute('href', item.url)
            this.liElementRef.appendChild(this.aElement)
            if (this.length === this.count) {
              this.keyGroup.shift()
            }
            this.count++
            handleListEventDetails(this.aElement, this.version)
          })
        })
      } else {
        this.liElement = document.createElement('li')
        this.liElement.textContent = `${key}: ${value}`
        this.ulElements.appendChild(this.liElement)
      }
    })
  }
  countHomeDetails() {
    this.mainContainerHome = document.querySelector('home-body')
    this.matches = this.mainContainerHome.querySelectorAll('home-details')
    if (this.matches.length !== 0) {
      this.count = this.matches.length + 1
      return this.count
    }
    return 1
  }
}
customElements.define('home-details', HomeDetails)
