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
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: white;
        font-family: var(--ddd-font-navigation);
        max-width: 900px;
  
        margin: 0 auto;
        padding: var(--ddd-spacing-2);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: 25px;
        background-color: var(--ddd-theme-default-slateMaxLight);
        position: relative;
        border-radius: 12px;
        max-width: 900px;
        position: relative;
        box-shadow: 0px 4px 12px gray;
        height: auto;
        display: flex;
        flex-direction: column;

        
      }
      .actions {
        display: flex;
        gap: 10px;
        padding: 10px 5px;
    }
    .icon {
        font-size: 24px;
        cursor: pointer;
        user-select: none;
    }
    .icon.hover {
        opacity: 0.6;
    }

      h3 span {
        font-size: var(--instagram-project-label-font-size, var(--ddd-font-size-s));
      }
      .caption-box {
        color: black;
      }
    `];
  }

  firstUpdated() {
    this.slides = this.querySelectorAll("instagram-slide");
    this._updateSlides();
    this.loadFoxForAllSlides();
  }
  loadFoxForAllSlides() {
    if (!this.slides.length) return;
    this.loadFoxIntoSlide(this.slides[this.currentIndex]);
  }

  async loadFoxIntoSlide(slide) {
    try {
      const response = await fetch("https://randomfox.ca/floof/");
      const data = await response.json();
      slide.querySelectorAll("img").forEach(img => img.remove());
      const img = document.createElement("img");
      img.src = data.image;
      img.alt = "Random Fox";
      img.style.width = "100%";
      img.style.borderRadius = "8px";
      img.loading = "lazy";
      slide.appendChild(img);
    } catch (error) {
      console.error("Error fetching fox image:", error);
      }
      }


    _loadLikeState() {
    const savedState = localStorage.getItem("liked" + this.currentIndex);
    this.liked = savedState === "true";
  }

  _updateSlides() {
    this.slides.forEach((slide, index) => {
      slide.style.display = index === this.currentIndex ? "block" : "none";
    });
  }

  next() {
    if (this.currentIndex < this.slides.length - 1) {
      this.currentIndex++;
      this._updateSlides();
      this.loadFoxIntoSlide(this.slides[this.currentIndex]);
      this._loadLikeState();
    }
  }
  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this._updateSlides();
      this.loadFoxIntoSlide(this.slides[this.currentIndex]);
      this._loadLikeState();
    }
  }

  goToSlide(index) {
    this.currentIndex = index;
    this._updateSlides();
    this.loadFoxIntoSlide(this.slides[this.currentIndex]);
    this._loadLikeState();
  }
    toggleLike() {
    this.liked = !this.liked;
    localStorage.setItem("liked" + this.currentIndex, this.liked);
    }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
  <instagram-arrow 
   direction="left"
   ?disabled="${this.currentIndex === 0}"
    @arrow-clicked="${this.prev}">
    </instagram-arrow>

  <slot></slot>
  <instagram-arrow 
   direction="right"
   ?disabled="${this.currentIndex === this.slides.length - 1}"
    @arrow-clicked="${this.next}">
    </instagram-arrow>

  <instagram-indicator
  .total="${this.slides.length}"
  .currentIndex="${this.currentIndex}"
  @indicator-clicked="${(e) => this.goToSlide(e.detail.index)}">
</instagram-indicator>
<div class="actions">
    <span class="icon" @click="${this.toggleLike}">
        ${this.liked ? "❤️" : "🤍"}
</span>
<span class="icon">💬</span>
<span class="icon">🔗</span>
</div>
<div class="caption-box">
  <slot name="caption"></slot>
</div>


</div>`;
  }


}


globalThis.customElements.define(InstagramProject.tag, InstagramProject);