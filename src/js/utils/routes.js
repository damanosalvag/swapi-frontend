export const router = route => {
  const routes = {
    '/': 'app-home',
    '/films': 'body-films',
    '/people': 'body-people',
    '/planets': 'app-planets',
    '/species': 'app-species',
    '/starships': 'app-starships',
    '/vehicles': 'app-vehicles',
  }
  const component = routes[route] ? routes[route] : 'app-home'
  return component
}
