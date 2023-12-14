export const router = route => {
  const routes = {
    '/': 'app-home',
    '/films': 'app-home',
    '/people': 'app-home',
    '/planets': 'app-home',
    '/species': 'app-home',
    '/starships': 'app-home',
    '/vehicles': 'app-home',
    '/people/?page=2': 'app-home',
    // '/swapi-frontend/': 'app-home',
    // '/swapi-frontend/films': 'app-home',
    // '/swapi-frontend/people': 'app-home',
    // '/swapi-frontend/planets': 'app-home',
    // '/swapi-frontend/species': 'app-home',
    // '/swapi-frontend/starships': 'app-home',
    // '/swapi-frontend/vehicles': 'app-home',
  }
  const component = routes[route] ? routes[route] : 'app-home'
  return component
}
