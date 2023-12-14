// import logoPic from '../../../assets/public/logo.jpg'

export class HomeHeader extends HTMLElement {
  connectedCallback() {
    this.render()
    this.handleHrefChange()
  }
  render() {
    this.innerHTML = `
<header class="header">
<div class="header__logo">
<img src="https://firebasestorage.googleapis.com/v0/b/filmoteca-c42e2.appspot.com/o/images%2Flogo.jpg?alt=media&token=8bd7c390-3a6c-46ee-8474-f64fcd3f3609" alt="logo">
</div>
<div class="header__title-container">
<h1 class="title">Star Wars API frontend</h1>
</div>
<nav class="header__nav">
<a href="/films/?page=1">Films</a>
<a href="/people/?page=1">People</a>
<a href="/planets/?page=1">Planets</a>
<a href="/species/?page=1">Species</a>
<a href="/starships/?page=1">Starships</a>
<a href="/vehicles/?page=1">Vehicles</a>
</nav>
</header>
`
  }
  handleHrefChange() {
    this.links = this.querySelectorAll('a')
    this.links.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault()
        this.route = link.getAttribute('href')
        window.history.pushState({}, '', this.route)
        window.dispatchEvent(new Event('popstate'))
      })
    })
  }
}

customElements.define('home-header', HomeHeader)
