export class HomeHeader extends HTMLElement {
  connectedCallback() {
    this.render()
    this.handleHrefChange()
  }
  render() {
    this.innerHTML = `
<header class="header">
<div class="header__logo">
<img src="./public/logo.jpg" alt="logo">
</div>
<div class="header__title-container">
<h1 class="title">Star Wars API frontend</h1>
</div>
<nav class="header__nav">
<a href="/films">Films</a>
<a href="/people">People</a>
<a href="/planets">Planets</a>
<a href="/species">Species</a>
<a href="/starships">Starships</a>
<a href="/vehicles">Vehicles</a>
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
