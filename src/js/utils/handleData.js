import { fetchDataSubRoute } from '../services/api.js'
import { HomeDetails } from '../components/home/body/HomeDetails.js'

// export function handleData(data, mainRoute) {
//     const { count, next, previous, results } = data
//     let elements = []
//     if (mainRoute === 'films') {
//       elements = results.map(element => {
//         return { name: element.title, url: element.url }
//       })
//     } else {
//       elements = results.map(element => {
//         return { name: element.name, url: element.url }
//       })
//     }
//     this.pagNum = this.pagination.querySelector('.body-pagination__num')
//     this.currentPage = next ? parseInt(next[next.length - 1]) - 1 : '1'
//     this.pagNum.innerHTML = `${this.currentPage}/${Math.ceil(count / 10)}`
//     this.pagination.setAttribute('next', next)
//     this.pagination.setAttribute('previous', previous)

//     return elements
// }
// export function setInfoPagination (next, prev, count) {
//       const pagNum = document.querySelector('.body-pagination__num')
//     const currentPage = next ? parseInt(next[next.length - 1]) - 1 : '1'
//     pagNum.innerHTML = `${this.currentPage}/${Math.ceil(count / 10)}`
//     this.pagination.setAttribute('next', next)
//     this.pagination.setAttribute('previous', previous)
//   }

export function handleListEvent() {
  const itemList = document.getElementById('home-body__list')
  const links = itemList.querySelectorAll('a')
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault()
      const route = link.getAttribute('href')
      fetchDataSubRoute(route).then(data => {
        const atrDetails = document.querySelector('home-body')
        atrDetails.setAttribute('data', JSON.stringify(data))

        const homeDetails =
          document.querySelector('home-details') || new HomeDetails()
          const cleanList = homeDetails.querySelector('ul')
          cleanList.innerHTML = ''
        atrDetails.appendChild(homeDetails)
      })
    })
  })
}
