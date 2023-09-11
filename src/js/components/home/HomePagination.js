// import { fetchDataPg } from '../utils/fetchDataPg.js'

export class HomePagination extends HTMLElement {
  constructor() {
    super()
    this.data = null
    this.setAttribute('pagination', 'data')
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
    this.pagination = JSON.parse(newValue)
    this.data = this.pagination
    const { previous, next, totalPage, currentPage } = this.pagination
    this.pagNumber = document.querySelector('.body-pagination__num')
    this.pagNumber.innerHTML = `${currentPage}/${totalPage}`
  }
  // handleClick (event) {
  //   if (event.target && event.target.matches('.btn-prev')) {
  //     this.prev_endPoint = this.data.previous
  //     // call api
  //     fetchDataPg(this.prev_endPoint).then(data => )
  //     // const bodyList = document.getElementById('home-body__list')
  //     // bodyList.remove()

  //   }
  //  }
}

customElements.define('home-pagination', HomePagination)
