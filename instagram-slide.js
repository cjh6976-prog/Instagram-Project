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
        dateTaken: { type: String},
        title: { type: String },
        channelName: { type: String }
    };
}

  static get styles() {
    return [super.styles, css`
    :host {
      display: block;
      width: 100%;
      color-scheme: light dark;
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
        width: 100%;
        max-width: 400px;
        border-radius: var(--ddd-border-radius-md);
        aspect-ratio: 4 / 5;
        height: auto;
        object-fit: cover;

    }
    h3 {
        font-size: var(--ddd-font-size-3xs);
        color: light-dark(var(--ddd-theme-default-coalyGray), var(--ddd-theme-default-white));
        margin: 0 0 8px 0;
        text-align: left;
    }
    .slide-wrapper h3 {
      align-self: flex-start;
    }
    h4 {
        font-size: var(--ddd-font-size-3xs);
        color: var(--ddd-theme-default-link);
        margin: var(--ddd-spacing-0);
        display: none;
    }
  
    .line {
        border: var(--ddd-spacing-0);
        border-top: 2px solid var(--ddd-theme-default-skyBlue);
        margin: 16px 0;
        width: 40px;
        display: none;
    }
    .header {
      display: flex;
      align-items: center;
      gap: var(--ddd-spacing-3);
      width: 100%;
      max-width: 400px;
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
      margin: var(--ddd-spacing-0);
      font-size: var(--ddd-font-size-3xs);
    }
    .header-text,
    .username {
      color: light-dark(var(--ddd-theme-default-coalyGray), var(--ddd-theme-default-white));
    }
    .name {
      color: light-dark(var(--ddd-theme-default-coalyGray), var(--ddd-theme-default-white));
    }
    .since {
      color: var(--ddd-theme-default-limestoneGray);
      font-size: var(--ddd-font-size-4xs);
    }
    .username {
      font-weight: var(--ddd-font-weight-bold);
      margin-right: var(--ddd-spacing-2);
    }
    .name {
      font-size: var(--ddd-font-size-3xs);
      color: var(--ddd-theme-default-limestoneGray);
    }
    .date-taken {
      color: light-dark(var(--ddd-theme-default-limestoneGray));
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
        color: light-dark(var(--ddd-theme-default-coalyGray), var(--ddd-theme-default-white));
        overflow: hidden;
        max-height: none;
        padding-top: var(--ddd-spacing-3);
    }
    @media (max-width: 600px) {
        .profile-picture {
            width: 35px;
            height: 35px;
        }
      }
    .date{
        color: var(--ddd-theme-default-limestoneGray);
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
    </div>
  </div>
  <div class="since">Since: ${this.since}
  </div>
      <img src="${this.active ? this.image : ''}" alt="${this.caption || "Intagram Image"}" loading="lazy" />
      <div class="content">
</div>
</div>
`;
  }
}


globalThis.customElements.define(InstagramSlide.tag, InstagramSlide);