export class BodyPeople extends HTMLElement {
  connectedCallback() {
    this.render()
  }
  render() {
    this.innerHTML = `
<section class="body-people">
<h2 class="body-people__title">People</h2>
<div class="body-people__list">
</div>
</section>
`
  }
}

customElements.define('body-people', BodyPeople)
