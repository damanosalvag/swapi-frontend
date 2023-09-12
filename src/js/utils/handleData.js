import { fetchDataSubRoute } from '../services/api.js'
import { HomeDetails } from '../components/home/body/HomeDetails.js'

//old option
// export function handleListEvent() {
//   const itemList = document.getElementById('home-body__list')
//   const links = itemList.querySelectorAll('a')
//   links.forEach(link => {
//     link.addEventListener('click', e => {
//       e.preventDefault()
//       const route = link.getAttribute('href')
//       fetchDataSubRoute(route).then(data => {
//         const atrDetails = document.querySelector('home-body')
//         atrDetails.setAttribute('dataDetailsRaw', JSON.stringify(data))

//         const homeDetails =
//           document.querySelector('home-details') || new HomeDetails()
//           const cleanList = homeDetails.querySelector('ul')
//           cleanList.innerHTML = ''
//         atrDetails.appendChild(homeDetails)
//       })
//     })
//   })
// }
//new option
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
        detailsContainer.appendChild(homeDetails)
        homeDetails.setAttribute('details-raw', JSON.stringify(data))
      })
    })
  })
}
