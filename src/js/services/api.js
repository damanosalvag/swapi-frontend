export function fetchDataSubRoute(endPonit) {
  const response = fetch(endPonit).then(response => response.json())
  return response
}

export async function fetchDataGroup(array) {
  const fetchPromises = array.map(endPoint => fetch(endPoint))
  const allPromises = await Promise.all(fetchPromises)
  const responses = await Promise.all(
    allPromises.map(response => response.json())
  )
  return responses
}

export function fetchDataMain(endPonit, paramPage) {
  const response = fetch(`https://swapi.dev/api/`)
    .then(response => response.json())
    .then(res => {
      const resSubRoute =
        endPonit !== ''
          ? fetch(res[endPonit] + paramPage).then(response => response.json())
          : res
      return resSubRoute
    })
  return response
}
