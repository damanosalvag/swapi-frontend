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