import { denormalize } from 'linkset-menu';
import { css, html, LitElement } from 'lit-element';
import 'regenerator-runtime/runtime';
import { eventDataLayerPush } from './mixins/shadow-events-datalayer';

export class MainMenu extends LitElement {

  static get properties() {
    return {
        thisUrl: { type: String},
        data: {attribute: false},
        /**
         * Base URL of menu endpoint
         */
        baseUrl: { type: String },

        /**
         * Machine name of menu
         */
        menuId: { type: String },

        /**
         * Branding heading for the menu
         */
        branding: { type: String },

        /**
         * An array of objects containing data for the menu tree
         */
        tree: { type: Array },

        /**
         * Loading state
         */
        isLoading: {
        type: Boolean,
        attribute: false,
        },

        /**
         * Loading message
         */
        loadingMessage: { type: String },
    };
  }
  static menuLevelTemplate(levels) {

    return html`
      ${levels}

    `;
  }
  fetchData(baseURL, menuID) {
    this.isLoading = true;
    const url = `${baseURL}/system/menu/${menuID}/linkset`;

    fetch(url, {})
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        this.isLoading = false;
        throw new Error(
          `Unable to fetch ${url}. ${response.status} ${response.statusText}`
        );
      })
      .then(json => {
        try {
          const denormalized = denormalize(json, menuID);
          this.tree = denormalized.tree;
        } catch (e) {
          throw new Error('Unable to denormalize menu.');
        }
        this.isLoading = false;
      });
  }

  menuParentTemplate(title, children) {
    return html`<li part="menu-item" class="nav-item menu-item--expanded dropdown nav-item nav-item-parent keep-open">
      <button
        @click="${MainMenu.openMenu}"
        role="button"
        aria-expanded="false"
        aria-haspopup="true"
        href="#"
        class="nav-item menu-item--expanded dropdown nav-item nav-item-parent keep-open nav-link dropdown-toggle"
      >
        ${title}
      </button>
      <div class="dropdown-menu">

      ${this.renderAzMenuLevel(children)}
        </div>
    </li>`;
  }

  static openMenu(e) {
    e.preventDefault();
    const { target } = e;
    let cur = document.querySelector('az-main-menu').shadowRoot.querySelector('.nav-item.show button');
    const isExpanded = target.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
      target.parentElement.classList.remove('show');
      target.setAttribute('aria-expanded', 'false');
      target.nextElementSibling.classList.remove('show');
    } else {
        if(cur){
            cur.parentElement.classList.remove('show');
            cur.setAttribute('aria-expanded', 'false');
            cur.nextElementSibling.classList.remove('show');
        }
        target.parentElement.classList.add('show');
        target.setAttribute('aria-expanded', 'true');
        target.nextElementSibling.classList.add('show');
    }
  }

  renderAzMenuLevel(level) {
    const levels = level.map(item => this.renderAzMenuItem(item));

    return MainMenu.menuLevelTemplate(levels);
  }
  static azMenuTopLevelLinkTemplate(title, href) {
		href = href.charAt(0) === '/' ? this.thisUrl + href : href;

    return html`<li part="menu-item" class="nav-item"><a href=${href} class="nav-link">${title}</a></li>`;
  }

  static menuLinkTemplate(title, href) {
		href = href.charAt(0) === '/' ? this.thisUrl + href : href;
    return html`<a part="menu-item" class="dropdown-item" href=${href} @click="${(e) => {eventDataLayerPush(e, 'az-main-menu')}}">${title}</a>`;
  }

  static menuItemTemplate(title) {
    return html`<li part="menu-item">${title}</li>`;
  }

  renderAzMenuItem(item) {
    const title = item?.link?.attributes?.title;
    let href = item?.link?.href;
    const children = item?.children;
    let hierarchy = item?.link?.attributes?.['drupal-menu-hierarchy'];
        hierarchy = hierarchy[0].match(/\./g).length;

		href = item?.link?.href.charAt(0) === '/' ? this.thisUrl + item?.link?.href : item?.link?.href;

    if (children && children.length) {
      return this.menuParentTemplate(title, children);
    }
    if (children && children.length === 0 && href && hierarchy && hierarchy === 1) {
        return MainMenu.azMenuTopLevelLinkTemplate(title, href);
    }
    if (href) {
      return MainMenu.menuLinkTemplate(title, href);
    }
    return MainMenu.menuItemTemplate(title);
  }


  constructor() {
    super();

    this.tree = [];
    this.isLoading = false;
    this.loadingMessage = 'Loading...';
  }

  connectedCallback() {
    super.connectedCallback();

    if (this.baseUrl && this.menuId) {
      this.fetchData(this.baseUrl, this.menuId);
    }
  }

  static get styles() {
    return css`
   :root {
       --blue: #0c234b;
       --red: #ab0520;
       --white: #fff;
       --bloom: #ef4056;
       --chili: #8b0015;
       --sky: #81d3eb;
       --oasis: #378dbd;
       --azurite: #1e5288;
       --midnight: #001c48;
       --cool-gray: #e2e9eb;
       --warm-gray: #f4ede5;
       --leaf: #70b865;
       --river: #007d84;
       --silver: #9eabae;
       --mesa: #a95c42;
       --ash: #403635;
       --sage: #4a634e;
       --black: #000;
       --success: #70b865;
       --info: #81d3eb;
       --warning: #f19e1f;
       --danger: #a95c42;
       --light: #dee2e6;
       --dark: #343a40;
       --breakpoint-xs: 0;
       --breakpoint-sm: 576px;
       --breakpoint-md: 768px;
       --breakpoint-lg: 992px;
       --breakpoint-xl: 1200px;
       --font-family-sans-serif: proxima-nova, calibri, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
       --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
   }
   *,
   ::after,
   ::before {
       box-sizing: border-box;
   }
   header,
   main,
   nav,
   section {
       display: block;
   }
   :host {
       margin: 0;
       font-family: proxima-nova, calibri, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
       font-size: 1rem;
       font-weight: 400;
       line-height: 1.5;
       color: #212529;
       text-align: left;
       background-color: #fff;
   }
   div {
    font-size: 16px;
   }
   [tabindex="-1"]:focus:not(:focus-visible) {
       outline: 0 !important;
   }
   h1,
   h2,
   h3,
   h4,
   h5,
   h6 {
       margin-top: 0;
       margin-bottom: 0.5rem;
   }
   ul {
       margin-top: 0;
       margin-bottom: 1rem;
   }
   ul ul {
       margin-bottom: 0;
   }
   a {
       color: #8b0015;
       text-decoration: none;
       background-color: transparent;
   }
   a:hover {
       color: #3f0009;
       text-decoration: underline;
   }
   a:not([href]):not([class]) {
       color: inherit;
       text-decoration: none;
   }
   a:not([href]):not([class]):hover {
       color: inherit;
       text-decoration: none;
   }
   label {
       display: inline-block;
       margin-bottom: 0.5rem;
   }
   button {
       border-radius: 0;
   }
   button:focus:not(:focus-visible) {
       outline: 0;
   }
   button,
   input {
       margin: 0;
       font-family: inherit;
       font-size: inherit;
       line-height: inherit;
   }
   button,
   input {
       overflow: visible;
   }
   button {
       text-transform: none;
   }
   [role="button"] {
       cursor: pointer;
   }
   [type="button"],
   [type="reset"],
   [type="submit"],
   button {
       -webkit-appearance: button;
   }
   [type="button"]:not(:disabled),
   [type="reset"]:not(:disabled),
   [type="submit"]:not(:disabled),
   button:not(:disabled) {
       cursor: pointer;
   }
   [type="button"]::-moz-focus-inner,
   [type="reset"]::-moz-focus-inner,
   [type="submit"]::-moz-focus-inner,
   button::-moz-focus-inner {
       padding: 0;
       border-style: none;
   }
   input[type="checkbox"],
   input[type="radio"] {
       box-sizing: border-box;
       padding: 0;
   }
   [type="number"]::-webkit-inner-spin-button,
   [type="number"]::-webkit-outer-spin-button {
       height: auto;
   }
   [type="search"] {
       outline-offset: -2px;
       -webkit-appearance: none;
   }
   [type="search"]::-webkit-search-decoration {
       -webkit-appearance: none;
   }
   ::-webkit-file-upload-button {
       font: inherit;
       -webkit-appearance: button;
   }
   [hidden] {
       display: none !important;
   }
   .h1,
   .h2,
   .h3,
   .h4,
   .h5,
   .h6,
   .text-size-h1,
   .text-size-h2,
   .text-size-h3,
   .text-size-h4,
   .text-size-h5,
   .text-size-h6,
   h1,
   h2,
   h3,
   h4,
   h5,
   h6 {
       margin-bottom: 0.5rem;
       font-weight: 500;
       line-height: 1.2;
   }
   .h1,
   .text-size-h1,
   h1 {
       font-size: 2.5rem;
   }
   .h2,
   .text-size-h2,
   h2 {
       font-size: 2rem;
   }
   .h3,
   .text-size-h3,
   h3 {
       font-size: 1.75rem;
   }
   .h4,
   .text-size-h4,
   h4 {
       font-size: 1.5rem;
   }
   .h5,
   .text-size-h5,
   h5 {
       font-size: 1.25rem;
   }
   .h6,
   .text-size-h6,
   h6 {
       font-size: 1rem;
   }
   .display-1 {
       font-size: 6rem;
       font-weight: 300;
       line-height: 1.2;
   }
   .display-2 {
       font-size: 5.5rem;
       font-weight: 300;
       line-height: 1.2;
   }
   .display-3 {
       font-size: 4.5rem;
       font-weight: 300;
       line-height: 1.2;
   }
   .display-4 {
       font-size: 3.5rem;
       font-weight: 300;
       line-height: 1.2;
   }
   .container,
   .container-lg {
       width: 100%;
       padding-right: 15px;
       padding-left: 15px;
       margin-right: auto;
       margin-left: auto;
   }
   @media (min-width: 576px) {
       .container {
           max-width: 540px;
       }
   }
   @media (min-width: 768px) {
       .container {
           max-width: 720px;
       }
   }
   @media (min-width: 992px) {
       .container,
       .container-lg {
           max-width: 960px;
					 border-top: 1px solid var(--cool-gray);
       }
   }
   @media (min-width: 1200px) {
       .container,
       .container-lg {
           max-width: 1140px;
       }
   }
   .row {
       display: -ms-flexbox;
       display: flex;
       -ms-flex-wrap: wrap;
       flex-wrap: wrap;
       margin-right: -15px;
       margin-left: -15px;
   }
   .form-control {
       display: block;
       width: 100%;
       height: calc(1.5em + 0.75rem + 2px);
       padding: 0.375rem 0.75rem;
       font-size: 1rem;
       font-weight: 400;
       line-height: 1.5;
       color: #495057;
       background-color: #fff;
       background-clip: padding-box;
       border: 1px solid #ced4da;
       border-radius: 0;
       transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
   }
   @media (prefers-reduced-motion: reduce) {
       .form-control {
           transition: none;
       }
   }
   .dropdown-item:active {
        background-color: rgba(255,255,255,.15);
        color: white;
    }
    .nav-item-parent button[aria-expanded="true"] {
        background-color: rgba(255,255,255,.15);

    }
    .navbar-offcanvas .nav-item .nav-link:focus {
        background-color: rgba(255,255,255,.15);

    }

   .form-control::-ms-expand {
       background-color: transparent;
       border: 0;
   }
   .form-control:-moz-focusring {
       color: transparent;
       text-shadow: 0 0 0 #495057;
   }
   .form-control:focus {
       color: #495057;
       background-color: #fff;
       border-color: #1e56b9;
       outline: 0;
       box-shadow: 0 0 0 0.2rem rgba(12, 35, 75, 0.25);
   }
   .form-control::-webkit-input-placeholder {
       color: #6c757d;
       opacity: 1;
   }
   .form-control::-moz-placeholder {
       color: #6c757d;
       opacity: 1;
   }
   .form-control:-ms-input-placeholder {
       color: #6c757d;
       opacity: 1;
   }
   .form-control::-ms-input-placeholder {
       color: #6c757d;
       opacity: 1;
   }
   .form-control::placeholder {
       color: #6c757d;
       opacity: 1;
   }
   .form-control:disabled,
   .form-control[readonly] {
       background-color: #e9ecef;
       opacity: 1;
   }
   input[type="date"].form-control,
   input[type="datetime-local"].form-control,
   input[type="month"].form-control,
   input[type="time"].form-control {
       -webkit-appearance: none;
       -moz-appearance: none;
       appearance: none;
   }
   .form-control-lg {
       height: calc(1.5em + 1rem + 2px);
       padding: 0.5rem 1rem;
       font-size: 1.25rem;
       line-height: 1.5;
   }
   .form-group {
       margin-bottom: 1rem;
   }
   .form-text {
       display: block;
       margin-top: 0.25rem;
   }
   .form-row {
       display: -ms-flexbox;
       display: flex;
       -ms-flex-wrap: wrap;
       flex-wrap: wrap;
       margin-right: -5px;
       margin-left: -5px;
   }
   .form-row > [class*="col-"] {
       padding-right: 5px;
       padding-left: 5px;
   }
   .btn {
       display: inline-block;
       font-weight: 500;
       color: #212529;
       text-align: center;
       vertical-align: middle;
       -webkit-user-select: none;
       -moz-user-select: none;
       -ms-user-select: none;
       user-select: none;
       background-color: transparent;
       border: 2px solid transparent;
       padding: 0.375rem 0.75rem;
       font-size: 1rem;
       line-height: 1.5;
       border-radius: 0;
       transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
   }
   @media (prefers-reduced-motion: reduce) {
       .btn {
           transition: none;
       }
   }
   .btn:hover {
       color: #212529;
       text-decoration: none;
   }
   .btn:focus {
       outline: 0;
       box-shadow: 0 0 0 0.2rem rgba(12, 35, 75, 0.25);
   }
   .btn:disabled {
       opacity: 0.65;
   }
   .btn:not(:disabled):not(.disabled) {
       cursor: pointer;
   }
   .btn-link {
       font-weight: 400;
       color: #8b0015;
       text-decoration: none;
   }
   .btn-link:hover {
       color: #3f0009;
       text-decoration: underline;
   }
   .btn-link:focus {
       text-decoration: underline;
   }
   .btn-link:disabled {
       color: #6c757d;
       pointer-events: none;
   }
   .btn-group-lg > .btn,
   .btn-lg {
       padding: 0.5rem 1rem;
       font-size: 1.25rem;
       line-height: 1.5;
       border-radius: 0;
   }
   .btn-block,
   .btn-group-block,
   .btn-group-block .btn {
       display: block;
       width: 100%;
   }
   .btn-block + .btn-block,
   .btn-block + .btn-group-block,
   .btn-group-block .btn + .btn,
   .btn-group-block .btn + .btn-block,
   .btn-group-block .btn + .btn-group-block,
   .btn-group-block .btn-block + .btn,
   .btn-group-block .btn-group-block + .btn,
   .btn-group-block + .btn-block,
   .btn-group-block + .btn-group-block {
       margin-top: 0.5rem;
   }
   .btn-group-block input.btn[type="button"],
   .btn-group-block input.btn[type="reset"],
   .btn-group-block input.btn[type="submit"],
   input.btn-group-block[type="button"],
   input.btn-group-block[type="reset"],
   input.btn-group-block[type="submit"],
   input[type="button"].btn-block,
   input[type="reset"].btn-block,
   input[type="submit"].btn-block {
       width: 100%;
   }
   .dropdown {
       position: relative;
   }
   .dropdown-toggle {
       white-space: nowrap;
   }
   .dropdown-toggle::after {
       display: inline-block;
       margin-left: 0.255em;
       vertical-align: 0.255em;
       content: "";
       border-top: 0.3em solid;
       border-right: 0.3em solid transparent;
       border-bottom: 0;
       border-left: 0.3em solid transparent;
   }
   .dropdown-toggle:empty::after {
       margin-left: 0;
   }
   .dropdown-menu {
       position: absolute;
       top: 100%;
       left: 0;
       z-index: 1000;
       display: none;
       float: left;
       min-width: 10rem;
       padding: 0.5rem 0;
       margin: 0 0 0;
       font-size: 16px;
       color: #212529;
       text-align: left;
       list-style: none;
       background-color: #fff;
       background-clip: padding-box;
       border: 1px solid rgba(0, 0, 0, 0.15);
   }
   .dropdown-menu.show {
    display: block;
}
   .dropdown-menu[x-placement^="bottom"],
   .dropdown-menu[x-placement^="left"],
   .dropdown-menu[x-placement^="right"],
   .dropdown-menu[x-placement^="top"] {
       right: auto;
       bottom: auto;
   }
   .dropdown-item {
       display: block;
       width: 100%;
       padding: 0.25rem 1.5rem;
       clear: both;
       font-weight: 400;
       color: #fff;
       text-align: inherit;
       white-space: nowrap;
       background-color: transparent;
       border: 0;
   }
   .dropdown-item:focus,
   .dropdown-item:hover {
       color: #fff;
       text-decoration: none;
       background-color: #1e5288;
   }
   .dropdown-item:active {
       color: #0c234b;
       text-decoration: none;
       background-color: #fff;
   }
   .dropdown-item:disabled {
       color: #6c757d;
       pointer-events: none;
       background-color: transparent;
   }
   .dropdown-header {
       display: block;
       padding: 0.5rem 1.5rem;
       margin-bottom: 0;
       font-size: 0.875rem;
       color: #6c757d;
       white-space: nowrap;
   }
   .dropdown-item-text {
       display: block;
       padding: 0.25rem 1.5rem;
       color: #fff;
   }
   .btn-group {
       position: relative;
       display: -ms-inline-flexbox;
       display: inline-flex;
       vertical-align: middle;
   }
   .btn-group > .btn {
       position: relative;
       -ms-flex: 1 1 auto;
       flex: 1 1 auto;
   }
   .btn-group > .btn:hover {
       z-index: 1;
   }
   .btn-group > .btn:active,
   .btn-group > .btn:focus {
       z-index: 1;
   }
   .btn-group > .btn-group:not(:first-child),
   .btn-group > .btn:not(:first-child) {
       margin-left: -2px;
   }
   .btn-group-toggle > .btn,
   .btn-group-toggle > .btn-group > .btn {
       margin-bottom: 0;
   }
   .btn-group-toggle > .btn input[type="checkbox"],
   .btn-group-toggle > .btn input[type="radio"],
   .btn-group-toggle > .btn-group > .btn input[type="checkbox"],
   .btn-group-toggle > .btn-group > .btn input[type="radio"] {
       position: absolute;
       clip: rect(0, 0, 0, 0);
       pointer-events: none;
   }
   .input-group {
       position: relative;
       display: -ms-flexbox;
       display: flex;
       -ms-flex-wrap: wrap;
       flex-wrap: wrap;
       -ms-flex-align: stretch;
       align-items: stretch;
       width: 100%;
   }
   .input-group > .form-control {
       position: relative;
       -ms-flex: 1 1 auto;
       flex: 1 1 auto;
       width: 1%;
       min-width: 0;
       margin-bottom: 0;
   }
   .input-group > .form-control + .form-control {
       margin-left: -1px;
   }
   .input-group > .form-control:focus {
       z-index: 3;
   }
   .input-group-append,
   .input-group-btn {
       display: -ms-flexbox;
       display: flex;
   }
   .input-group-append .btn,
   .input-group-btn .btn {
       position: relative;
       z-index: 2;
   }
   .input-group-append .btn:focus,
   .input-group-btn .btn:focus {
       z-index: 3;
   }
   .input-group-append .btn + .btn,
   .input-group-append .btn + .input-group-text,
   .input-group-append .input-group-text + .btn,
   .input-group-append .input-group-text + .input-group-text,
   .input-group-btn .btn + .btn,
   .input-group-btn .btn + .input-group-text,
   .input-group-btn .input-group-text + .btn,
   .input-group-btn .input-group-text + .input-group-text {
       margin-left: -1px;
   }
   .input-group-btn {
       margin-right: -1px;
   }
   .input-group-append {
       margin-left: -1px;
   }
   .input-group-text {
       display: -ms-flexbox;
       display: flex;
       -ms-flex-align: center;
       align-items: center;
       padding: 0.375rem 0.75rem;
       margin-bottom: 0;
       font-size: 1rem;
       font-weight: 400;
       line-height: 1.5;
       color: #495057;
       text-align: center;
       white-space: nowrap;
       background-color: #e9ecef;
       border: 1px solid #ced4da;
   }
   .input-group-text input[type="checkbox"],
   .input-group-text input[type="radio"] {
       margin-top: 0;
   }
   .input-group-lg > .form-control:not(textarea) {
       height: calc(1.5em + 1rem + 2px);
   }
   .input-group-lg > .form-control,
   .input-group-lg > .input-group-append > .btn,
   .input-group-lg > .input-group-append > .input-group-text,
   .input-group-lg > .input-group-btn > .btn,
   .input-group-lg > .input-group-btn > .input-group-text {
       padding: 0.5rem 1rem;
       font-size: 1.25rem;
       line-height: 1.5;
   }
   .nav {
       display: -ms-flexbox;
       display: flex;
       -ms-flex-wrap: wrap;
       flex-wrap: wrap;
       padding-left: 0;
       margin-bottom: 0;
       list-style: none;
   }
   .nav-link {
       display: block;
       padding: 0.5rem 1rem;
   }
   .nav-link:focus,
   .nav-link:hover {
       text-decoration: none;
   }
   .navbar {
       position: relative;
       display: -ms-flexbox;
       display: flex;
       -ms-flex-wrap: wrap;
       flex-wrap: wrap;
       -ms-flex-align: center;
       align-items: center;
       -ms-flex-pack: justify;
       justify-content: space-between;
       padding: 0 1rem;
   }
   .navbar .container,
   .navbar .container-lg {
       display: -ms-flexbox;
       display: flex;
       -ms-flex-wrap: wrap;
       flex-wrap: wrap;
       -ms-flex-align: center;
       align-items: center;
       -ms-flex-pack: justify;
       justify-content: space-between;
   }
   .navbar-nav {
       display: -ms-flexbox;
       display: flex;
       -ms-flex-direction: column;
       flex-direction: column;
       padding-left: 0;
       margin-bottom: 0;
       list-style: none;
   }
   .navbar-nav .nav-link {
       padding-right: 0;
       padding-left: 0;
   }
   .navbar-nav .dropdown-menu {
       position: static;
       float: none;
   }
   .navbar-text {
       display: inline-block;
       padding-top: 0.5rem;
       padding-bottom: 0.5rem;
   }
   .label {
       display: inline-block;
       padding: 0.25em 0.4em;
       font-size: 75%;
       font-weight: 700;
       line-height: 1;
       text-align: center;
       white-space: nowrap;
       vertical-align: baseline;
       transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
   }
   @media (prefers-reduced-motion: reduce) {
       .label {
           transition: none;
       }
   }
   a.label:focus,
   a.label:hover {
       text-decoration: none;
   }
   .label:empty {
       display: none;
   }
   .btn .label {
       position: relative;
       top: -1px;
   }
   @-webkit-keyframes progress-bar-stripes {
       from {
           background-position: 1rem 0;
       }
       to {
           background-position: 0 0;
       }
   }
   @keyframes progress-bar-stripes {
       from {
           background-position: 1rem 0;
       }
       to {
           background-position: 0 0;
       }
   }
   .close {
       float: right;
       font-size: 1.5rem;
       font-weight: 700;
       line-height: 1;
       color: #000;
       text-shadow: 0 1px 0 #fff;
       opacity: 0.5;
   }
   .close:hover {
       color: #000;
       text-decoration: none;
   }
   .close:not(:disabled):not(.disabled):focus,
   .close:not(:disabled):not(.disabled):hover {
       opacity: 0.75;
   }
   button.close {
       padding: 0;
       background-color: transparent;
       border: 0;
   }
   @-webkit-keyframes spinner-border {
       to {
           -webkit-transform: rotate(360deg);
           transform: rotate(360deg);
       }
   }
   @keyframes spinner-border {
       to {
           -webkit-transform: rotate(360deg);
           transform: rotate(360deg);
       }
   }
   @-webkit-keyframes spinner-grow {
       0% {
           -webkit-transform: scale(0);
           transform: scale(0);
       }
       50% {
           opacity: 1;
           -webkit-transform: none;
           transform: none;
       }
   }
   @keyframes spinner-grow {
       0% {
           -webkit-transform: scale(0);
           transform: scale(0);
       }
       50% {
           opacity: 1;
           -webkit-transform: none;
           transform: none;
       }
   }
   .bg-white {
       background-color: #fff !important;
   }
   .clearfix::after {
       display: block;
       clear: both;
       content: "";
   }
   .d-block {
       display: block !important;
   }
   .d-flex {
       display: -ms-flexbox !important;
       display: flex !important;
   }
   @media (min-width: 992px) {
       .d-lg-block {
           display: block !important;
       }
       .d-lg-flex {
           display: -ms-flexbox !important;
           display: flex !important;
       }
   }
   .flex-row {
       -ms-flex-direction: row !important;
       flex-direction: row !important;
   }
   .justify-content-center {
       -ms-flex-pack: center !important;
       justify-content: center !important;
   }
   .justify-content-between {
       -ms-flex-pack: justify !important;
       justify-content: space-between !important;
   }
   .align-items-center {
       -ms-flex-align: center !important;
       align-items: center !important;
   }
   .align-content-center {
       -ms-flex-line-pack: center !important;
       align-content: center !important;
   }
   .align-content-between {
       -ms-flex-line-pack: justify !important;
       align-content: space-between !important;
   }
   @media (min-width: 992px) {
       .flex-lg-row {
           -ms-flex-direction: row !important;
           flex-direction: row !important;
       }
       .justify-content-lg-center {
           -ms-flex-pack: center !important;
           justify-content: center !important;
       }
       .justify-content-lg-between {
           -ms-flex-pack: justify !important;
           justify-content: space-between !important;
       }
       .align-items-lg-center {
           -ms-flex-align: center !important;
           align-items: center !important;
       }
       .align-content-lg-center {
           -ms-flex-line-pack: center !important;
           align-content: center !important;
       }
       .align-content-lg-between {
           -ms-flex-line-pack: justify !important;
           align-content: space-between !important;
       }
   }
   @supports ((position: -webkit-sticky) or (position: sticky)) {
       .sticky-top {
           position: -webkit-sticky;
           position: sticky;
           top: 0;
           z-index: 1020;
       }
   }
   .sr-only {
       position: absolute;
       width: 1px;
       height: 1px;
       padding: 0;
       margin: -1px;
       overflow: hidden;
       clip: rect(0, 0, 0, 0);
       white-space: nowrap;
       border: 0;
   }
   .h-25 {
       height: 25% !important;
   }
   .h-50 {
       height: 50% !important;
   }
   .h-75 {
       height: 75% !important;
   }
   .h-100 {
       height: 100% !important;
   }
   .text-size-h1,
   .text-size-h2,
   .text-size-h3,
   .text-size-h4,
   .text-size-h5,
   .text-size-h6 {
       margin-bottom: 0 !important;
   }
   .text-justify {
       text-align: justify !important;
   }
   .text-center {
       text-align: center !important;
   }
   @media (min-width: 992px) {
       .text-lg-center {
           text-align: center !important;
       }
   }
   .text-white {
       color: #fff !important;
   }
   .text-body {
       color: #212529 !important;
   }
   .text-white-50 {
       color: rgba(255, 255, 255, 0.5) !important;
   }
   @media print {
       *,
       ::after,
       ::before {
           text-shadow: none !important;
           box-shadow: none !important;
       }
       a:not(.btn) {
           text-decoration: underline;
       }
       h2,
       h3 {
           orphans: 3;
           widows: 3;
       }
       h2,
       h3 {
           page-break-after: avoid;
       }
       @page {
           size: a3;
       }
       body {
           min-width: 992px !important;
       }
       .container {
           min-width: 992px !important;
       }
       .navbar {
           display: none;
       }
       .label {
           border: 1px solid #000;
       }
   }
   .bg-white {
       color: #000;
       background-color: #fff;
   }
   .bg-white .h1,
   .bg-white .h2,
   .bg-white .h3,
   .bg-white .h4,
   .bg-white .h5,
   .bg-white .h6,
   .bg-white .text-size-h1,
   .bg-white .text-size-h2,
   .bg-white .text-size-h3,
   .bg-white .text-size-h4,
   .bg-white .text-size-h5,
   .bg-white .text-size-h6,
   .bg-white h1,
   .bg-white h2,
   .bg-white h3,
   .bg-white h4,
   .bg-white h5,
   .bg-white h6 {
       color: inherit;
   }
   .bg-chili {
       color: #fff;
       background-color: #8b0015;
   }
   .bg-chili .h1,
   .bg-chili .h2,
   .bg-chili .h3,
   .bg-chili .h4,
   .bg-chili .h5,
   .bg-chili .h6,
   .bg-chili .text-size-h1,
   .bg-chili .text-size-h2,
   .bg-chili .text-size-h3,
   .bg-chili .text-size-h4,
   .bg-chili .text-size-h5,
   .bg-chili .text-size-h6,
   .bg-chili h1,
   .bg-chili h2,
   .bg-chili h3,
   .bg-chili h4,
   .bg-chili h5,
   .bg-chili h6 {
       color: inherit;
   }
   .text-white {
       color: #fff !important;
   }
   .text-chili {
       color: #8b0015 !important;
   }
   .h1,
   .h2,
   .text-size-h1,
   .text-size-h2,
   h1,
   h2 {
       font-family: proxima-nova, calibri, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
       color: #49595e;
       font-display: block;
   }
   .arizona-header {
       position: relative;
   }
   .btn-redbar .icon-text {
       display: block;
       margin: -5px;
       font-size: 10px;
       line-height: 10px;
   }
   .btn-redbar .icon {
       margin: -5px;
       font-size: 24px;
       line-height: 24px;
   }
   .btn.btn-redbar {
       width: 60px;
       height: 50px;
       padding: 0;
       color: #fff;
       background-color: #ab0520;
       border: 2px solid #ab0520;
   }
   .btn.btn-redbar:focus {
       background-color: #8b0015;
       border: 2px solid #8b0015;
       outline: 0;
       box-shadow: none;
   }
   body {
       color: #403635;
   }
   .h1,
   .h2,
   .text-size-h1,
   .text-size-h2,
   h1,
   h2 {
       margin: 1.042em 0 0.667em;
   }
   .h3,
   .h4,
   .h5,
   .h6,
   .text-size-h3,
   .text-size-h4,
   .text-size-h5,
   .text-size-h6,
   h3,
   h4,
   h5,
   h6 {
       margin: 1.042em 0 0.667em;
       font-family: proxima-nova, calibri, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
       color: #49595e;
       font-display: block;
   }
   a {
       font-weight: 700;
       text-decoration: underline;
   }
   .btn {
       font-weight: 500;
       text-transform: uppercase;
       text-decoration: none;
       letter-spacing: 0.04em;
       white-space: normal;
       border-width: 2px;
   }
   .btn-link {
       color: #8b0015;
   }
   .btn-group-block .dropdown-menu {
       min-width: 100%;
   }
   .dropdown-menu {
       color: #e2e9eb;
       background-color: #0c234b;
   }
   .dropdown-item {
       color: #fff;
       text-decoration: none;
   }
   .dropdown-item:focus,
   .dropdown-item:hover {
       color: #fff;
       background-color: #1e5288;
   }
   .dropdown-item:active {
       color: #0c234b;
       background-color: #fff;
   }
   .dropdown-item:disabled {
       color: #6c757d;
   }
   .nav-link {
       color: #1e5288;
       text-decoration: none;
   }
   .nav-link:focus,
   .nav-link:hover {
       color: #001c48;
   }
   .nav-link:active {
       color: #001c48;
   }
   .nav-link:active {
       background-color: #e9ecef;
   }
   .navbar {
       padding: 0 1rem;
   }
   .navbar-nav .nav-link {
       font-weight: 600;
       background-color: inherit;
       border: none;
   }
   .navbar-nav .nav-link {
       padding: 1.25rem 1.5rem;
   }
   .offcanvas-toggle {
       display: none;
   }
   @-webkit-keyframes fadein {
       from {
           opacity: 0;
       }
       to {
           opacity: 0.75;
       }
   }
   @keyframes fadein {
       from {
           opacity: 0;
       }
       to {
           opacity: 0.75;
       }
   }
   .navbar-offcanvas {
       position: fixed;
       top: 0;
       right: 0;
       z-index: 2000;
       display: -ms-flexbox;
       display: flex;
       -ms-flex-direction: column;
       flex-direction: column;
       width: 325px;
       max-width: 90%;
       height: 100vh;
       max-height: 100vh;
       overflow-y: hidden;
       background-color: #0c234b;
       border: none;
       transition: -webkit-transform 0.3s ease-in-out;
       transition: transform 0.3s ease-in-out;
       transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;
       -webkit-transform: translateX(100vw);
       transform: translateX(100vw);
   }
   :host([state="open"]) .navbar-offcanvas {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        overflow-y: scroll;
    }
   .navbar-offcanvas.open {
       -webkit-transform: translateX(0);
       transform: translateX(0);
   }
   .navbar-offcanvas .navbar-offcanvas-header {
       display: block;
       width: 100%;
   }
   .navbar-offcanvas .navbar-offcanvas-home {
       font-weight: 400;
       color: #fff;
       text-decoration: none;
   }
   .navbar-offcanvas .navbar-offcanvas-search .form-control {
       height: auto;
       margin: 0;
       border: none;
   }
   .navbar-offcanvas .navbar-offcanvas-search .input-group input.form-control {
       height: 60px;
       padding-left: 20px;
   }
   .navbar-offcanvas .navbar-offcanvas-search .input-group .input-group-append > button.btn-search {
       height: 60px;
       width: 60px;
       font-size: 24px;
       border: 0;
       padding: 0;
   }
   .navbar-offcanvas .navbar-nav {
       width: 100%;
       overflow-y: auto;
   }
   .navbar-offcanvas .navbar-nav .nav-link {
       font-weight: 600;
   }
   .navbar-offcanvas ul.navbar-nav li.nav-item a.nav-link,
   .navbar-offcanvas .nav-item-parent .nav-link {

   }
   .navbar-offcanvas .nav-item .nav-link {
       padding: 12px 20px;
       color: #fff;
       text-align: left;
       width: 100%;
       min-height: 48px;
   }
   .navbar-offcanvas .dropdown-menu {
       padding: 0;
       margin: 0;
       background-color: rgba(255, 255, 255, 0.15);
       border: none;
   }
   .navbar-offcanvas .dropdown-menu .dropdown-item {
       padding: 14px 20px 14px 35px;
       white-space: normal;
   }
   .navbar-offcanvas .dropdown-toggle {
       display: -ms-flexbox;
       display: flex;
       -ms-flex-align: center;
       align-items: center;
       -ms-flex-pack: justify;
       justify-content: space-between;
       white-space: normal;
   }
   .navbar-offcanvas .dropdown-toggle::after {
        font-size: 1rem;
        vertical-align: unset;
        content: " ";
        border: none;
        margin-left: 20px;
        background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGVuYWJsZS1iYWNrZ3JvdW5kPSduZXcgMCAwIDI0IDI0JyBoZWlnaHQ9JzI0cHgnIHZpZXdCb3g9JzAgMCAyNCAyNCcgd2lkdGg9JzI0cHgnIGZpbGw9JyNGRkZGRkYnPjxnPjxyZWN0IGZpbGw9J25vbmUnIGhlaWdodD0nMjQnIHdpZHRoPScyNCcvPjwvZz48Zz48Zz48cGF0aCBkPSdNMTksMTNoLTZ2NmgtMnYtNkg1di0yaDZWNWgydjZoNlYxM3onLz48L2c+PC9nPjwvc3ZnPg==");
        height: 18px;
        width: 16px;
        background-size: cover;
        background-position: center;
    }
    .navbar-offcanvas .nav-item.show .dropdown-toggle::after {
        background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjRweCIgZmlsbD0iI0ZGRkZGRiI+PHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE5IDEzSDV2LTJoMTR2MnoiLz48L3N2Zz4=');
    }
   .container .navbar-offcanvas.open {
       -webkit-transform: translateX(0);
       transform: translateX(0);
   }
   .btn-menu {
       width: 60px;
       height: 50px;
       border: 0;
       padding: 0;
       font-size: 10px;
       background-color: #ab0520;
   }
   .btn-menu:hover {
       background-color: #8b0015;
   }
   .btn-menu span.material-icons-sharp {
       display: block;
       font-size: 24px;
       line-height: 24px;
   }
   .btn-menu-offcanvas-nav {
       width: 60px;
       height: 50px;
       border: 0;
       padding: 0;
       font-size: 10px;
   }
   .btn-menu-offcanvas-nav span.material-icons-sharp {
       display: block;
       font-size: 24px;
       line-height: 24px;
   }
   @media (min-width: 992px) {
       .navbar-offcanvas {
           position: relative;
           display: -ms-flexbox;
           display: flex;
           -ms-flex-wrap: wrap;
           flex-wrap: wrap;
           -ms-flex-align: center;
           align-items: center;
           -ms-flex-pack: justify;
           justify-content: space-between;
           max-width: 100%;
           padding: 0 1rem;
           padding: initial;
           overflow-y: initial;
           background-color: initial;
           border: initial;
           -webkit-transform: initial;
           transform: initial;
           top: initial;
           right: initial;
           z-index: initial;
           -ms-flex-direction: initial;
           flex-direction: initial;
           width: initial;
           height: initial;
           transition: initial;
           border-top: 1px solid #e9ecef
       }
       .navbar .navbar-offcanvas .container,
       .navbar .navbar-offcanvas .container-lg,
       .navbar-offcanvas .navbar .container,
       .navbar-offcanvas .navbar .container-lg {
           display: -ms-flexbox;
           display: flex;
           -ms-flex-wrap: wrap;
           flex-wrap: wrap;
           -ms-flex-align: center;
           align-items: center;
           -ms-flex-pack: justify;
           justify-content: space-between;
       }
       .navbar-offcanvas.open {
           -webkit-transform: initial;
           transform: initial;
       }
       .navbar-offcanvas .navbar-offcanvas-header {
           display: none;
       }
       .navbar-offcanvas .navbar-nav {
           display: -ms-flexbox;
           display: flex;
           -ms-flex-direction: column;
           flex-direction: column;
           padding-left: 0;
           margin-bottom: 0;
           list-style: none;
           width: initial;
           overflow-y: initial;
       }
       .navbar-offcanvas .navbar-nav .nav-link {
           display: block;
           padding: 0.5rem 1rem;
           font-weight: 600;
       }
       .navbar-offcanvas .navbar-nav .nav-link:focus,
       .navbar-offcanvas .navbar-nav .nav-link:hover {
           text-decoration: none;
       }
       .navbar-offcanvas .nav-item .nav-link {
           padding: 20px 14px 21px;
           color: #1e5288;
       }
       .navbar-offcanvas .nav-item .nav-link.show,
       .navbar-offcanvas .nav-item .nav-link:hover {
           color: #001c48;
           background-color: #f8f9fa;
       }
       .navbar-offcanvas .nav-item:hover {
           color: #001c48;
           background-color: #f8f9fa;
       }
       .navbar-offcanvas .nav-item:active .nav-link {
           color: #001c48;
           background-color: #e9ecef;
       }
       .navbar-offcanvas .dropdown-menu {
           padding: 0.5rem 0;
           margin: 0 0 0;
           background-color: #0c234b;
           border: none;
           border: 1px solid rgba(0, 0, 0, 0.15);
           position: absolute;
       }
       .navbar-offcanvas .dropdown-menu .dropdown-item {
           padding: 4px 22px;
           white-space: nowrap;
       }
       .navbar-offcanvas .dropdown-toggle {
           display: -ms-flexbox;
           display: flex;
           -ms-flex-align: center;
           align-items: center;
           -ms-flex-pack: justify;
           justify-content: space-between;
       }
       .navbar-offcanvas .dropdown-toggle::after {
           font-size: inherit;
           vertical-align: 0.255em;
           content: "";
           border-top: 0.3em solid;
           border-right: 0.3em solid transparent;
           border-bottom: 0;
           border-left: 0.3em solid transparent;
           margin-left: 0.225em;
           height: auto;
           width: auto;
       }
   }
       `;
  }

  async firstUpdated() {
    // Give the browser a chance to paint
    await new Promise((r) => setTimeout(r, 0));
    this.addEventListener('open-az-offcanvas-menu', this.handleOpen);

    await new Promise((r) => setTimeout(r, 0));
    this.addEventListener('close-az-offcanvas-menu', this.handleClose);
  }
  handleClose = (event) => {
      this.setAttribute('state', 'closed');
      document.body.style.overflowY = "initial";
  }
  handleOpen = (event) => {
    this.setAttribute('state', 'open');
    document.body.style.overflowY = "hidden";
  }


  render() {
    return html`
            <div class="container">
                <nav class="navbar-offcanvas offcanvas-toggle" id="navbarOffcanvasDemo">
                    <div class="navbar-offcanvas-header">
                        <div class="bg-chili d-flex justify-content-between align-items-center">
                            <az-button theme="primary" redbar link="https://www.arizona.edu" aria-expanded="false" aria-haspopup="true" target="az-main-menu" aria-controls="navbarOffcanvasDemo">
                                <svg class="icon" title="home" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z"/></svg>
                                <span class="icon-text"> home </span>
                            </az-button>
                            <az-button theme="primary" redbar role="button" aria-expanded="false" aria-haspopup="true" target="az-main-menu" aria-controls="navbarOffcanvasDemo" event="close-az-offcanvas-menu">
                                <svg class="icon" title="close" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
                                <span class="icon-text"> close </span>
                            </az-button>
                        </div>
                        <section class="region region-navigation-offcanvas">
                            <div class="search-block-form bg-white navbar-offcanvas-search" data-drupal-selector="search-block-form-2" id="block-az-barrio-offcanvas-searchform" role="search">
                                <form action="${this.thisUrl}/search/google" method="GET" id="search-block-form" accept-charset="UTF-8" class="search-form search-block-form">
                                    <div class="input-group">
                                        <label for="edit-keys--2" class="sr-only">Search</label>
                                        <input title="Enter the terms you wish to search for." data-drupal-selector="edit-keys" type="search" id="edit-keys--2" name="keys" value="" size="15" maxlength="128" class="form-search form-control" placeholder="Search this site" aria-label="Search this site">
                                        <div data-drupal-selector="edit-actions" class="form-actions js-form-wrapper input-group-append" id="edit-actions--2">
                                            <button data-drupal-selector="edit-submit" type="submit" id="edit-submit--2" value="Search" class="button js-form-submit form-submit btn">
                                            <svg id="search-icon-menu" title="search" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#212529"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </section>
                    </div>
                    <section class="region region-navigation">
                        <nav role="navigation" aria-labelledby="block-az-barrio-main-menu-menu" id="block-az-barrio-main-menu" class="block block-menu navigation menu--main">
                            <h2 class="sr-only" id="block-az-barrio-main-menu-menu" slot name="brand">${this.branding}</h2>
                            <ul block="block-az-barrio-main-menu" class="clearfix navbar-nav flex-lg-row">
                                ${this.isLoading
                                    ? html`<li part="menu-item" class="nav-item menu-item--expanded dropdown nav-item nav-item-parent keep-open">
                                    <button role="button" aria-expanded="false" aria-haspopup="true" href="#" class="nav-item menu-item--expanded dropdown nav-item nav-item-parent keep-open nav-link dropdown-toggle">
                                        <slot name="loading">${this.loadingMessage}</slot>
                                    </button>
                                  </li>`
                                    : this.renderAzMenuLevel(this.tree)}
                            </ul>
                        </nav>
                    </section>
                </nav>
            </div>
      `;
  }

}
customElements.get('az-main-menu') || customElements.define('az-main-menu', MainMenu);
