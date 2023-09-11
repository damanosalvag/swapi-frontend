export function fetchDataPg(endPonit) {
    const response = fetch(endPonit).then(response => response.json())
    return response
}

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
