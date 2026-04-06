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
 * @element instagram-arrow
 */
export class InstagramArrow extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "instagram-arrow";
  }
  static get properties() {
    return {
        ...super.properties,
        direction: { type: String, reflect: true },
        disabled: {type: Boolean, reflect: true}
    };
  }

 static styles = css`
    :host {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      z-index: 2;
    }
    .arrow {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 3px solid var(--ddd-theme-default-link80);
        background-color: var(--ddd-theme-default-white);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: var(--ddd-font-size-3xs);
        color: var(--ddd-theme-default-link80);
        font-weight: var(--ddd-font-weight-bold);
        cursor: pointer;
    }
      .arrow:hover {
        opacity: 0.8;
      }
    :host([direction="left"]) {
      left: var(--ddd-spacing-2);
    }
    :host([direction="right"]) {
      right: var(--ddd-spacing-2);
    }
    :host([disabled]) .arrow {
        opacity: 0.3;
        cursor: not-allowed;
        border-color: var(--ddd-theme-default-limestoneGray);
        color: var(--ddd-theme-default-limestoneGray);
    }
  `;

  _activate() {
    if (this.disabled)
    {
        return;
    }
    this.dispatchEvent(
        new CustomEvent("arrow-clicked", {
            bubbles: true,
            composed: true,
            detail: { direction: this.direction },
        })
    );
  }
  _handleKey(e){
    if (e.key === "Enter"){
        this._activate();
    }
  }
    



  // Lit render the HTML
  render() {
    return html`
    <div class="arrow"
    tabindex="0"
    @click="${this._activate}"
    @keydown="${this._handleKey}"
    aria-label="${this.direction === "left" ? "previous" : "next"}"
    title="${this.direction === "left" ? "Previous Image" : "Next Image"}"
    >${this.direction === "left" ? "<" : ">"}</div>
`;
  }

}

globalThis.customElements.define(InstagramArrow.tag, InstagramArrow);