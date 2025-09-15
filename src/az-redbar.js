import { LitElement, html, css } from "lit";
import { denormalize } from "@drupal/decoupled-menu-parser";
import "./az-button";
import { eventDataLayerPush } from "./mixins/shadow-events-datalayer";

/**
 * TODO: Create a class for your element that extends the LitElement
 * base class.
 */
export class AzRedbar extends LitElement {
	static styles = css`
		
		*,
		*::before,
		*::after {
			box-sizing: border-box;
		}

		@media (prefers-reduced-motion: no-preference) {
  			:root {
    			scroll-behavior: smooth;
  			}
		}
		body {
			margin: 0;
			font-family: var(--bs-body-font-family);
			font-size: var(--bs-body-font-size);
			font-weight: var(--bs-body-font-weight);
			line-height: var(--bs-body-line-height);
			color: var(--bs-body-color);
			text-align: var(--bs-body-text-align);
			background-color: var(--bs-body-bg);
			-webkit-text-size-adjust: 100%;
			-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
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
		.btn-check:checked+.btn:focus-visible, .btn.active:focus-visible, .btn.show:focus-visible, .btn:first-child:active:focus-visible, :not(.btn-check)+.btn:active:focus-visible {
			box-shadow: var(--bs-btn-focus-box-shadow);
		}
		.btn-check:checked+.btn, .btn.active, .btn.show, .btn:first-child:active, :not(.btn-check)+.btn:active {
    		color: var(--bs-btn-active-color);
    		background-color: var(--bs-btn-active-bg);
    		border-color: var(--bs-btn-active-border-color);
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
			padding-right: 12px;
			padding-left: 12px;
			margin-right: auto;
			margin-left: auto;
		}
		.flex-nowrap {
			-ms-flex-wrap: nowrap!important;
			flex-wrap: nowrap !important;
		}
		.row {
		    --bs-gutter-x: 1.5rem;
		    --bs-gutter-y: 0;
		    display: -ms-flexbox;
		    display: flex;
		    -ms-flex-wrap: wrap;
		    flex-wrap: wrap;
		    margin-top: calc(-1 * var(--bs-gutter-y));
		    margin-right: calc(-.5 * var(--bs-gutter-x));
		    margin-left: calc(-.5 * var(--bs-gutter-x));
		}
		.ms-auto {
			margin-left: auto !important;
		}
		.d-none {
			display: none !important;
		}
		.d-lg-flex {
			display: -ms-flexbox !important;
			display: flex !important;
		}
		.row>* {
			-ms-flex-negative: 0;
			flex-shrink: 0;
			width: 100%;
			max-width: 100%;
			padding-right: calc(var(--bs-gutter-x) * .5);
			padding-left: calc(var(--bs-gutter-x) * .5);
			margin-top: var(--bs-gutter-y);
		}	
		.redbar-buttons {
			position: absolute;
			top: 0;
			right: 0;
			height: 53px;
			max-height: 53px;
		}
		.arizona-header>.container>.row {
			-ms-flex-align: center;
			align-items: center;
			-ms-flex-pack: justify;
			justify-content: space-between;
			min-height: 50px;
		}
		
		.input-group:not(.has-validation)>.dropdown-toggle:nth-last-child(n+3), .input-group:not(.has-validation)>.form-floating:not(:last-child)>.form-control, .input-group:not(.has-validation)>.form-floating:not(:last-child)>.form-select, .input-group:not(.has-validation)>:not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating) {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
		.visually-hidden-focusable:not(:focus):not(:focus-within):not(caption), .visually-hidden:not(caption) {
		    position: absolute !important;
		}
		.visually-hidden, .visually-hidden-focusable:not(:focus):not(:focus-within) {
		    width: 1px !important;
		    height: 1px !important;
		    padding: 0 !important;
		    margin: -1px !important;
		    overflow: hidden !important;
		    clip: rect(0, 0, 0, 0) !important;
		    white-space: nowrap !important;
		    border: 0 !important;
		}
		.visually-hidden {
		    position: absolute !important;
		    overflow: hidden;
		    clip: rect(1px, 1px, 1px, 1px);
		    width: 1px;
		    height: 1px;
		    word-wrap: normal;
		}


		.container,
		.container-fluid,
		.container-xxl,
		.container-xl,
		.container-lg,
		.container-md,
		.container-sm {
		  --bs-gutter-x: 1.5rem;
		  --bs-gutter-y: 0;
		  width: 100%;
		  padding-right: calc(var(--bs-gutter-x) * 0.5);
		  padding-left: calc(var(--bs-gutter-x) * 0.5);
		  margin-right: auto;
		  margin-left: auto;
		}
		
		@media (min-width: 576px) {
		  .container-sm, .container {
		    max-width: 540px;
		  }
		}
		@media (min-width: 768px) {
		  .container-md, .container-sm, .container {
		    max-width: 720px;
		  }
		}
		@media (min-width: 992px) {
		  .container-lg, .container-md, .container-sm, .container {
		    max-width: 960px;
		  }
		}
		@media (min-width: 1200px) {
		  .container-xl, .container-lg, .container-md, .container-sm, .container {
		    max-width: 1140px;
		  }
		}
		@media (min-width: 1400px) {
		  .container-xxl, .container-xl, .container-lg, .container-md, .container-sm, .container {
		    max-width: 1320px;
		  }
		}

		@media (max-width: 992px) {
			.arizona-header {
				height: auto;
			}
			.arizona-header {
        		position: fixed;
        		top: 0;
        		right: 0;
        		left: 0;
        		z-index: 100;
        		height: 50px;
		    }
			.arizona-header>.container {
        		padding-right: 0;
    		}
			.arizona-header>.container>.row {
        		margin-right: 0;
    		}
		}
		.arizona-line-logo {
			width: 211px;
			height: 16px;
			margin: 17px 20px 17px 10px;
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
			.d-xl-flex {
				display: -ms-flexbox!important;
				display: flex !important;
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
			.d-xl-flex {
				display: -ms-flexbox!important;
				display: flex !important;
			}
		}
		header #search-block-form {
			padding: 5px 12px;
			flex-flow: row wrap;
		}
		#search-block-form {
			display: flex;
		}
		.form-control {
			display: block;
			width: 100%;
			padding: .375rem .75rem;
			font-size: 1rem;
			font-weight: 400;
			line-height: 1.5;
			color: var(--bs-body-color);
			-webkit-appearance: none;
			-moz-appearance: none;
			appearance: none;
			background-color: var(--bs-body-bg);
			background-clip: padding-box;
			border: var(--bs-border-width) solid var(--bs-border-color);
			border-radius: var(--bs-border-radius);
			transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
		}
		.form-control:focus {
			color: var(--bs-body-color);
    		background-color: var(--bs-body-bg);
    		border-color: #d58290;
    		outline: 0;
    		box-shadow: 0 0 0 .25rem rgba(171, 5, 32, .25);
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
			-ms-flex-align: stretch;
			align-items: stretch;
			width: 100%;
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
		.input-group:not(.has-validation)>.dropdown-toggle:nth-last-child(n+3), 
		.input-group:not(.has-validation)>.form-floating:not(:last-child)>.form-control, 
		.input-group:not(.has-validation)>.form-floating:not(:last-child)>.form-select, 
		.input-group:not(.has-validation)>:not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating) Specificity: (0,5,0) {
    		border-top-right-radius: 0;
    		border-bottom-right-radius: 0;
		}
			


		.search-block-form input {
			height: 43px;
    		margin-left: 0 !important;
			width: 100%;
		}
		.input-group>.form-control, .input-group>.form-floating, .input-group>.form-select {
    		position: relative;
    		-ms-flex: 1 1 auto;
    		flex: 1 1 auto;
    		width: 1%;
    		min-width: 0;
		}
		input[type="search"] {
			box-sizing: border-box;
		}
		.rounded-start {
    		border-bottom-left-radius: var(--bs-border-radius) !important;
    		border-top-left-radius: var(--bs-border-radius) !important;
		}
		.input-group>.form-control,
		.input-group>.form-floating,
		.input-group>.form-select {
    		position: relative;
    		-ms-flex: 1 1 auto;
    		flex: 1 1 auto;
    		width: 1%;
    		min-width: 0;
		}
		.az-search-block .search-block-form .form-search {
			height: 43px;
			margin-left: 0 !important;
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
		.input-group>:not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
    		margin-left: calc(-1 * var(--bs-border-width));
    		border-top-left-radius: 0;
    		border-bottom-left-radius: 0;
		}
		.az-search-block .search-block-form .input-group button {
    		display: flex;
    		align-items: center;
    		font-size: 20px;
    		color: #8B0015;
    		background-color: #ffffff;
    		border: 1px solid #ced4da;
    		padding: 0 8px;
		}
		.input-group .btn {
		    padding: .375rem .75rem;
		    border-width: var(--bs-border-width);
		    border-radius: var(--bs-border-radius);
		}
		.input-group .btn {
		    position: relative;
		    z-index: 2;
		}
		[type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled), button:not(:disabled) {
		    cursor: pointer;
		}
		.btn {
		    --bs-btn-padding-x: 1.25rem;
		    --bs-btn-padding-y: 0.5rem;
		    --bs-btn-font-family: ;
		    --bs-btn-font-size: 1rem;
		    --bs-btn-font-weight: 500;
		    --bs-btn-line-height: 1.5;
		    --bs-btn-color: var(--bs-body-color);
		    --bs-btn-bg: transparent;
		    --bs-btn-border-width: 2px;
		    --bs-btn-border-color: transparent;
		    --bs-btn-border-radius: 3rem;
		    --bs-btn-hover-border-color: transparent;
		    --bs-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
		    --bs-btn-disabled-opacity: 0.65;
		    --bs-btn-focus-box-shadow: 0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb), .5);
		    display: inline-block;
		    padding: var(--bs-btn-padding-y) var(--bs-btn-padding-x);
		    font-family: var(--bs-btn-font-family);
		    font-size: var(--bs-btn-font-size);
		    font-weight: var(--bs-btn-font-weight);
		    line-height: var(--bs-btn-line-height);
		    color: var(--bs-btn-color);
		    text-align: center;
		    text-decoration: none;
		    vertical-align: middle;
		    cursor: pointer;
		    -webkit-user-select: none;
		    -moz-user-select: none;
		    -ms-user-select: none;
		    user-select: none;
		    border: var(--bs-btn-border-width) solid var(--bs-btn-border-color);
		    border-radius: var(--bs-btn-border-radius);
		    background-color: var(--bs-btn-bg);
		    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
		}
		[type=button], [type=reset], [type=submit], button {
		    -webkit-appearance: button;
		}
		button, select {
		    text-transform: none;
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
		*, ::after, ::before {
		    box-sizing: border-box;
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
		button.resources-menu {
			height: 43px;
			margin-top: 5px;
			padding: 5px 25px;
		}
		button.resources-menu:hover,
		button.resources-menu:active,
		button.resources-menu:focus {
			color: white;
			background-color: #8B0015;
			border-color: #8B0015 !important;
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
		.dropdown, .dropdown-center, .dropend, .dropstart, .dropup, .dropup-center {
			position: relative;
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
			[type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled), button:not(:disabled) {
    cursor: pointer;
}

button.resources-menu {
    height: 43px;
    margin-top: 5px;
    padding: 5px 25px;
}
.btn-outline-white {
    --bs-btn-color: #fff;
    --bs-btn-border-color: #fff;
    --bs-btn-hover-color: #343a40;
    --bs-btn-hover-bg: #fff;
    --bs-btn-hover-border-color: #fff;
    --bs-btn-focus-shadow-rgb: 255, 255, 255;
    --bs-btn-active-color: #000;
    --bs-btn-active-bg: #fff;
    --bs-btn-active-border-color: #fff;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #fff;
    --bs-btn-disabled-bg: transparent;
    --bs-btn-disabled-border-color: #fff;
    --bs-gradient: none;
}
.dropdown-toggle::after {
    display: inline-block;
    margin-left: .255em;
    vertical-align: .255em;
    content: "";
    border-top: .3em solid;
    border-right: .3em solid transparent;
    border-bottom: 0;
    border-left: .3em solid transparent;
}
.w-100 {
    width: 100% !important;
}
.dropdown-toggle {
    white-space: nowrap;
}
.btn-group-sm>.btn, .btn-sm {
    --bs-btn-padding-y: 0.25rem;
    --bs-btn-padding-x: 0.5rem;
    --bs-btn-font-size: 0.875rem;
    --bs-btn-border-radius: 3rem;
}
		.dropdown-menu {
			--bs-dropdown-zindex: 1000;
    		--bs-dropdown-min-width: 10rem;
    		--bs-dropdown-padding-x: 0;
    		--bs-dropdown-padding-y: 0.5rem;
    		--bs-dropdown-spacer: 0.125rem;
    		--bs-dropdown-font-size: 1rem;
    		--bs-dropdown-color: #e2e9eb;
    		--bs-dropdown-bg: #0c234b;
    		--bs-dropdown-border-color: var(--bs-border-color-translucent);
    		--bs-dropdown-border-radius: var(--bs-border-radius);
    		--bs-dropdown-border-width: var(--bs-border-width);
    		--bs-dropdown-inner-border-radius: calc(var(--bs-border-radius) - var(--bs-border-width));
    		--bs-dropdown-divider-bg: #fff;
    		--bs-dropdown-divider-margin-y: 0.5rem;
    		--bs-dropdown-box-shadow: var(--bs-box-shadow);
    		--bs-dropdown-link-color: #fff;
    		--bs-dropdown-link-hover-color: #fff;
    		--bs-dropdown-link-hover-bg: #1e5288;
    		--bs-dropdown-link-active-color: #0c234b;
    		--bs-dropdown-link-active-bg: #fff;
    		--bs-dropdown-link-disabled-color: #6c757d;
    		--bs-dropdown-item-padding-x: 1rem;
    		--bs-dropdown-item-padding-y: 0.25rem;
    		--bs-dropdown-header-color: #fff;
    		--bs-dropdown-header-padding-x: 1rem;
    		--bs-dropdown-header-padding-y: 0.5rem;
    		position: absolute;
    		z-index: var(--bs-dropdown-zindex);
    		display: none;
    		min-width: var(--bs-dropdown-min-width);
    		padding: var(--bs-dropdown-padding-y) var(--bs-dropdown-padding-x);
    		margin: 0;
    		font-size: var(--bs-dropdown-font-size);
    		color: var(--bs-dropdown-color);
    		text-align: left;
    		list-style: none;
    		background-color: var(--bs-dropdown-bg);
    		background-clip: padding-box;
    		border: var(--bs-dropdown-border-width) solid var(--bs-dropdown-border-color);
    		border-radius: var(--bs-dropdown-border-radius);
		}
		.dropdown-menu.show {
			display: block;
			position: absolute;
    		inset: 0px auto auto 0px;
    		margin: 0px;
    		transform: translate(0px, 50px);
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
			padding: 4px 20px;
			width: 100%;
			font-size: 14px;
			font-weight: 400;
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

	static properties = {
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
				type="button"
				id="dropdownResourcesMenu"
				aria-expanded="false"
				aria-haspopup="true"
				data-bs-toggle="dropdown"
				class="btn w-100 btn-outline-white btn-sm dropdown-toggle resources-menu border-bloom"
				href="#"
			>
				${title}
			</button>
			<div class="dropdown-menu" aria-labelledby="dropdownResourcesMenu" style="">
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
					<div class="row flex-nowrap">
						<section class="ms-auto d-none d-lg-flex d-xl-flex align region region-header-ua-utilities">
							<div
								class="search-block-form google-cse ms-auto az-search-block block block-search block-search-form-block"
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
											<label for="edit-keys" class="visually-hidden">Search</label>
											<input
												title="Enter the terms you wish to search for."
												data-drupal-selector="edit-keys"
												type="search"
												id="edit-keys"
												name="keys"
												value=""
												size="15"
												maxlength="128"
												class="form-search form-control rounded-start"
												placeholder="Search this site"
												aria-label="Search this site"
											/>
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
									</form>
								</div>
							</div>

							<div id="block-resourcesdropdown" class="block-content-az_flexible_block block block-block-content">
								<div class="content">
									<div class="field field--name-field-az-main-content field--type-entity-reference-revisions field--label-hidden field__items">
										<div class="field__item">
											<div class="mb-0 paragraph paragraph--type--az-html paragraph--view-mode--default">
												<div class="clearfix text-formatted field field--name-field-az-full-html field--type-text-long field--label-hidden field__item">
													<div class="dropdown">
														${this.isLoading
															? html`
															<button class="btn w-100 btn-outline-white btn-sm dropdown-toggle resources-menu border-bloom" type="button" id="dropdownResourcesMenu" aria-expanded="false" data-bs-toggle="dropdown">
																Resources
															</button>
														`
														: this.renderAzMenuLevel(this.tree)}
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
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
customElements.get("az-redbar") || customElements.define("az-redbar", AzRedbar);
