export class BodyPagination extends HTMLElement {
  connectedCallback() {
    this.render()
  }
  render() {
    this.innerHTML = `
<section class="body-pagination">
<Button class="button-back" aria-label="Back" type="button">Back</Button>
<p class="body-pagination__num">1/20</p>
<Button class="button-forward" aria-label="Forward" type="button">Forward</Button>
</section>
`
  }
}

customElements.define('body-pagination', BodyPagination)
