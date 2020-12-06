import { LitElement, html, property, css } from "lit-element";

class PersonCard extends LitElement {
  @property({ type: String }) name = "";
  static get styles() {
    return css`
      .PersonCard {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2.4rem 1.6rem;
        border: 4px solid dodgerblue;
        color: dodgerblue;
        border-radius: 5px;
        font-weight: 600;
        font-size: 24px;
      }
    `;
  }
  render() {
    return html`
      <div class="PersonCard">
        ${this.name}
      </div>
    `;
  }
}

customElements.define("person-card", PersonCard);
