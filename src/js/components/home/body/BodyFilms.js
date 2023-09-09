export class BodyFilms extends HTMLElement {
  connectedCallback() {
    this.render()
  }
  render() {
    this.innerHTML = `
<section class="home-films">
<h2 class="home-films__title">Popular Films</h2>
<div class="home-films__list">
</div>
</section>
`
  }
}

customElements.define('body-films', BodyFilms)
