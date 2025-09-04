import { css } from "lit";

const azButtonStyles = css`
		.button {
			--bs-btn-padding-x: 1.25rem;
			--bs-btn-padding-y: 0.5rem;
			--bs-btn-font-family: "Inter", sans-serif;
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
	transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
		}
		.button:hover {
			text-decoration: none;
		}
		.button:focus {
			outline: 0;
			box-shadow: 0 0 0 0;
		}
		.button[disabled] {
			pointer-events: none;
			opacity: 0.65;
		}
		@media (prefers-reduced-motion: reduce) {
			.button {
				transition: none;
			}
		}
		:host {
			outline: none;
			margin-right: 4px;
			font-family: inherit;
		}
		:host([size="large"]) .button {
			padding: 0.5rem 1rem;
			font-size: 1.25rem;
			line-height: 1.5;
			border-radius: 0.3rem;
		}
		:host([size="small"]) .button {
			padding: 0.25rem 0.5rem;
			font-size: 0.875rem;
			line-height: 1.5;
			border-radius: 0.2rem;
		}
		:host([block]) {
			display: block;
		}
		:host([block]) .button {
			display: block;
			width: 100%;
			padding: 6px 0;
		}
		:host([redbar]),
		:host([redbar]) .button {
			width: 60px;
			height: 50px;
			display: inline-block;
		}
		:host([redbar]) ::slotted(svg) {
			margin: -5px 0 0 0;
			font-size: 24px;
			line-height: 24px;
		}
		:host([theme="primary"]) .button {
			color: #fff;
			background-color: #8b0015;
		}

		:host([theme="primary"]) .button:hover,
		:host([theme="primary"]) .button:focus {
			border-color: transparent;
			background-color: #ab0520;
		}
		:host([theme="primary"][outline]) .button {
			color: #8b0015;
			border-color: #8b0015;
			background-color: transparent;
		}
		:host([theme="primary"][outline]) .button:hover,
		:host([theme="primary"][outline]) .button:focus {
			color: #fff;
			background-color: #8b0015;
			border-color: #8b0015;
		}
		:host([theme="primary"][outline]) .button[disabled] {
			background-color: transparent;
		}
		:host([theme="az-red"]) .button,
		:host([theme="red"]) .button {
			color: #fff;
			background-color: #ab0520;
		}
		:host([theme="red"]) .button:hover,
		:host([theme="red"]) .button:focus,
		:host([theme="az-red"]) .button:hover,
		:host([theme="az-red"]) .button:focus {
			border-color: transparent;
			background-color: #8b0015;
		}
		:host([theme="az-red"][outline]) .button,
		:host([theme="red"][outline]) .button {
			color: #8b0015;
			border-color: #8b0015;
			background-color: transparent;
		}
		:host([theme="az-red"][outline]) .button:hover,
		:host([theme="az-red"][outline]) .button:focus,
		:host([theme="red"][outline]) .button:hover,
		:host([theme="red"][outline]) .button:focus {
			color: #fff;
			background-color: #8b0015;
			border-color: #8b0015;
		}

		// Bloom
		:host([theme="bloom"]) .button {
			color: #fff;
			background-color: #8b0015;
		}
		:host([theme="bloom"]) .button:hover,
		:host([theme="bloom"]) .button:focus {
			border-color: transparent;
			background-color: #ab0520;
		}

		// Bloom Outline
		:host([theme="bloom"][outline]) .button {
			color: white;
			border-color: rgb(239, 64, 86) !important;
			background-color: transparent;
		}
		:host([theme="bloom"][outline]) .button:hover,
		:host([theme="bloom"][outline]) .button:focus {
			color: white;
			background-color: rgb(139, 0, 21) !important;
			border-color: rgb(139, 0, 21) !important;
		}
		:host([theme="bloom"][outline]) .button[disabled] {
			background-color: transparent;
		}
		::slotted(.icon-text) {
			display: block;
			margin: -5px;
			font-size: 10px;
			line-height: 10px;
		}
	`;

export default azButtonStyles;
