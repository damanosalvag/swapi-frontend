export const router = route => {
  const routes = {
    '/': 'app-home',
    '/films': 'app-home',
    '/people': 'app-home',
    '/planets': 'app-home',
    '/species': 'app-home',
    '/starships': 'app-home',
    '/vehicles': 'app-home',
  }
  const component = routes[route] ? routes[route] : 'app-home'
  return component
}
