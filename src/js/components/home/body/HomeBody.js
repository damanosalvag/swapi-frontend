// import { fetchData } from '../../../services/api.js'
import { fetchDataMain } from '../../../services/api.js'
import { BodyPagination } from './BodyPagination.js'

export class HomeBody extends HTMLElement {
  constructor() {
    super()

    this.container = document.createElement('section')
    this.appendChild(this.container)
    this.container.id = 'home-body'
    this.pagination = new BodyPagination()
    this.appendChild(this.pagination)
  }
  connectedCallback() {
    this.render()
  }
  render() {
    this.currentRoute = window.location.pathname
    const [mainRoute] = this.currentRoute.split('/').slice(1)

    this.containerTest = document.createElement('h2')
    this.container.appendChild(this.containerTest)
    this.containerTest.innerHTML = `The sections is ${mainRoute}`

    //call to api
    fetchDataMain(mainRoute)
      .then(data => this.handleData(data, mainRoute))
      .then(data => this.handleRender(data))
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
    this.pagNum = this.pagination.querySelector('.body-pagination__num')
    this.currentPage = next ? parseInt(next[next.length - 1]) - 1 : '1'
    this.pagNum.innerHTML = `${this.currentPage}/${Math.ceil(count / 10)}`
    this.pagination.setAttribute('next', next)
    this.pagination.setAttribute('previous', previous)

    return elements
  }
  handleRender(list) {
    const listElement = document.createElement('ul')
    list.forEach(element => {
      const item = document.createElement('li')
      item.innerHTML = `<a href="${element.url}">${element.name}</a>`
      listElement.appendChild(item)
    })
    this.container.appendChild(listElement)
  }
}

customElements.define('home-body', HomeBody)
