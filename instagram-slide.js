/**
 * Copyright 2026 cjh6976-prog
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `play-list-project-desgin`
 * 
 * @demo index.html
 * @element instagram-slide
 */
export class InstagramSlide extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "instagram-slide";
  }

  static get properties() {
    return {
        ...super.properties,
        topHeading: { type: String, attribute: "top-heading" },
        secondHeading: { type: String, attribute: "second-heading" },
        active: { type: Boolean, reflect: true },
        liked: { type: Boolean },
    };
}

  static get styles() {
    return [super.styles, css`
    :host {
      display: block;
    }
    :host([active]) {
      display: block;
    }
    .slide-wrapper {
        display: flex;
        flex-direction: column;
        height: auto;
        color: lightblue;
        overflow: hidden;
        height: auto;
    }
    .slide-wrapper img {
        display: block;
        margin: 0 auto;
        max-width: 100%;
        border-radius: 12px;
        height: 200px;
        width: 100%;
        object-fit: cover;
    }
    h3 {
        font-size: 20px;
        color: black;
        margin: 0 0 8px 0;
        text-align: left;
    }
    h4 {
        font-size: 30px;
        color: var(--ddd-theme-default-link);
        margin: 0;
        display: none;
    }
  
    .line {
        border: none;
        border-top: 2px solid var(--ddd-theme-default-skyBlue);
        margin: 16px 0;
        width: 40px;
        display: none;
    }
    div::-webkit-scrollbar {
  width: 12px;               /* width of the entire scrollbar */
}

div::-webkit-scrollbar-track {
  background: lightgray;        /* color of the tracking area */
}

div::-webkit-scrollbar-thumb {
  background-color: gray;    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
  border: 3px gray;  /* creates padding around scroll thumb */
  overflow: hidden;
}
    .content {
        color: black;
        overflow: hidden;
        max-height: none;
        margin-top: top;
        padding-top: 10px;
    }
  `];
  } 
  // Lit render the HTML
  render() {
    return html`
<div class="slide-wrapper">
    <h3>${this.topHeading}</h3>
    <h4>${this.secondHeading}</h4>
    <hr class="line">
    <div class="content">
    <slot></slot>
</div>

</div>
`;
  }
}


globalThis.customElements.define(InstagramSlide.tag, InstagramSlide);