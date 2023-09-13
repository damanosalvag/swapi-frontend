import { router } from './routes.js'

export const handleRouteChange = () => {
  const currentRoute = window.location.pathname
  const componentName = router(currentRoute)
  switch (componentName) {
    case 'app-home':
      const container_main = document.getElementById('app-container')
      container_main.innerHTML = ''
      handleCreateComponent(componentName, container_main)
      break
    // case 'body-films':
    //   const container_bodyFilms = document.getElementById('home-body')
    //   container_bodyFilms.innerHTML = ''
    //   handleCreateComponent(componentName, container_bodyFilms)
    //   break
    // case 'body-people':
    //   const container_bodyPeople = document.getElementById('home-body')
    //   container_bodyPeople.innerHTML = ''
    //   handleCreateComponent(componentName, container_bodyPeople)
    //   break
    default:
      console.log('404')
  }
}

function handleCreateComponent(compName, container) {
  const component = document.createElement(compName)
  container.appendChild(component)
}
