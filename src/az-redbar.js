 import { html, css, LitElement } from 'lit-element';
 import { denormalize } from "@drupal/decoupled-menu-parser";
 import './az-button';
 import {eventDataLayerPush} from './mixins/shadow-events-datalayer';


 /**
	* TODO: Create a class for your element that extends the LitElement
	* base class.
	*/
	export class AzRedbar extends LitElement {
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
					--font-family-sans-serif: proxima-nova, calibri, -apple-system,
						BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
						"Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
						"Segoe UI Symbol", "Noto Color Emoji";
					--font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas,
						"Liberation Mono", "Courier New", monospace;
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
					font-family: proxima-nova, calibri, -apple-system, BlinkMacSystemFont,
						"Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
						"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
						"Noto Color Emoji";
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
				button span {
					font-family: proxima-nova !important;
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
					height: 50px;
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
					padding: 5px 0;
				}
				.row section {
					align-items: center;
				}
				.redbar-buttons {
					position: absolute;
					top: 0;
					right: 0;
					height: 53px;
					max-height: 53px;
				}

				@media (min-width: 576px) {
					.container,
					.container-sm {
						max-width: 540px;
					}
				}
				@media (min-width: 768px) {
					.container,
					.container-md,
					.container-sm {
						max-width: 720px;
					}
				}
				@media (min-width: 992px) {
					.arizona-header {
						height: auto;
					}
					.container,
					.container-lg,
					.container-md,
					.container-sm {
						max-width: 960px;
					}
				}
				@media (min-width: 1200px) {
					.container,
					.container-lg,
					.container-md,
					.container-sm,
					.container-xl {
						max-width: 1140px;
					}
				}
				.arizona-line-logo {
					width: 211px;
					height: 16px;
					margin: 17px 20px 17px 10px;
				}
				@media (min-width: 576px) {
					svg#search-icon {
						width: 266.41px;
						height: 19.8px;
						margin: 15.11px 20px 15.1px 10px;
					}
				}
				.ml-auto,
				.mx-auto {
					margin-left: auto !important;
				}
				.d-none {
					display: none !important;
				}
				@media (min-width: 992px) {
					.d-lg-block {
						-webkit-box-orient: horizontal !important;
						-webkit-box-direction: normal !important;
						-ms-flex-direction: row !important;
						flex-direction: row !important;
						display: flex !important;
					}
					.d-lg-none {
						display: none !important;
					}
				}
				@media (min-width: 1200px) {
					.d-xl-block {
						-webkit-box-orient: horizontal !important;
						-webkit-box-direction: normal !important;
						-ms-flex-direction: row !important;
						flex-direction: row !important;
						display: flex !important;
					}
				}
				header #search-block-form {
					/* padding: 5px 12px; */
					flex-flow: row wrap;
				}
				#search-block-form {
					display: flex;
					overflow: hidden;
					position: relative;
				}
				.form-control:focus {
					border-color: hsl(191deg 9% 65%);
					outline: 0;
					-webkit-box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%),
						0 0 8px rgb(158 171 174 / 60%);
					box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%),
						0 0 8px rgb(158 171 174 / 60%);
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
				label {
					display: inline-block;
					margin-bottom: 0.5rem;
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
					right: 1px;
				}
				.input-group > .custom-file,
				.input-group > .custom-select,
				.input-group > .form-control,
				.input-group > .form-control-plaintext {
					position: relative;
					-ms-flex: 1 1 auto;
					flex: 1 1 auto;
					min-width: 0;
					border: none;
				}
				.search-block-form {
					overflow: hidden;
					width: 189.5px;
					background-color: white;
				}
				#block-az-barrio-search {
					border: 1px solid var(--bloom);
					padding: 4px 0 5px;
				}
				.search-block-form input {
					height: 34px;
					font-size: 16px;
					padding: 0px 37px 0px 13px;
					width: 100%;
				}
				input[type="search"] {
					box-sizing: border-box;
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
					/* border: 1px solid #ced4da; */
					border-radius: 0;
					transition: border-color 0.15s ease-in-out,
						box-shadow 0.15s ease-in-out;
				}
				[type="search"] {
					outline-offset: -2px;
					-webkit-appearance: none;
				}
				.search-block-form .input-group-append button#edit-submit {
					background-color: hsl(0deg 0% 100%);
					padding: 0px;
					border: none;
					position: absolute;
					top: 0px;
					right: 1px;
					text-align: center;
					padding: 0 8px;
					border-left: 1px solid #ced4da;
				}
				.search-block-form
					.input-group-append
					button#edit-submit
					.search-block-form
					.input-group-append
					button#edit-submit
					svg {
					height: 23px;
					width: 35px;
				}
				.search-block-form .input-group-append button#edit-submit:focus {
					border-color: hsl(191deg 9% 65%);
					outline: 0;
					-webkit-box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%),
						0 0 8px rgb(158 171 174 / 60%);
					box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%),
						0 0 8px rgb(158 171 174 / 60%);
				}
				.input-group-append button#edit-submit svg {
					height: 30px;
					width: 20px;
					margin: 3px 0px;
				}
				button,
				input {
					overflow: visible;
					border: none;
				}
				button,
				input,
				optgroup,
				select,
				textarea {
					margin: 0;
					font-family: inherit;
					font-size: inherit;
					line-height: inherit;
				}
				.btn:not(:disabled):not(.disabled) {
					cursor: pointer;
				}
				.bd-example > .btn,
				.bd-example > .btn-group {
					margin-top: 0.25rem;
					margin-bottom: 0.25rem;
				}
				.btn {
					font-weight: 500;
					text-transform: uppercase;
					text-decoration: none;
					letter-spacing: 0.04em;
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
					padding: 0.375rem 0.75rem;
					font-size: 1rem;
					line-height: 1.5;
					border-radius: 0;
					transition: color 0.15s ease-in-out,
						background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
						box-shadow 0.15s ease-in-out;
				}
				[type="button"],
				[type="reset"],
				[type="submit"],
				button {
					-webkit-appearance: button;
				}
				button,
				select {
					text-transform: none;
				}
				button,
				input {
					overflow: visible;
				}
				button,
				input,
				optgroup,
				select,
				textarea {
					margin: 0;
					font-family: inherit;
					font-size: inherit;
					line-height: inherit;
				}
				button {
					border-radius: 0;
				}
				.btn-hollow-default:hover,
				.btn-outline-red:hover {
					background-color: #8b0015 !important;
					border-color: #8b0015 !important;
					color: white;
				}
				.btn:hover {
					color: #212529;
					text-decoration: none;
				}
				[type="button"]:not(:disabled),
				[type="reset"]:not(:disabled),
				[type="submit"]:not(:disabled),
				button:not(:disabled) {
					cursor: pointer;
				}
				.btn-hollow-default,
				.btn-outline-red {
					color: white;
					border-color: #ef4056 !important;
				}

				.input-group-append {
					margin-left: -2px;
				}
				.input-group-append,
				.input-group-btn,
				.input-group-prepend {
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
				.dropdown-menu.dropdown-menu-right,
				.dropdown-menu.pull-right {
					right: 0;
					left: auto;
				}
				@media (min-width: 768px) {
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
						background-color: rgba(0, 28, 72, 0.97);
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
					margin-left: 10px;
					padding: 0 2px 0 6px;
				}
				.resources:hover button + .dropdown-menu,
				.resources button + .dropdown-menu:focus {
					display: block;
				}
				.resources .caret {
					position: absolute;
					right: 30px;
					top: 18px;
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
					font-size: 14px;
					height: auto;
					padding: 8px 40px 9px 24px;
					font-weight: bold;
				}
				.resources button:hover {
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
				/**
				 * URL of target site
				 */
				thisUrl: { type: String },

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

		constructor() {
			super();

			this.tree = [];
			this.isLoading = false;
			this.loadingMessage = "Loading...";
		}

		connectedCallback() {
			super.connectedCallback();

			if (this.baseUrl && this.menuId) {
				this.fetchData(this.baseUrl, this.menuId);
			}
		}

		static azMenuLevelTemplate(levels) {
			return html` ${levels} `;
		}
		static openMenu(e) {
			e.preventDefault();

			const { target } = e;
			const isExpanded = target.getAttribute("aria-expanded") === "true";

			if (isExpanded) {
				target.setAttribute("aria-expanded", "false");
				target.nextElementSibling.classList.remove("show");
			} else {
				target.setAttribute("aria-expanded", "true");
				target.nextElementSibling.classList.add("show");
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
			return html`<div class="dropdown-item">
				<a
					href=${href}
					@click="${(e) => {
						eventDataLayerPush(e, "az-redbar");
					}}"
					>${title}</a
				>
			</div>`;
		}

		static azMenuItemTemplate(title) {
			return html`${title}`;
		}

		renderAzMenuLevel(level) {
			const levels = level.map((item) => this.renderAzMenuItem(item));

			return AzRedbar.azMenuLevelTemplate(levels);
		}

		renderAzMenuItem(item) {
			let titleTest =
				item && item.link && item.link.attributes && item.link.attributes.title;
			let hrefTest = item && item.link && item.link.href;
			let childrenTest = item && item.children;
			const title = titleTest ? item.link.attributes.title : undefined;
			let href = hrefTest ? item.link.href : undefined;
			const children = childrenTest ? item.children : undefined;

			if (children.length) {
				return this.azMenuParentTemplate(title, children);
			}
			if (href) {
				href = href.charAt(0) === "/" ? this.thisUrl + href : href;
				return AzRedbar.azMenuLinkTemplate(title, href);
			}
			return AzRedbar.azMenuItemTemplate(title);
		}

		fetchData(baseURL, menuID) {
			this.isLoading = true;
			const url = `${baseURL}/system/menu/${menuID}/linkset`;

			fetch(url, {})
				.then((response) => {
					if (response.ok) {
						return response.json();
					}
					this.isLoading = false;
					throw new Error(
						`Unable to fetch ${url}. ${response.status} ${response.statusText}`
					);
				})
				.then((json) => {
					try {
						const denormalized = denormalize(json, menuID);
						this.tree = denormalized.tree;
					} catch (e) {
						throw new Error("Unable to denormalize menu.");
					}
					this.isLoading = false;
				});
		}
		render() {
			return html`
				<header class="bg-red arizona-header" id="header_arizona" role="banner">
					<div class="container">
						<div class="row">
							<section
								class="ml-auto d-none d-lg-block d-xl-block region region-header-ua-utilities"
							>
								<div
									class="search-block-form block block-search block-search-form-block"
									data-drupal-selector="search-block-form"
									id="block-az-barrio-search"
									role="search"
								>
									<div class="content">
										<form
											action="${this.thisUrl}/search/google"
											method="GET"
											id="search-block-form"
											accept-charset="UTF-8"
											class="search-form search-block-form"
										>
											<div class="input-group">
												<label for="edit-keys" class="sr-only">Search</label>
												<input
													title="Enter the terms you wish to search for."
													data-drupal-selector="edit-keys"
													type="search"
													id="edit-keys"
													name="keys"
													value=""
													size="15"
													maxlength="128"
													class="form-search form-control"
													placeholder="Search this site"
													aria-label="Search this site"
												/>
												<div
													data-drupal-selector="edit-actions"
													class="form-actions js-form-wrapper input-group-append"
													id="edit-actions"
												>
													<button
														data-drupal-selector="edit-submit"
														type="submit"
														id="edit-submit"
														value="Search"
														class="button js-form-submit form-submit btn"
													>
														<svg
															id="search-icon"
															title="search"
															xmlns="http://www.w3.org/2000/svg"
															height="24px"
															viewBox="0 0 24 24"
															width="24px"
															fill="#8B0015"
														>
															<path d="M0 0h24v24H0V0z" fill="none" />
															<path
																d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
															/>
														</svg>
													</button>
												</div>
											</div>
										</form>
									</div>
								</div>
								<div class="resources">
									<span class="caret"></span>
									${this.isLoading
										? html`
												<button
													role="button"
													aria-expanded="false"
													aria-haspopup="true"
													href="#"
													class="resource-menu btn btn-outline-red"
												>
													<slot name="loading">${this.loadingMessage}</slot>
												</button>
										  `
										: this.renderAzMenuLevel(this.tree)}
								</div>
							</section>
							<section class="redbar-buttons d-lg-none">
								<az-button
									theme="red"
									redbar
									role="button"
									aria-expanded="false"
									aria-haspopup="true"
									target="az-main-menu"
									aria-controls="navbarOffcanvasDemo"
								>
									<svg
										class="icon"
										id="button-search-icon"
										title="search"
										xmlns="http://www.w3.org/2000/svg"
										height="24px"
										viewBox="0 0 24 24"
										width="24px"
										fill="#FFFFFF"
									>
										<path d="M0 0h24v24H0V0z" fill="none" />
										<path
											d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
										/>
									</svg>
									<span class="icon-text"> search </span>
								</az-button>
								<az-button
									theme="red"
									redbar
									role="button"
									aria-expanded="false"
									aria-haspopup="true"
									target="az-main-menu"
									aria-controls="navbarOffcanvasDemo"
								>
									<svg
										class="icon"
										title="menu"
										xmlns="http://www.w3.org/2000/svg"
										height="24px"
										viewBox="0 0 24 24"
										width="24px"
										fill="#FFFFFF"
									>
										<path d="M0 0h24v24H0z" fill="none" />
										<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
									</svg>
									<span class="icon-text"> menu </span>
								</az-button>
							</section>
						</div>
					</div>
				</header>
			`;
		}
	}
	customElements.get('az-redbar') || customElements.define('az-redbar', AzRedbar);
