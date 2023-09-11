// import { fetchDataPg } from '../utils/fetchDataPg.js'

export class HomePagination extends HTMLElement {
  constructor() {
    super()
    this.data = null
    this.setAttribute('pagination', '')
  }
  static get observedAttributes() {
    return ['pagination']
  }

  connectedCallback() {
    this.render()
    this.addEventListener('click', this.handleClick)
  }
  render() {
    this.innerHTML = `
<section class="body-pagination">
<Button class="btn-prev" aria-label="Back" type="button">Prev</Button>
<p class="body-pagination__num">1/1</p>
<Button class="btn-next" aria-label="Forward" type="button">Next</Button>
</section>
`
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (newValue) {
      this.pagination = JSON.parse(newValue)
      this.data = this.pagination
      const { previous, next, totalPage, currentPage } = this.pagination
      console.log(previous, next, totalPage, currentPage)
      this.pagNumber = document.querySelector('.body-pagination__num')
      this.pagNumber.innerHTML = `${currentPage}/${totalPage}`
    }
  }
  handleClick(event) {
    if (event.target && event.target.matches('.btn-prev')) {
      this.prev_endPointApi = this.data.previous
      this.prev_endPoint = this.prev_endPointApi.split('api').slice(2)
      window.history.pushState({}, '', this.prev_endPoint)
      window.dispatchEvent(new Event('popstate'))

    } else if (event.target && event.target.matches('.btn-next')) {
      this.next_endPointApi = this.data.next
      this.next_endPoint = this.next_endPointApi.split('api').slice(2)
      console.log(this.next_endPoint)
      window.history.pushState({}, '', this.next_endPoint)
      window.dispatchEvent(new Event('popstate'))
    } else {
      return
    }
  }
}

customElements.define('home-pagination', HomePagination)
