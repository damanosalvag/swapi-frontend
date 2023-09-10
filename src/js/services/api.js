// export async function fetchData(endPonit) {
//   try {
//     const response = await fetch(`https://swapi.dev/api/${endPonit}`)
//     const data = await response.json()
//     return data
//   } catch (error) {
//     console.log(error)
//   }
// }

export function fetchDataMain(endPonit) {
  const response = fetch(`https://swapi.dev/api/`)
    .then(response => response.json())
    .then(res => {
      const resSubRoute =
        endPonit !== ''
          ? fetch(res[endPonit]).then(response => 
              response.json()
            )
          : res
      return resSubRoute
    })
  return response
}
