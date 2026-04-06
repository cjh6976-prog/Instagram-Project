/**
 * Copyright 2026 cjh6976-prog
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./instagram-indicator.js";
import "./instagram-arrow.js";
import "./instagram-slide.js";
/**
 * `instagram-project`

 * 
 * @demo index.html
 * @element instagram-project
 */
export class InstagramProject extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "instagram-project";
  }

  constructor() {
    super();
    this.title = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      
    };
    this.currentIndex = 0;
    this.slides = [];   
    this.foxData = null;
    this.liked = false;
    this.loading = true;
    this.errorMessage = "";
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      currentIndex: { type: Number },
      slides: { type: Array },
      foxData: { type: Object },
      liked: { type: Boolean },
      loading: { type: Boolean },
      errorMessage: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        background-color: var(--ddd-theme-default-background);
        color: var(--ddd-theme-default-text);
        font-family: var(--ddd-font-navigation);
        max-width: 900px;
        margin: 0 auto;
        padding: var(--ddd-spacing-2);
        color-scheme: light dark;
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-5);
        background-color: light-dark(var(--ddd-theme-default-white), var(--ddd-theme-default-coalyGray));
        margin-left: auto;
        margin-right: auto;
        border-radius: var(--ddd-border-radius-md);
        max-width: 500px;
        box-shadow: var(--ddd-boxShadow-sm) var(--ddd-theme-default-limestoneGray);
        display: flex;
        flex-direction: column;
        position: relative;

        
      }
      .actions {
        display: flex;
        gap: var(--ddd-spacing-3);
        padding: 10px 5px;
    }
    .icon {
        font-size: var(--ddd-font-size-3xs);
        cursor: pointer;
        user-select: none;
        background: none;
        border: none;
        padding: var(--ddd-spacing-0);
    }
    .icon:hover {
        opacity: 0.6;
    }

      h3 span {
        font-size: var(--instagram-project-label-font-size, var(--ddd-font-size-s));
      }
      .caption-box {
        color: light-dark(var(--ddd-theme-default-coalyGray), var(--ddd-theme-default-white));
      }
      .caption-box strong {
        color: light-dark(var(--ddd-theme-default-coalyGray), var(--ddd-theme-default-white));
      }
      .date-taken {
        color: var(--ddd-theme-default-limestoneGray);
        font-size: var(--ddd-font-size-4xs);
        margin-top: var(--ddd-spacing-2);
      }
      .message {
        text-align: center;
        padding: var(--ddd-spacing-8);
        color: light-dark(var(--ddd-theme-default-coalyGray), var(--ddd-theme-default-white));
      }
      .instagram-indicator {
        align-self: center;
      }
    `];
  }

  async firstUpdated() {
    try {
      const response = await fetch("/api/images");
      const data = await response.json();
      this.slides = data.images;
      const params = new URLSearchParams(window.location.search);
      const index = params.get("activeIndex");
      if (index !== null && !isNaN(index) && index >= 0 && index < this.slides.length) {
        this.currentIndex = parseInt(index);
      }
      this._loadLikeState();
    } catch (error) {
      console.error("Error loading image data:", error);
      this.errorMessage = "Failed to load images. Please try again later.";}
      finally {
        this.loading = false;
    }
  }
  updated(changedProperties) {
    if (changedProperties.has("currentIndex")) {
      this._loadLikeState();
    }
  }

  updateQueryParams(Key, Value) {
    const url = new URL(window.location.href);
    url.searchParams.set(Key, Value);
    history.pushState(null, "", url.toString());
  }

    _loadLikeState() {
    const savedState = localStorage.getItem("liked" + this.currentIndex);
    this.liked = savedState === "true";
  }


  next() {
    if (this.currentIndex < this.slides.length - 1) {
      this.currentIndex++;
      this.updateQueryParams("activeIndex", this.currentIndex);
      this._loadLikeState();
    }
  }
  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateQueryParams("activeIndex", this.currentIndex);
      this._loadLikeState();
    }
  }

  goToSlide(index) {
    this.currentIndex = index;
    this.updateQueryParams("activeIndex", this.currentIndex);
    this._loadLikeState();
  }
    toggleLike() {
    this.liked = !this.liked;
    localStorage.setItem("liked" + this.currentIndex, this.liked);
    }
    share() {
      const url = `${window.location.origin}${window.location.pathname}?activeIndex=${this.currentIndex}`;
      navigator.clipboard.writeText(url);
      alert("Link copied to clipboard!");
    }

  // Lit render the HTML
  render() {
    if (this.loading) {
      return html`<div class="message" role="status">Loading...</div>`;
    }
    if (this.errorMessage) {
      return html`<div class="message">${this.errorMessage}</div>`;
    }
    const currentSlide = this.slides[this.currentIndex];
    return html`
<div class="wrapper">
  <instagram-arrow 
   direction="left"
   ?disabled="${this.currentIndex === 0}"
    @arrow-clicked="${this.prev}">
    </instagram-arrow>

    <instagram-slide 
      ?active="${true}"
      .username="${currentSlide.username}"
      .name="${currentSlide.author.name}"
      .profilePicture="${currentSlide.author.profilePicture}"
      .since="${currentSlide.author.since}"
      .image="${currentSlide.image.full}"
      .caption="${currentSlide.caption}"
      .dateTaken="${currentSlide.dateTaken}"
    ></instagram-slide>
  
  <instagram-arrow 
   direction="right"
   ?disabled="${this.currentIndex === this.slides.length - 1}"
    @arrow-clicked="${this.next}">
    </instagram-arrow>

  <instagram-indicator
  .total="${this.slides.length}"
  .currentIndex="${this.currentIndex}"
  .slides="${this.slides}"
  @indicator-clicked="${(e) => this.goToSlide(e.detail.index)}">
</instagram-indicator>
<div class="actions">
    <button class="icon" @click="${this.toggleLike}"
    aria-label="${this.liked ? "Unlike Image" : "Like Image"}"
     title="${this.liked ? "Unlike Image" : "Like Image"}">
        ${this.liked ? "❤️" : "🤍"}
</button>
<button class="icon">💬</button>
<button class="icon" @click="${this.share}"
aria-label="Share Image"
title="Share Image"
>🔗</button>
</div>
<div class="caption-box">
  ${this.slides[this.currentIndex]?.caption
    ? html`
    <strong>${this.slides[this.currentIndex].caption.split(" ")[0]}
    </strong>
    ${this.slides[this.currentIndex].caption.split(" ").slice(1).join(" ")}
    `
    : ""}
</div>
<div class="date-taken">
  ${this.slides[this.currentIndex]?.dateTaken}
</div>
</div>`;
  }


}


globalThis.customElements.define(InstagramProject.tag, InstagramProject);