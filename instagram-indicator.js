/**
 * Copyright 2026 cjh6976-prog
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `instagram-project`
 * 
 * @demo index.html
 * @element instagram-indicator
 */
export class InstagramIndicator extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "instagram-indicator";
  }
  static get properties() {
    return {
        ...super.properties,
        total: { type: Number },
        currentIndex: { type: Number },
    };
  }

    static styles = css`
    :host {
        display: block;
        margin-top: 20px;
        position: relative;
        bottom: auto;
        margin-top: 10px;
        left: 50%;
        transform: translateX(-50%);
    }
    :host{
        width: 100%;
        text-align: center;
    }
    .content {
    }
    .dots{
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: var(--ddd-theme-default-limestoneGray);
        margin: 0 5px;
        cursor: pointer;
    }
    .dots.active {
        background-color: var(--ddd-theme-default-skyBlue);
    }
  `;
  _selectIndicator(index) {
    this.dispatchEvent(
        new CustomEvent("indicator-clicked", {
          detail: { index },
          bubbles: true,
          composed: true,
        })
    );
  }

  // Lit render the HTML
  render() {
    return html`
${Array.from({ length: this.total }).map(
    (_, i) => html`
    <span
    class="dots ${i === this.currentIndex ? "active" : ""}"
    @click="${() => this._selectIndicator(i)}">
  </span>
  `)}
   `;
  }

}

globalThis.customElements.define(InstagramIndicator.tag, InstagramIndicator);