import { html, css, LitElement } from 'lit-element';
// import './Button';


/**
 * TODO: Create a class for your element that extends the LitElement
 * base class.
 */
 export class AzRedbar extends LitElement {
	static get styles() {
		return css`
					 * {
							 box-sizing: border-box;
					 }
					 header {
							 display: block;
					 }
					 .arizona-header {
							 position: relative;
							 color: #fff;
							 background-color: #ab0520;
					 }
					 .container {
							 width: 100%;
							 padding-right: 15px;
							 padding-left: 15px;
							 margin-right: auto;
							 margin-left: auto;
					 }
					 .row {
							 display: -ms-flexbox;
							 display: flex;
							 -ms-flex-wrap: wrap;
							 flex-wrap: wrap;
							 align-items: center;
							 justify-content: flex-end;
							 margin-right: -15px;
							 margin-left: -15px;
							 padding-top: 6.59px;
							 padding-bottom: 8.59px;
					 }
					 .row section{
							 align-items: center;
					 }
					 .redbar-buttons {
							 position: absolute;
							 top: 0;
							 right: 0;
							 height: 50px;
							 max-height: 50px;
					 }
					 .arizona-header {
							 height: 50px;
					 }

					 @media (min-width: 576px) {
							 .container, .container-sm {
									 max-width: 540px;
							 }
					 }
					 @media (min-width: 768px) {
							 .container, .container-md, .container-sm {
									 max-width: 720px;
							 }
					 }
					 @media (min-width: 992px) {
							 .container, .container-lg, .container-md, .container-sm {
									 max-width: 960px;
							 }
					 }
					 @media (min-width: 1200px){
							 .container, .container-lg, .container-md, .container-sm, .container-xl {
									 max-width: 1140px;
							 }
					 }
					 .arizona-line-logo {
							 width: 211px;
							 height: 16px;
							 margin: 17px 20px 17px 10px;
					 }
					 @media (min-width: 576px){
							 svg#search-icon {
									 width: 266.41px;
									 height: 19.8px;
									 margin: 15.11px 20px 15.1px 10px;
							 }
					 }
					 .ml-auto, .mx-auto {
							 margin-left: auto!important;
					 }
					 .d-none {
							 display: none!important;
					 }
					 @media (min-width: 992px) {
							 .d-lg-block {
									 -webkit-box-orient: horizontal!important;
									 -webkit-box-direction: normal!important;
									 -ms-flex-direction: row!important;
									 flex-direction: row!important;
									 display: flex !important;                }
							 .d-lg-none {
											 display: none !important;
							 }

					 }
					 @media (min-width: 1200px) {
							 .d-xl-block {
									 -webkit-box-orient: horizontal!important;
									 -webkit-box-direction: normal!important;
									 -ms-flex-direction: row!important;
									 flex-direction: row!important;
									 display: flex !important;                }
					 }
					 header #search-block-form {
							 /* padding: 5px 12px; */
							 flex-flow: row wrap;
					 }
					 #search-block-form {
							 display: flex;
							 border: 1px solid var(--bloom);
							 overflow: hidden;
							 position: relative;
					 }
					 .form-control:focus {
							 border-color: hsl(191deg 9% 65%);
							 outline: 0;
							 -webkit-box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(158 171 174 / 60%);
							 box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(158 171 174 / 60%);
					 }
					 .sr-only {
							 position: absolute;
							 width: 1px;
							 height: 1px;
							 padding: 0;
							 margin: -1px;
							 overflow: hidden;
							 clip: rect(0,0,0,0);
							 white-space: nowrap;
							 border: 0;
					 }
					 label {
							 display: inline-block;
							 margin-bottom: .5rem;
					 }
					 .input-group {
							 position: relative;
							 display: -ms-flexbox;
							 display: flex;
							 -ms-flex-wrap: wrap;
							 flex-wrap: wrap;
							 -ms-flex-align: center;
							 align-items: center;
							 width: 100%;
							 border: 1px solid var(--bloom);
							 right: 1px;
					 }
					 .input-group>.custom-file, .input-group>.custom-select, .input-group>.form-control, .input-group>.form-control-plaintext {
							 position: relative;
							 -ms-flex: 1 1 auto;
							 flex: 1 1 auto;
							 width: 1%;
							 min-width: 0;
							 margin-bottom: -1px;
							 border: none;
					 }
					 .search-block-form {
							 height: 37px;
							 overflow: hidden;
							 width: 228px;
					 }
					 .search-block-form input {
							 height: 34px;
							 font-size: 14px;
							 padding: 0px 37px 0px 9px;
							 width: 100%;
					 }
					 input[type="search"] {
							 box-sizing: border-box;
					 }
					 .form-control {
							 display: block;
							 width: 100%;
							 height: calc(1.5em + .75rem + 2px);
							 padding: .375rem .75rem;
							 font-size: 1rem;
							 font-weight: 400;
							 line-height: 1.5;
							 color: #495057;
							 background-color: #fff;
							 background-clip: padding-box;
							 /* border: 1px solid #ced4da; */
							 border-radius: 0;
							 transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
					 }
					 [type=search] {
							 outline-offset: -2px;
							 -webkit-appearance: none;
					 }
					 .search-block-form .input-group-append button#edit-submit {
							 background-color: hsl(0deg 0% 100%);
							 padding: 0px;
							 height: 33px;
							 width: 34px;
							 border: none;
							 position: absolute;
							 top: 0px;
							 right: -1px;
							 text-align: center;
					 }
					 .search-block-form .input-group-append button#edit-submit
					 .search-block-form .input-group-append button#edit-submit svg {
							 height: 23px;
							 width: 35px;
					 }
					 .search-block-form .input-group-append button#edit-submit:focus {
							 border-color: hsl(191deg 9% 65%);
							 outline: 0;
							 -webkit-box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(158 171 174 / 60%);
							 box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(158 171 174 / 60%);
					 }
					 .input-group-append button#edit-submit svg {
							 height: 30px;
							 width: 20px;
							 margin: 3px 0px;
					 }
					 button, input {
							 overflow: visible;
							 border: none;
					 }
					 button, input, optgroup, select, textarea {
							 margin: 0;
							 font-family: inherit;
							 font-size: inherit;
							 line-height: inherit;
					 }
					 .btn:not(:disabled):not(.disabled) {
							 cursor: pointer;
					 }
					 .bd-example>.btn, .bd-example>.btn-group {
							 margin-top: .25rem;
							 margin-bottom: .25rem;
					 }
					 .btn {
							 font-weight: 500;
							 text-transform: uppercase;
							 text-decoration: none;
							 letter-spacing: .04em;
							 white-space: normal;
							 border-width: 2px;
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
							 padding: .375rem .75rem;
							 font-size: 1rem;
							 line-height: 1.5;
							 border-radius: 0;
							 transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
					 }
					 [type=button], [type=reset], [type=submit], button {
							 -webkit-appearance: button;
					 }
					 button, select {
							 text-transform: none;
					 }
					 button, input {
							 overflow: visible;
					 }
					 button, input, optgroup, select, textarea {
							 margin: 0;
							 font-family: inherit;
							 font-size: inherit;
							 line-height: inherit;
					 }
					 button {
							 border-radius: 0;
					 }
					 .btn-hollow-default:hover, .btn-outline-red:hover {
							 background-color: #8B0015 !important;
							 border-color: #8B0015 !important;
							 color:white;
					 }
					 .btn:hover {
							 color: #212529;
							 text-decoration: none;
					 }
					 [type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled), button:not(:disabled) {
							 cursor: pointer;
					 }
					 .btn-hollow-default, .btn-outline-red {
							 color: white;
							 border-color: #ef4056 !important;
					 }

					 .input-group-append {
							 margin-left: -2px;
					 }
					 .input-group-append, .input-group-btn, .input-group-prepend {
							 display: -ms-flexbox;
							 display: flex;
					 }
					 .material-icons-sharp {
							 font-size: inherit;
							 line-height: inherit;
					 }
					 .resource-menu .dropdown-menu {
							 font-size: 0.8125em;
					 }
					 .dropdown-menu.dropdown-menu-right, .dropdown-menu.pull-right {
							 right: 0;
							 left: auto;
					 }
					 @media (min-width: 768px){
							 .dropdown-menu {
									 padding: 10px 0 0 0;
							 }
							 .dropdown-menu {
									 position: absolute;
									 top: 100%;
									 left: 0;
									 z-index: 1000;
									 display: none;
									 float: left;
									 min-width: 160px;
									 margin: 0;
									 list-style: none;
									 padding: 5px 0 5px 0;
									 font-size: 16px;
									 text-align: left;
									 background-color: rgba(0,28,72,.97);
									 border: 0;
									 border: 0;
									 border-radius: 0;
									 -webkit-box-shadow: 0 6px 12px rgb(0 0 0 / 18%);
									 box-shadow: 0 6px 12px rgb(0 0 0 / 18%);
									 background-clip: barder-box;
							 }
							 .dropdown-menu-right {
									 right: 0;
									 left: auto;
							 }
					 }
					 .dropdown-menu {
							 position: absolute;
							 top: calc(100% - 1px);
							 left: 5px;
							 z-index: 1000;
							 display: none;
							 padding: 5px 0px;
							 margin: 2px 0px 0px;
							 font-size: 16px;
							 text-align: left;
							 list-style: none;
							 background-color: rgba(0, 28, 72, 0.97);
							 background-clip: padding-box;
							 border: 1px solid rgba(0, 0, 0, 0.15);
							 border-radius: 0px;
							 box-shadow: rgb(0 0 0 / 18%) 0px 6px 12px;
							 min-width: 0px;
					 }
					 .dropdown-menu.show {
							 display: block;
					 }
					 .resources {
							 position: relative;
							 margin-left: 17px;
							 padding: 0 2px 0 6px;
					 }
					 .resources:hover button + .dropdown-menu, .resources button + .dropdown-menu:focus{
							 display: block;
					 }
					 .resources .caret{
							 position: absolute;
							 right: 12px;
							 top: 19px;
							 margin: 0;
							 display: inline-block;
							 width: 0;
							 height: 0;
							 vertical-align: middle;
							 border-top: 4px dashed;
							 border-right: 4px solid transparent;
							 border-left: 4px solid transparent;
					 }
					 .resources button {
							 font-size: 12px;
							 height: 37px;
							 padding: 3px 28px 3px 16px;
							 font-weight: bold;
					 }
					 .resources button:hover{
							 color: white;
					 }
					 .dropdown-item a {
							 display: block;
							 color: #fff;
							 text-decoration: none;
							 padding: 6px 20px;
							 width: 100%;
					 }
					 .dropdown-item {
							 display: block;
							 width: 100%;
							 clear: both;
							 font-weight: bold;
							 color: #fff;
							 text-align: inherit;
							 white-space: nowrap;
							 background-color: transparent;
							 border: 0;
							 font-size: 12px;
							 text-align: left;
					 }
					 .dropdown-item:hover {
							 background-color: var(--azurite);
					 }


					 `;
	}

	static get properties() {
		return {
			/* Base URL of menu endpoint */
			baseUrl: { type: String },
			/* Machine name of menu */
			menuId: { type: String },
			/* Branding heading for the menu */
			branding: { type: String },
			/* An array of objects containing data for the menu tree */
			tree: { type: Array },
			/* Loading state */
			isLoading: {
				type: Boolean,
				attribute: false,
			},
			/* Loading message */
			loadingMessage: { type: String },
		};
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

	static azMenuLevelTemplate(levels) {
		return html`
			${levels}
		`;
	}

	static openMenu(e) {
		e.preventDefault();
		const { target } = e;
		const isExpanded = target.getAttribute('aria-expanded') === 'true';

		if (isExpanded) {
			target.setAttribute('aria-expanded', 'false');
			target.nextElementSibling.classList.remove('show');
		} else {
			target.setAttribute('aria-expanded', 'true');
			target.nextElementSibling.classList.add('show');
		}
	}

	azMenuParentTemplate(title, children) {
		return html`
			<button
				@click="${AzRedbar.openMenu}"
				role="button"
				aria-expanded="false"
				aria-haspopup="true"
				href="#"
				class="resource-menu btn btn-outline-red"
			>
				${title}
			</button>
			<div class="dropdown-menu dropdown-menu pull-right">
				${this.renderAzMenuLevel(children)}
			</div>
		`;
	}
	
	static azMenuLinkTemplate(title, href) {
		return html`<div class="dropdown-item"><a href=${href}>${title}</a></div>`;
	}

	static azMenuItemTemplate(title) {
		return html`${title}`;
	}

	renderAzMenuLevel(level) {
		const levels = level.map(item => this.renderAzMenuItem(item));
		return AzRedbar.azMenuLevelTemplate(levels);
	}

	renderAzMenuItem(item) {
		const title = item?.link?.attributes?.title;
		const href = item?.link?.href;
		const children = item?.children;

		if (children.length) {
			return this.azMenuParentTemplate(title, children);
		}
		if (href) {
			return AzRedbar.azMenuLinkTemplate(title, href);
		}

		return AzRedbar.azMenuItemTemplate(title);
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
			});
	}

	render() {
		return html`
			<header class="bg-red arizona-header" id="header_arizona" role="banner">
				<div class="container">
					<div class="row">
						<section class="ml-auto d-none d-lg-block d-xl-block region region-header-ua-utilities">
							<div class="resources">
								<span class="caret"></span>
								${this.isLoading ? html`<button role="button" aria-expanded="false" aria-haspopup="true" href="#" class="resource-menu btn btn-outline-red"><slot name="loading">${this.loadingMessage}</slot></button>` : this.renderAzMenuLevel(this.tree)}
							</div>
						</section>
						<section class="redbar-buttons d-lg-none">
							<az-button theme="red" redbar role="button" aria-expanded="false" aria-haspopup="true" target="az-main-menu" aria-controls="navbarOffcanvasDemo">
								<svg class="icon"  id="button-search-icon" title="search" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
								<span class="icon-text"> search </span>
							</az-button>
							<az-button theme="red" redbar role="button" aria-expanded="false" aria-haspopup="true" target="az-main-menu" aria-controls="navbarOffcanvasDemo">
								<svg class="icon" title="menu" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
								<span class="icon-text"> menu </span>
							</az-button>
						</section>
					</div>
				</div>
			 </header>
		`;
	}
}