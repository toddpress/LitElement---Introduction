import { LitElement, html, css } from "lit-element";
import "./components/person-card";
class MyElement extends LitElement {
  static get styles() {
    return css`
      :host {
        background: azure;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI",
          Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
          "Segoe UI Symbol";
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        height: 100vh;
      }
      h1 {
        width: 100%;
        text-align: center;
        margin: 0 0 1.6rem 0;
      }
    `;
  }
  render() {
    return html`
      <div>
        <h1>
          Hello 👋<br />
          My name is:
        </h1>
        <person-card name="todd"></person-card>
      </div>
    `;
  }
}

customElements.define("my-app", MyElement);
