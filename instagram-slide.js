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
        image: { type: String },
        caption: { type: String },
        username: { type: String },
        name: { type: String },
        profilePicture: { type: String },
        since: { type: String },
    };
}

  static get styles() {
    return [super.styles, css`
    :host {
      display: block;
      width: 100%;
    }
    :host([active]) {
      display: block;
    }
    .slide-wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        height: auto;
        overflow: hidden; 
        max-height: 500px; 
        width: 100%;
    }
    .slide-wrapper > img {
        display: block;
        margin: 0 auto;
        width: 450px;
        border-radius: 12px;
        height: 550px;
        object-fit: cover;

    }
    h3 {
        font-size: 20px;
        color: black;
        margin: 0 0 8px 0;
        text-align: left;
    }
    .slide-wrapper h3 {
      align-self: flex-start;
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
    .header {
      display: flex;
      align-items: center;
      gap: 10px;
      width: 450px;
      margin: 0 0 10px 0;
    }
    .profile-picture {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
      flex-shrink: 0;
    }
    .header h3 {
      margin: 0;
      font-size: 20px;
    }
    .header-text,
    .username,
    .name {
      color: black;
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
        padding-top: 10px;
    }
  `];
  } 
  // Lit render the HTML
  render() {
    return html`
<div class="slide-wrapper">
  <div class="header">
    <img class="profile-picture" src="${this.profilePicture}" alt="Profile Picture" />
    <div class="header-text">
      <span class="username">${this.username}</span>
      <span class="name">${this.name}</span>
      <span class="since">${this.since}</span>
    </div>
  </div>
      <img src="${this.image}" alt="slide image" loading="lazy" />
      <div class="content">
</div>

</div>
`;
  }
}


globalThis.customElements.define(InstagramSlide.tag, InstagramSlide);