// import { fetchData } from '../../../services/api.js'
import { fetchDataMain } from '../../../services/api.js'
import { handleListEvent } from '../../../utils/handleData.js'

export class HomeBody extends HTMLElement {
  constructor() {
    super()

    this.container = document.createElement('section')
    this.appendChild(this.container)
    this.container.id = 'home-body'
  }
  connectedCallback() {
    this.render()
  }
  render() {
    this.currentRoute = window.location.pathname
    this.queryString = window.location.search
    // this.params = new URLSearchParams(queryString)
    const [mainRoute] = this.currentRoute.split('/').slice(1)

    this.containerTest = document.createElement('h2')
    this.container.appendChild(this.containerTest)
    this.containerTest.innerHTML = `The sections is ${mainRoute}`

    //call to api
    fetchDataMain(mainRoute, this.queryString)
      .then(data =>
        mainRoute !== '' ? this.handleData(data, mainRoute) : data
      )
      .then(data =>
        mainRoute !== '' ? this.handleRender(data) : console.log(data)
      )
      .catch(error => {
        console.log(error)
      })
  }
  handleData(data, mainRoute) {
    const { count, next, previous, results } = data
    let elements = []
    if (mainRoute === 'films') {
      elements = results.map(element => {
        return { name: element.title, url: element.url }
      })
    } else {
      elements = results.map(element => {
        return { name: element.name, url: element.url }
      })
    }
    // pagination
    this.currentPage = previous ? parseInt(previous[previous.length -1]) +1 : '1'
    this.pagNum = `${Math.ceil(count / 10)}`
    this.pagination = JSON.stringify({
      next: next,
      previous: previous,
      totalPage: this.pagNum,
      currentPage: this.currentPage,
    })
    this.homePagination = document.querySelector('home-pagination')
    this.homePagination.setAttribute('pagination', this.pagination)

    return elements
  }
  handleRender(list) {
    const listElement = document.createElement('ul')
    listElement.id = 'home-body__list'
    list.forEach(element => {
      const item = document.createElement('li')
      item.innerHTML = `<a href="${element.url}">${element.name}</a>`
      listElement.appendChild(item)
    })
    this.container.appendChild(listElement)
    handleListEvent()
  }
}

customElements.define('home-body', HomeBody)
