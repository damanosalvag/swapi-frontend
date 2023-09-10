import "./components/AppElement.js";
import "./components/home/AppHome.js"
import "./components/home/body/HomeBody.js"
import { handleRouteChange } from "./utils/router.js";

// window.addEventListener('DOMContentLoaded', () => {
//   const appElement = document.querySelector('app-element')
//   handleRouteChange()
// })

window.addEventListener("popstate", handleRouteChange);