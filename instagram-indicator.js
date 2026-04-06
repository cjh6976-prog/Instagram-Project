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
        slides: { type: Array },
    };
  }

    static styles = css`
    :host {
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-top: var(--ddd-spacing-5);
        position: relative;
        bottom: auto;
        margin-top: var(--ddd-spacing-3);
        left: 50%;
        transform: translateX(-50%);
        flex-wrap: wrap;
        max-width: 100%;
    }
    .thumbnail {
        width: 30px;
        height: 30px;
        object-fit: cover;
        margin: var(--ddd-spacing-0);
        border-radius: 50%;
        cursor: pointer;
        opacity: 0.6;
        border: var(--ddd-border-sm) solid transparent;
        flex-shrink: 0;
    }
    .thumbnail:hover {
        opacity: 1;
    }
    .thumbnail.active {
        opacity: 1;
        border-color: var(--ddd-theme-primary);
    }
    .thumbnail:hover {
      transform: scale(1.1);
      border-color: var(--ddd-theme-primary);
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
${this.slides.map((slide, index) => html`
    <img 
        class="thumbnail ${index === this.currentIndex ? "active" : ""}"
        src="${slide.image.thumbnail || slide.image.full}" 
        loading="lazy"
        alt="${slide.caption} thumbnail"
        @click="${() => this._selectIndicator(index)}"
    />
`)}
    `;
  }
}


globalThis.customElements.define(InstagramIndicator.tag, InstagramIndicator);