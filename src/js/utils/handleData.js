import { fetchDataSubRoute } from '../services/api.js'
import { HomeDetails } from '../components/home/body/HomeDetails.js'

export function handleListEvent() {
  const itemList = document.getElementById('home-body__list')
  const links = itemList.querySelectorAll('a')
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault()
      const route = link.getAttribute('href')
      fetchDataSubRoute(route).then(data => {
        const homeDetails =
          document.querySelector('home-details') || new HomeDetails()
        const cleanList = homeDetails.querySelector('ul')
        cleanList.innerHTML = ''
        const detailsContainer = document.querySelector('home-body')
        const refer = document.getElementById('home-body')
        if (refer) {
          detailsContainer.insertBefore(homeDetails, refer.nextSibling)
        } else {
          detailsContainer.appendChild(homeDetails)
        }
        homeDetails.setAttribute('details-raw', JSON.stringify(data))
      })
    })
  })
}
export function handleListEventDetails(link, num) {
  link.addEventListener('click', e => {
    e.preventDefault()
    const route = link.getAttribute('href')
    fetchDataSubRoute(route).then(data => {
      const homeDetails =
        document.querySelector(`home-details_${num}`) || new HomeDetails()
      const cleanList = homeDetails.querySelector('ul')
      cleanList.innerHTML = ''
      const detailsContainer = document.querySelector('home-body')
      detailsContainer.appendChild(homeDetails)
      homeDetails.setAttribute('details-raw', JSON.stringify(data))
    })
  })
}
