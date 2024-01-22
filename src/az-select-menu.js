import { html, css, LitElement } from 'lit-element';
import { denormalize } from "@drupal/decoupled-menu-parser";
import { createPopper } from '@popperjs/core/lib/popper-lite';
import './az-button';
import {eventDataLayerPush} from './mixins/shadow-events-datalayer';

class AzSelectMenu extends LitElement {
	static get styles() {
		return css`
			* {
				-webkit-box-sizing: border-box;
				box-sizing: border-box;
			}

			.input-group .form-control,
			.input-group-addon,
			.input-group-btn {
				display: table-cell;
			}
			.sr-only {
				position: absolute;
				width: 1px;
				height: 1px;
				padding: 0;
				margin: -1px;
				overflow: hidden;
				clip: rect(0, 0, 0, 0);
				border: 0;
			}
			.btn {
				display: inline-block;
				margin-bottom: 0;
				font-weight: 700;
				text-align: center;
				white-space: nowrap;
				vertical-align: middle;
				-ms-touch-action: manipulation;
				touch-action: manipulation;
				cursor: pointer;
				background-image: none;
				border: 1px solid transparent;
				padding: 6px 12px;
				font-size: 16px;
				line-height: 1.5;
				border-radius: 0;
				-webkit-user-select: none;
				-moz-user-select: none;
				-ms-user-select: none;
				user-select: none;
			}

			.btn {
				background-clip: border-box;
				font-weight: 700;
				-ms-touch-action: manipulation;
				touch-action: manipulation;
				cursor: pointer;
				letter-spacing: 0.04em;
				text-transform: uppercase;
				white-space: normal;
			}

			.input-group-addon,
			.input-group-btn {
				width: 1%;
				white-space: nowrap;
				vertical-align: middle;
			}
			.input-group-addon {
				padding: 6px 12px;
				font-size: 16px;
				font-weight: 400;
				line-height: 1;
				color: #49595e;
				text-align: center;
				background-color: #fff;
				border: 1px solid #cbd1e0;
				border-radius: 0;
			}

			.input-group .form-control:first-child,
			.input-group-addon:first-child,
			.input-group-btn:first-child > .btn,
			.input-group-btn:first-child > .btn-group > .btn,
			.input-group-btn:first-child > .dropdown-toggle,
			.input-group-btn:last-child > .btn-group:not(:last-child) > .btn,
			.input-group-btn:last-child
				> .btn:not(:last-child):not(.dropdown-toggle) {
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;
			}

			.input-group .form-control:not(:first-child):not(:last-child),
			.input-group-addon:not(:first-child):not(:last-child),
			.input-group-btn:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
			.input-group .form-control,
			.input-group-addon,
			.input-group-btn {
				display: table-cell;
			}
			.input-group .form-control {
				position: relative;
				z-index: 2;
				float: left;
				width: 100%;
				margin-bottom: 0;
			}
			.input-group-addon:first-child {
				border-right: 0;
			}
			.form-control {
				display: block;
				width: 100%;
				height: 38px;
				padding: 6px 12px;
				font-size: 16px;
				line-height: 1.5;
				color: #49595e;
				background-color: #fff;
				background-image: none;
				border: 1px solid #cbd1e0;
				border-radius: 0;
				-webkit-box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
				box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
				-webkit-transition: border-color ease-in-out 0.15s,
					box-shadow ease-in-out 0.15s;
				-webkit-transition: border-color ease-in-out 0.15s,
					-webkit-box-shadow ease-in-out 0.15s;
				transition: border-color ease-in-out 0.15s,
					-webkit-box-shadow ease-in-out 0.15s;
				transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
				transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s,
					-webkit-box-shadow ease-in-out 0.15s;
			}
			.form-control {
				border: 2px solid #cbd1e0;
			}
			button,
			input,
			select,
			textarea {
				font-family: inherit;
				font-size: inherit;
				line-height: inherit;
			}
			button,
			select {
				text-transform: none;
			}
			button,
			input,
			optgroup,
			select,
			textarea {
				color: inherit;
				font: inherit;
				margin: 0;
			}
			select.select-primary:active,
			select.select-primary:focus,
			select.select-primary:hover {
				box-shadow: none;
				outline: 0;
			}
			select.select-primary:focus,
			select.select-primary:hover {
				border-bottom: 3px solid #ab0520;
			}
			.input-group-addon.input-group-addon-no-border {
				border: none;
			}
			select.select-primary {
				-webkit-appearance: none;
				-moz-appearance: none;
				-o-appearance: none;
				appearance: none;
				background-color: #f4f6f9;
				background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU4QTMzNkUyNDAwQzExRTNBOEY4OTE4N0E1NkQ4QjVCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU4QTMzNkUzNDAwQzExRTNBOEY4OTE4N0E1NkQ4QjVCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RThBMzM2RTA0MDBDMTFFM0E4Rjg5MTg3QTU2RDhCNUIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RThBMzM2RTE0MDBDMTFFM0E4Rjg5MTg3QTU2RDhCNUIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4x37VGAAAAWklEQVR42mI0NjZeysDAEMWAHyxlAhKZQPwAj6L7QJwFUvgJiKOB+C8WRX+gcp+YoALHgLgZi0KQ2HEQgwlJsAWIjyLxjwBxK4yDrBBkdQwQf4DiGGTnAAQYAGJbEyV4nwHtAAAAAElFTkSuQmCC);
				background-repeat: no-repeat;
				background-position: 95% 50%;
				background-position: calc(100% - 10px) 50%;
				border-top: 1px solid transparent;
				border-right: 0;
				border-bottom: 3px solid #cbd1e0;
				border-left: 0;
				border-radius: 0;
				box-shadow: none;
				color: #57585a;
				font-size: 16px;
				font-family: MiloWeb, sans-serif;
				font-weight: 700;
				letter-spacing: 0.25px;
				line-height: 1.5em;
				outline: none;
				text-indent: 0.01px;
				-webkit-transition: 0.15s all ease-in-out;
				transition: 0.15s all ease-in-out;
				text-overflow: "";
			}

			select.select-primary {
				-webkit-appearance: none;
				-moz-appearance: none;
				-o-appearance: none;
				appearance: none;
				background-color: #f4f6f9;
				background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU4QTMzNkUyNDAwQzExRTNBOEY4OTE4N0E1NkQ4QjVCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU4QTMzNkUzNDAwQzExRTNBOEY4OTE4N0E1NkQ4QjVCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RThBMzM2RTA0MDBDMTFFM0E4Rjg5MTg3QTU2RDhCNUIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RThBMzM2RTE0MDBDMTFFM0E4Rjg5MTg3QTU2RDhCNUIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4x37VGAAAAWklEQVR42mI0NjZeysDAEMWAHyxlAhKZQPwAj6L7QJwFUvgJiKOB+C8WRX+gcp+YoALHgLgZi0KQ2HEQgwlJsAWIjyLxjwBxK4yDrBBkdQwQf4DiGGTnAAQYAGJbEyV4nwHtAAAAAElFTkSuQmCC);
				background-repeat: no-repeat;
				background-position: 95% 50%;
				background-position: calc(100% - 10px) 50%;
				border-right: 0;
				border-bottom: 3px solid #cbd1e0;
				border-top: 0px solid white;
				border-left: 0;
				border-radius: 0;
				box-shadow: none;
				color: #57585a;
				font-size: 16px;
				font-family: MiloWeb, sans-serif;
				font-weight: 700;
				letter-spacing: 0.25px;
				line-height: 1.5em;
				outline: none;
				text-indent: 0.01px;
				-webkit-transition: 0.15s all ease-in-out;
				transition: 0.15s all ease-in-out;
				text-overflow: "";
			}
			.input-group-btn:last-child > .btn,
			.input-group-btn:last-child > .btn-group {
				z-index: 2;
				margin-left: -2px;
				margin-top: 0;
				padding: 5px 8px;
			}
			.input-group-btn:last-child > .btn,
			.input-group-btn:last-child > .btn-group {
				z-index: 2;
				margin-left: -1px;
			}
			.input-group .form-control:last-child,
			.input-group-addon:last-child,
			.input-group-btn:first-child > .btn-group:not(:first-child) > .btn,
			.input-group-btn:first-child > .btn:not(:first-child),
			.input-group-btn:last-child > .btn,
			.input-group-btn:last-child > .btn-group > .btn,
			.input-group-btn:last-child > .dropdown-toggle {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
			}
			.input-group-btn > .btn {
				position: relative;
			}

			.input-group-btn > .btn {
				position: relative;
			}
			.btn.disabled,
			.btn[disabled],
			fieldset[disabled] .btn {
				cursor: not-allowed;
				opacity: 0.65;
				-webkit-box-shadow: none;
				box-shadow: none;
			}
			.btn-blue,
			.btn-primary {
				color: #fff;
				background-color: #0c234b;
				border-color: #0c234b;
				border-width: 2px;
				background-clip: border-box;
				-webkit-transition: all 0.1s ease-in-out;
				transition: all 0.1s ease-in-out;
			}

			#tooltip[data-show] {
				display: block;
				font-size: 14px;
			}
			#tooltip {
				display: none;
				font-size: 14px;
			}
			#tooltip[data-hide] {
				display: none;
			}

			#arrow,
			#arrow::before {
				position: absolute;
				width: 8px;
				height: 8px;
				background: inherit;
			}

			#arrow {
				visibility: hidden;
			}

			#arrow::before {
				visibility: visible;
				content: "";
				transform: rotate(45deg);
				border: 1px solid #0c234b;
			}

			#tooltip[data-popper-placement^="top"] > #arrow {
				bottom: -5px;
			}
			#tooltip[data-popper-placement^="top"] > #arrow:before {
				border-top: 1px solid transparent;
				border-left: 1px solid transparent;
			}
			#tooltip[data-popper-placement^="bottom"] > #arrow {
				top: -4px;
			}

			#tooltip[data-popper-placement^="left"] > #arrow {
				right: -4px;
			}

			#tooltip[data-popper-placement^="right"] > #arrow {
				left: -4px;
			}
			#tooltip {
				position: absolute;
				top: 0px;
				left: 0px;
				z-index: 1060;
				display: none;
				max-width: 276px;
				font-family: proxima-nova, calibri, -apple-system, BlinkMacSystemFont,
					"Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
					"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
					"Noto Color Emoji";
				font-style: normal;
				font-weight: 400;
				line-height: 1.5;
				text-align: start;
				text-decoration: none;
				text-shadow: none;
				text-transform: none;
				letter-spacing: normal;
				word-break: normal;
				word-spacing: normal;
				white-space: normal;
				line-break: auto;
				font-size: 1rem;
				overflow-wrap: break-word;
				background-color: rgb(255, 255, 255);
				background-clip: padding-box;
				border: 1px solid #0c234b;
				padding: 5px;
				font-size: 18px;
			}

			#arrow {
				position: absolute;
				display: block;
				width: 1rem;
				height: 0.5rem;
				margin: 0 0.3rem;
			}

			.popover .arrow::before,
			.popover .arrow::after {
				position: absolute;
				display: block;
				content: "";
				border-color: transparent;
				border-style: solid;
			}

			.bs-popover-top,
			.bs-popover-auto[x-placement^="top"] {
				margin-bottom: 0.5rem;
			}

			.bs-popover-top > .arrow,
			.bs-popover-auto[x-placement^="top"] > .arrow {
				bottom: calc(-0.5rem - 1px);
			}

			.bs-popover-top > .arrow::before,
			.bs-popover-auto[x-placement^="top"] > .arrow::before {
				bottom: 0;
				border-width: 0.5rem 0.5rem 0;
				border-top-color: rgba(0, 0, 0, 0.25);
			}

			.bs-popover-top > .arrow::after,
			.bs-popover-auto[x-placement^="top"] > .arrow::after {
				bottom: 1px;
				border-width: 0.5rem 0.5rem 0;
				border-top-color: #fff;
			}

			.bs-popover-right,
			.bs-popover-auto[x-placement^="right"] {
				margin-left: 0.5rem;
			}

			.bs-popover-right > .arrow,
			.bs-popover-auto[x-placement^="right"] > .arrow {
				left: calc(-0.5rem - 1px);
				width: 0.5rem;
				height: 1rem;
				margin: 0.3rem 0;
			}

			.bs-popover-right > .arrow::before,
			.bs-popover-auto[x-placement^="right"] > .arrow::before {
				left: 0;
				border-width: 0.5rem 0.5rem 0.5rem 0;
				border-right-color: rgba(0, 0, 0, 0.25);
			}

			.bs-popover-right > .arrow::after,
			.bs-popover-auto[x-placement^="right"] > .arrow::after {
				left: 1px;
				border-width: 0.5rem 0.5rem 0.5rem 0;
				border-right-color: #fff;
			}

			.bs-popover-bottom,
			.bs-popover-auto[x-placement^="bottom"] {
				margin-top: 0.5rem;
			}

			.bs-popover-bottom > .arrow,
			.bs-popover-auto[x-placement^="bottom"] > .arrow {
				top: calc(-0.5rem - 1px);
			}

			.bs-popover-bottom > .arrow::before,
			.bs-popover-auto[x-placement^="bottom"] > .arrow::before {
				top: 0;
				border-width: 0 0.5rem 0.5rem 0.5rem;
				border-bottom-color: rgba(0, 0, 0, 0.25);
			}

			.bs-popover-bottom > .arrow::after,
			.bs-popover-auto[x-placement^="bottom"] > .arrow::after {
				top: 1px;
				border-width: 0 0.5rem 0.5rem 0.5rem;
				border-bottom-color: #fff;
			}

			.bs-popover-bottom .popover-header::before,
			.bs-popover-auto[x-placement^="bottom"] .popover-header::before {
				position: absolute;
				top: 0;
				left: 50%;
				display: block;
				width: 1rem;
				margin-left: -0.5rem;
				content: "";
				border-bottom: 1px solid #f7f7f7;
			}

			.bs-popover-left,
			.bs-popover-auto[x-placement^="left"] {
				margin-right: 0.5rem;
			}

			.bs-popover-left > .arrow,
			.bs-popover-auto[x-placement^="left"] > .arrow {
				right: calc(-0.5rem - 1px);
				width: 0.5rem;
				height: 1rem;
				margin: 0.3rem 0;
			}

			.bs-popover-left > .arrow::before,
			.bs-popover-auto[x-placement^="left"] > .arrow::before {
				right: 0;
				border-width: 0.5rem 0 0.5rem 0.5rem;
				border-left-color: rgba(0, 0, 0, 0.25);
			}

			.bs-popover-left > .arrow::after,
			.bs-popover-auto[x-placement^="left"] > .arrow::after {
				right: 1px;
				border-width: 0.5rem 0 0.5rem 0.5rem;
				border-left-color: #fff;
			}

			.popover-header {
				padding: 0.5rem 0.75rem;
				margin-bottom: 0;
				font-size: 1rem;
				background-color: #f7f7f7;
				border-bottom: 1px solid #ebebeb;
			}

			.popover-header:empty {
				display: none;
			}

			.popover-body {
				padding: 0.5rem 0.75rem;
				color: #212529;
			}

			.input-group {
				position: relative;
				display: table;
				border-collapse: separate;
			}
			@charset "UTF-8"; /*!
 * Bootstrap v4.3.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 The Bootstrap Authors
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */

			*,
			::after,
			::before {
				box-sizing: border-box;
			}
			html {
				font-family: sans-serif;
				line-height: 1.15;
				-webkit-text-size-adjust: 100%;
				-webkit-tap-highlight-color: transparent;
			}
			header {
				display: block;
			}
			body {
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
			button:focus {
				outline: 1px dotted;
				outline: 5px auto -webkit-focus-ring-color;
			}
			button,
			input,
			select {
				margin: 0;
				font-family: inherit;
				font-size: inherit;
				line-height: inherit;
			}
			button,
			input {
				overflow: visible;
			}
			button,
			select {
				text-transform: none;
			}
			[role="button"] {
				cursor: pointer;
			}
			select {
				word-wrap: normal;
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
			.col,
			.col-1,
			.col-10,
			.col-11,
			.col-12,
			.col-2,
			.col-3,
			.col-4,
			.col-5,
			.col-6,
			.col-7,
			.col-8,
			.col-9,
			.col-lg,
			.col-lg-1,
			.col-lg-10,
			.col-lg-11,
			.col-lg-12,
			.col-lg-2,
			.col-lg-3,
			.col-lg-4,
			.col-lg-5,
			.col-lg-6,
			.col-lg-7,
			.col-lg-8,
			.col-lg-9,
			.col-md,
			.col-md-1,
			.col-md-10,
			.col-md-11,
			.col-md-12,
			.col-md-2,
			.col-md-3,
			.col-md-4,
			.col-md-5,
			.col-md-6,
			.col-md-7,
			.col-md-8,
			.col-md-9,
			.col-sm,
			.col-sm-1,
			.col-sm-10,
			.col-sm-11,
			.col-sm-12,
			.col-sm-2,
			.col-sm-3,
			.col-sm-4,
			.col-sm-5,
			.col-sm-6,
			.col-sm-7,
			.col-sm-8,
			.col-sm-9 {
				position: relative;
				width: 100%;
				padding-right: 15px;
				padding-left: 15px;
			}
			.col {
				flex-basis: 0;
				flex-grow: 1;
				max-width: 100%;
			}
			.col-1 {
				flex: 0 0 8.333333%;
				max-width: 8.333333%;
			}
			.col-2 {
				flex: 0 0 16.666667%;
				max-width: 16.666667%;
			}
			.col-3 {
				flex: 0 0 25%;
				max-width: 25%;
			}
			.col-4 {
				flex: 0 0 33.333333%;
				max-width: 33.333333%;
			}
			.col-5 {
				flex: 0 0 41.666667%;
				max-width: 41.666667%;
			}
			.col-6 {
				flex: 0 0 50%;
				max-width: 50%;
			}
			.col-7 {
				flex: 0 0 58.333333%;
				max-width: 58.333333%;
			}
			.col-8 {
				flex: 0 0 66.666667%;
				max-width: 66.666667%;
			}
			.col-9 {
				flex: 0 0 75%;
				max-width: 75%;
			}
			.col-10 {
				flex: 0 0 83.333333%;
				max-width: 83.333333%;
			}
			.col-11 {
				flex: 0 0 91.666667%;
				max-width: 91.666667%;
			}
			.col-12 {
				flex: 0 0 100%;
				max-width: 100%;
			}
			.col-xs-offset-1,
			.offset-1 {
				margin-left: 8.333333%;
			}
			.col-xs-offset-2,
			.offset-2 {
				margin-left: 16.666667%;
			}
			.col-xs-offset-3,
			.offset-3 {
				margin-left: 25%;
			}
			.col-xs-offset-4,
			.offset-4 {
				margin-left: 33.333333%;
			}
			.col-xs-offset-5,
			.offset-5 {
				margin-left: 41.666667%;
			}
			.col-xs-offset-6,
			.offset-6 {
				margin-left: 50%;
			}
			.col-xs-offset-7,
			.offset-7 {
				margin-left: 58.333333%;
			}
			.col-xs-offset-8,
			.offset-8 {
				margin-left: 66.666667%;
			}
			.col-xs-offset-9,
			.offset-9 {
				margin-left: 75%;
			}
			.col-xs-offset-10,
			.offset-10 {
				margin-left: 83.333333%;
			}
			.col-xs-offset-11,
			.offset-11 {
				margin-left: 91.666667%;
			}
			@media (min-width: 576px) {
				.col-sm {
					flex-basis: 0;
					flex-grow: 1;
					max-width: 100%;
				}
				.col-sm-1 {
					flex: 0 0 8.333333%;
					max-width: 8.333333%;
				}
				.col-sm-2 {
					flex: 0 0 16.666667%;
					max-width: 16.666667%;
				}
				.col-sm-3 {
					flex: 0 0 25%;
					max-width: 25%;
				}
				.col-sm-4 {
					flex: 0 0 33.333333%;
					max-width: 33.333333%;
				}
				.col-sm-5 {
					flex: 0 0 41.666667%;
					max-width: 41.666667%;
				}
				.col-sm-6 {
					flex: 0 0 50%;
					max-width: 50%;
				}
				.col-sm-7 {
					flex: 0 0 58.333333%;
					max-width: 58.333333%;
				}
				.col-sm-8 {
					flex: 0 0 66.666667%;
					max-width: 66.666667%;
				}
				.col-sm-9 {
					flex: 0 0 75%;
					max-width: 75%;
				}
				.col-sm-10 {
					flex: 0 0 83.333333%;
					max-width: 83.333333%;
				}
				.col-sm-11 {
					flex: 0 0 91.666667%;
					max-width: 91.666667%;
				}
				.col-sm-12 {
					flex: 0 0 100%;
					max-width: 100%;
				}
				.offset-sm-0 {
					margin-left: 0;
				}
				.col-sm-offset-1,
				.offset-sm-1 {
					margin-left: 8.333333%;
				}
				.col-sm-offset-2,
				.offset-sm-2 {
					margin-left: 16.666667%;
				}
				.col-sm-offset-3,
				.offset-sm-3 {
					margin-left: 25%;
				}
				.col-sm-offset-4,
				.offset-sm-4 {
					margin-left: 33.333333%;
				}
				.col-sm-offset-5,
				.offset-sm-5 {
					margin-left: 41.666667%;
				}
				.col-sm-offset-6,
				.offset-sm-6 {
					margin-left: 50%;
				}
				.col-sm-offset-7,
				.offset-sm-7 {
					margin-left: 58.333333%;
				}
				.col-sm-offset-8,
				.offset-sm-8 {
					margin-left: 66.666667%;
				}
				.col-sm-offset-9,
				.offset-sm-9 {
					margin-left: 75%;
				}
				.col-sm-offset-10,
				.offset-sm-10 {
					margin-left: 83.333333%;
				}
				.col-sm-offset-11,
				.offset-sm-11 {
					margin-left: 91.666667%;
				}
			}
			@media (min-width: 768px) {
				.col-md {
					flex-basis: 0;
					flex-grow: 1;
					max-width: 100%;
				}
				.col-md-1 {
					flex: 0 0 8.333333%;
					max-width: 8.333333%;
				}
				.col-md-2 {
					flex: 0 0 16.666667%;
					max-width: 16.666667%;
				}
				.col-md-3 {
					flex: 0 0 25%;
					max-width: 25%;
				}
				.col-md-4 {
					flex: 0 0 33.333333%;
					max-width: 33.333333%;
				}
				.col-md-5 {
					flex: 0 0 41.666667%;
					max-width: 41.666667%;
				}
				.col-md-6 {
					flex: 0 0 50%;
					max-width: 50%;
				}
				.col-md-7 {
					flex: 0 0 58.333333%;
					max-width: 58.333333%;
				}
				.col-md-8 {
					flex: 0 0 66.666667%;
					max-width: 66.666667%;
				}
				.col-md-9 {
					flex: 0 0 75%;
					max-width: 75%;
				}
				.col-md-10 {
					flex: 0 0 83.333333%;
					max-width: 83.333333%;
				}
				.col-md-11 {
					flex: 0 0 91.666667%;
					max-width: 91.666667%;
				}
				.col-md-12 {
					flex: 0 0 100%;
					max-width: 100%;
				}
				.offset-md-0 {
					margin-left: 0;
				}
				.col-md-offset-1,
				.offset-md-1 {
					margin-left: 8.333333%;
				}
				.col-md-offset-2,
				.offset-md-2 {
					margin-left: 16.666667%;
				}
				.col-md-offset-3,
				.offset-md-3 {
					margin-left: 25%;
				}
				.col-md-offset-4,
				.offset-md-4 {
					margin-left: 33.333333%;
				}
				.col-md-offset-5,
				.offset-md-5 {
					margin-left: 41.666667%;
				}
				.col-md-offset-6,
				.offset-md-6 {
					margin-left: 50%;
				}
				.col-md-offset-7,
				.offset-md-7 {
					margin-left: 58.333333%;
				}
				.col-md-offset-8,
				.offset-md-8 {
					margin-left: 66.666667%;
				}
				.col-md-offset-9,
				.offset-md-9 {
					margin-left: 75%;
				}
				.col-md-offset-10,
				.offset-md-10 {
					margin-left: 83.333333%;
				}
				.col-md-offset-11,
				.offset-md-11 {
					margin-left: 91.666667%;
				}
			}
			@media (min-width: 992px) {
				.col-lg {
					flex-basis: 0;
					flex-grow: 1;
					max-width: 100%;
				}
				.col-lg-1 {
					flex: 0 0 8.333333%;
					max-width: 8.333333%;
				}
				.col-lg-2 {
					flex: 0 0 16.666667%;
					max-width: 16.666667%;
				}
				.col-lg-3 {
					flex: 0 0 25%;
					max-width: 25%;
				}
				.col-lg-4 {
					flex: 0 0 33.333333%;
					max-width: 33.333333%;
				}
				.col-lg-5 {
					flex: 0 0 41.666667%;
					max-width: 41.666667%;
				}
				.col-lg-6 {
					flex: 0 0 50%;
					max-width: 50%;
				}
				.col-lg-7 {
					flex: 0 0 58.333333%;
					max-width: 58.333333%;
				}
				.col-lg-8 {
					flex: 0 0 66.666667%;
					max-width: 66.666667%;
				}
				.col-lg-9 {
					flex: 0 0 75%;
					max-width: 75%;
				}
				.col-lg-10 {
					flex: 0 0 83.333333%;
					max-width: 83.333333%;
				}
				.col-lg-11 {
					flex: 0 0 91.666667%;
					max-width: 91.666667%;
				}
				.col-lg-12 {
					flex: 0 0 100%;
					max-width: 100%;
				}
				.offset-lg-0 {
					margin-left: 0;
				}
				.col-lg-offset-1,
				.offset-lg-1 {
					margin-left: 8.333333%;
				}
				.col-lg-offset-2,
				.offset-lg-2 {
					margin-left: 16.666667%;
				}
				.col-lg-offset-3,
				.offset-lg-3 {
					margin-left: 25%;
				}
				.col-lg-offset-4,
				.offset-lg-4 {
					margin-left: 33.333333%;
				}
				.col-lg-offset-5,
				.offset-lg-5 {
					margin-left: 41.666667%;
				}
				.col-lg-offset-6,
				.offset-lg-6 {
					margin-left: 50%;
				}
				.col-lg-offset-7,
				.offset-lg-7 {
					margin-left: 58.333333%;
				}
				.col-lg-offset-8,
				.offset-lg-8 {
					margin-left: 66.666667%;
				}
				.col-lg-offset-9,
				.offset-lg-9 {
					margin-left: 75%;
				}
				.col-lg-offset-10,
				.offset-lg-10 {
					margin-left: 83.333333%;
				}
				.col-lg-offset-11,
				.offset-lg-11 {
					margin-left: 91.666667%;
				}
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
			.form-control::-moz-placeholder {
				color: #6c757d;
				opacity: 1;
			}
			.form-control:-ms-input-placeholder {
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
			select.form-control:focus::-ms-value {
				color: #495057;
				background-color: #fff;
			}
			.col-form-label {
				padding-top: calc(0.375rem + 1px);
				padding-bottom: calc(0.375rem + 1px);
				margin-bottom: 0;
				font-size: inherit;
				line-height: 1.5;
			}
			.col-form-label-lg {
				padding-top: calc(0.5rem + 1px);
				padding-bottom: calc(0.5rem + 1px);
				font-size: 1.25rem;
				line-height: 1.5;
			}
			.col-form-label-sm {
				padding-top: calc(0.25rem + 1px);
				padding-bottom: calc(0.25rem + 1px);
				font-size: 0.875rem;
				line-height: 1.5;
			}
			.form-control-sm {
				height: calc(1.5em + 0.5rem + 2px);
				padding: 0.25rem 0.5rem;
				font-size: 0.875rem;
				line-height: 1.5;
			}
			.form-control-lg {
				height: calc(1.5em + 1rem + 2px);
				padding: 0.5rem 1rem;
				font-size: 1.25rem;
				line-height: 1.5;
			}
			select.form-control[multiple],
			select.form-control[size] {
				height: auto;
			}
			.form-group {
				margin-bottom: 1rem;
			}
			.form-text {
				display: block;
				margin-top: 0.25rem;
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
				transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
					border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
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
			.btn.focus,
			.btn:focus {
				outline: 0;
				box-shadow: 0 0 0 0.2rem rgba(12, 35, 75, 0.25);
			}
			.btn.disabled,
			.btn:disabled {
				opacity: 0.65;
			}
			.btn:not(:disabled):not(.disabled) {
				cursor: pointer;
			}
			a.btn.disabled {
				pointer-events: none;
			}
			.btn-info {
				color: #212529;
				background-color: #81d3eb;
				border-color: #81d3eb;
			}
			.btn-info:hover {
				color: #212529;
				background-color: #60c7e6;
				border-color: #55c4e4;
			}
			.btn-info.focus,
			.btn-info:focus {
				color: #212529;
				background-color: #60c7e6;
				border-color: #55c4e4;
				box-shadow: 0 0 0 0.2rem rgba(115, 185, 206, 0.5);
			}
			.btn-info.disabled,
			.btn-info:disabled {
				color: #212529;
				background-color: #81d3eb;
				border-color: #81d3eb;
			}
			.btn-info:not(:disabled):not(.disabled).active,
			.btn-info:not(:disabled):not(.disabled):active {
				color: #212529;
				background-color: #55c4e4;
				border-color: #4ac0e2;
			}
			.btn-info:not(:disabled):not(.disabled).active:focus,
			.btn-info:not(:disabled):not(.disabled):active:focus {
				box-shadow: 0 0 0 0.2rem rgba(115, 185, 206, 0.5);
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
			.btn-link.focus,
			.btn-link:focus {
				text-decoration: underline;
			}
			.btn-link.disabled,
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
			.btn-group-sm > .btn,
			.btn-sm {
				padding: 0.25rem 0.5rem;
				font-size: 0.875rem;
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
			.btn-group {
				position: relative;
				display: inline-flex;
				vertical-align: middle;
			}
			.btn-group > .btn {
				position: relative;
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
				display: flex;
				flex-wrap: wrap;
				align-items: stretch;
				width: 100%;
			}
			.input-group > .form-control {
				position: relative;
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
			.input-group-btn {
				display: flex;
			}
			.input-group-btn .btn {
				position: relative;
				z-index: 2;
			}
			.input-group-btn .btn:focus {
				z-index: 3;
			}
			.input-group-btn .btn + .btn,
			.input-group-btn .btn + .input-group-text,
			.input-group-btn .input-group-text + .btn,
			.input-group-btn .input-group-text + .input-group-text {
				margin-left: -1px;
			}
			.input-group-btn {
				margin-right: -1px;
			}
			.input-group-text {
				display: flex;
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
			.input-group-lg > .input-group-btn > .btn,
			.input-group-lg > .input-group-btn > .input-group-text {
				padding: 0.5rem 1rem;
				font-size: 1.25rem;
				line-height: 1.5;
			}
			.input-group-sm > .form-control:not(textarea) {
				height: calc(1.5em + 0.5rem + 2px);
			}
			.input-group-sm > .form-control,
			.input-group-sm > .input-group-btn > .btn,
			.input-group-sm > .input-group-btn > .input-group-text {
				padding: 0.25rem 0.5rem;
				font-size: 0.875rem;
				line-height: 1.5;
			}
			.page-link {
				position: relative;
				display: block;
				padding: 0.5rem 0.75rem;
				margin-left: -1px;
				line-height: 1.25;
				color: #1e5288;
				background-color: #fff;
				border: 1px solid #dee2e6;
			}
			.page-link:hover {
				z-index: 2;
				color: #001c48;
				text-decoration: none;
				background-color: #e9ecef;
				border-color: #dee2e6;
			}
			.page-link:focus {
				z-index: 3;
				outline: 0;
				box-shadow: 0 0 0 0.2rem rgba(12, 35, 75, 0.25);
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
				transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
					border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
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
			.label-info {
				color: #212529;
				background-color: #81d3eb;
			}
			a.label-info:focus,
			a.label-info:hover {
				color: #212529;
				background-color: #55c4e4;
			}
			a.focus.label-info,
			a.label-info:focus {
				outline: 0;
				box-shadow: 0 0 0 0.2rem rgba(129, 211, 235, 0.5);
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
			.popover {
				position: absolute;
				top: 0;
				left: 0;
				z-index: 1060;
				display: block;
				max-width: 276px;
				font-family: proxima-nova, calibri, -apple-system, BlinkMacSystemFont,
					"Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
					"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
					"Noto Color Emoji";
				font-style: normal;
				font-weight: 400;
				line-height: 1.5;
				text-align: left;
				text-align: start;
				text-decoration: none;
				text-shadow: none;
				text-transform: none;
				letter-spacing: normal;
				word-break: normal;
				word-spacing: normal;
				white-space: normal;
				line-break: auto;
				font-size: 1rem;
				word-wrap: break-word;
				background-color: #fff;
				background-clip: padding-box;
				border: 1px solid rgba(0, 0, 0, 0.2);
			}
			.popover-header {
				padding: 0.5rem 0.75rem;
				margin-bottom: 0;
				font-size: 1rem;
				background-color: #f7f7f7;
				border-bottom: 1px solid #ebebeb;
			}
			.popover-header:empty {
				display: none;
			}
			.popover-body {
				padding: 0.5rem 0.75rem;
				color: #212529;
			}
			@-webkit-keyframes spinner-border {
				to {
					transform: rotate(360deg);
				}
			}
			@keyframes spinner-border {
				to {
					transform: rotate(360deg);
				}
			}
			@-webkit-keyframes spinner-grow {
				0% {
					transform: scale(0);
				}
				50% {
					opacity: 1;
					transform: none;
				}
			}
			@keyframes spinner-grow {
				0% {
					transform: scale(0);
				}
				50% {
					opacity: 1;
					transform: none;
				}
			}
			.border {
				border: 1px solid #dee2e6 !important;
			}
			.border-top {
				border-top: 1px solid #dee2e6 !important;
			}
			.border-right {
				border-right: 1px solid #dee2e6 !important;
			}
			.border-bottom {
				border-bottom: 1px solid #dee2e6 !important;
			}
			.border-left {
				border-left: 1px solid #dee2e6 !important;
			}
			.border-0 {
				border: 0 !important;
			}
			.border-top-0 {
				border-top: 0 !important;
			}
			.border-right-0 {
				border-right: 0 !important;
			}
			.border-bottom-0 {
				border-bottom: 0 !important;
			}
			.border-left-0 {
				border-left: 0 !important;
			}
			.border-info {
				border-color: #81d3eb !important;
			}
			.clearfix::after {
				display: block;
				clear: both;
				content: "";
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
			.page-header {
				margin-bottom: 1.5rem !important;
			}
			.page-header {
				margin-top: 3rem !important;
			}
			.page-header {
				padding-bottom: 1rem !important;
			}
			.text-left {
				text-align: left !important;
			}
			.text-right {
				text-align: right !important;
			}
			.text-center {
				text-align: center !important;
			}
			@media (min-width: 576px) {
				.text-sm-left {
					text-align: left !important;
				}
				.text-sm-right {
					text-align: right !important;
				}
				.text-sm-center {
					text-align: center !important;
				}
			}
			@media (min-width: 768px) {
				.text-md-left {
					text-align: left !important;
				}
				.text-md-right {
					text-align: right !important;
				}
				.text-md-center {
					text-align: center !important;
				}
			}
			@media (min-width: 992px) {
				.text-lg-left {
					text-align: left !important;
				}
				.text-lg-right {
					text-align: right !important;
				}
				.text-lg-center {
					text-align: center !important;
				}
			}
			.text-info {
				color: #81d3eb !important;
			}
			a.text-info:focus,
			a.text-info:hover {
				color: #3fbce1 !important;
			}
			.text-body {
				color: #212529 !important;
			}
			.text-reset {
				color: inherit !important;
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
				@page {
					size: a3;
				}
				body {
					min-width: 992px !important;
				}
				.label {
					border: 1px solid #000;
				}
			}
			.text-primary {
				color: #0c234b !important;
			}
			.text-info {
				color: #1e5288 !important;
			}
			.arizona-header {
				position: relative;
			}
			body {
				color: #403635;
			}
			a {
				font-weight: 700;
				text-decoration: underline;
			}
			.label-info {
				color: #001c48;
				background-color: #81d3eb;
			}
			.label-default {
				color: #fff;
				background-color: #8b0015;
			}
			.label-primary {
				color: #fff;
				background-color: #0c234b;
			}
			.btn {
				font-weight: 500;
				text-transform: uppercase;
				text-decoration: none;
				letter-spacing: 0.04em;
				white-space: normal;
				border-width: 2px;
			}
			.btn-info {
				color: #001c48;
			}
			.btn-link {
				color: #8b0015;
			}
			.btn-default {
				color: #fff;
				background-color: #8b0015;
			}
			.btn-default:hover {
				color: #fff;
				background-color: #ab0520;
			}
			.btn-default:active {
				background-color: #a50019;
			}
			.btn-primary {
				color: #fff;
				background-color: #0c234b;
			}
			.btn-primary:hover {
				color: #fff;
				background-color: #1e5288;
			}
			.btn-primary:active {
				background-color: #133877;
			}
			.btn-hollow-default {
				color: #8b0015;
				border-color: #8b0015;
			}
			.btn-hollow-default:hover {
				color: #fff;
				background-color: #8b0015;
			}
			.btn-hollow-primary {
				color: #0c234b;
				border-color: #0c234b;
			}
			.btn-hollow-primary:hover {
				color: #fff;
				background-color: #0c234b;
			}
			.btn-info:hover {
				color: #001c48;
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
			.page-link {
				color: #1e5288;
			}
			.page-link:hover {
				color: #001c48;
			}
			@charset "UTF-8";
			@import url(https://cdn.uadigital.arizona.edu/lib/ua-brand-fonts/1.0.0/milo.min.css); /*!
 * Bootstrap v3.4.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */ /*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */
			html {
				font-family: sans-serif;
				-ms-text-size-adjust: 100%;
				-webkit-text-size-adjust: 100%;
			}
			body {
				margin: 0;
			}
			header,
			menu {
				display: block;
			}
			[hidden] {
				display: none;
			}
			a {
				background-color: transparent;
			}
			a:active,
			a:hover {
				outline: 0;
			}
			button,
			input,
			select {
				color: inherit;
				font: inherit;
				margin: 0;
			}
			button {
				overflow: visible;
			}
			button,
			select {
				text-transform: none;
			}
			button,
			html input[type="button"],
			input[type="reset"],
			input[type="submit"] {
				-webkit-appearance: button;
				cursor: pointer;
			}
			button[disabled],
			html input[disabled] {
				cursor: default;
			}
			button::-moz-focus-inner,
			input::-moz-focus-inner {
				border: 0;
				padding: 0;
			}
			input {
				line-height: normal;
			}
			input[type="checkbox"],
			input[type="radio"] {
				-webkit-box-sizing: border-box;
				box-sizing: border-box;
				padding: 0;
			}
			input[type="number"]::-webkit-inner-spin-button,
			input[type="number"]::-webkit-outer-spin-button {
				height: auto;
			}
			input[type="search"] {
				-webkit-appearance: textfield;
				-webkit-box-sizing: content-box;
				box-sizing: content-box;
			}
			input[type="search"]::-webkit-search-cancel-button,
			input[type="search"]::-webkit-search-decoration {
				-webkit-appearance: none;
			} /*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */
			@media print {
				*,
				:after,
				:before {
					color: #000 !important;
					text-shadow: none !important;
					background: 0 0 !important;
					-webkit-box-shadow: none !important;
					box-shadow: none !important;
				}
				a,
				a:visited {
					text-decoration: underline;
				}
				a[href]:after {
					content: " (" attr(href) ")";
				}
				a[href^="#"]:after,
				a[href^="javascript:"]:after {
					content: "";
				}
				.label {
					border: 1px solid #000;
				}
			}
			* {
				-webkit-box-sizing: border-box;
				box-sizing: border-box;
			}
			:after,
			:before {
				-webkit-box-sizing: border-box;
				box-sizing: border-box;
			}
			html {
				font-size: 10px;
				-webkit-tap-highlight-color: transparent;
			}
			body {
				font-family: MiloWeb-Text, Verdana, Geneva, sans-serif;
				font-size: 16px;
				line-height: 1.5;
				color: #403635;
				background-color: #fff;
			}
			button,
			input,
			select {
				font-family: inherit;
				font-size: inherit;
				line-height: inherit;
			}
			a {
				color: #8b0015;
				text-decoration: none;
			}
			a:focus,
			a:hover {
				color: #8b0015;
				text-decoration: underline;
			}
			a:focus {
				outline: 5px auto -webkit-focus-ring-color;
				outline-offset: -2px;
			}
			.sr-only {
				position: absolute;
				width: 1px;
				height: 1px;
				padding: 0;
				margin: -1px;
				overflow: hidden;
				clip: rect(0, 0, 0, 0);
				border: 0;
			}
			[role="button"] {
				cursor: pointer;
			}
			.text-left {
				text-align: left;
			}
			.text-right {
				text-align: right;
			}
			.text-center {
				text-align: center;
			}
			.text-primary {
				color: #0c234b;
			}
			a.text-primary:focus,
			a.text-primary:hover {
				color: #050e1f;
			}
			.text-info {
				color: #001c48;
			}
			a.text-info:focus,
			a.text-info:hover {
				color: #000815;
			}
			.page-header {
				padding-bottom: 11px;
				margin: 48px 0 24px;
				border-bottom: 1px solid #fff;
			}
			.col-lg-1,
			.col-lg-10,
			.col-lg-11,
			.col-lg-12,
			.col-lg-2,
			.col-lg-3,
			.col-lg-4,
			.col-lg-5,
			.col-lg-6,
			.col-lg-7,
			.col-lg-8,
			.col-lg-9,
			.col-md-1,
			.col-md-10,
			.col-md-11,
			.col-md-12,
			.col-md-2,
			.col-md-3,
			.col-md-4,
			.col-md-5,
			.col-md-6,
			.col-md-7,
			.col-md-8,
			.col-md-9,
			.col-sm-1,
			.col-sm-10,
			.col-sm-11,
			.col-sm-12,
			.col-sm-2,
			.col-sm-3,
			.col-sm-4,
			.col-sm-5,
			.col-sm-6,
			.col-sm-7,
			.col-sm-8,
			.col-sm-9,
			.col-xs-1,
			.col-xs-10,
			.col-xs-11,
			.col-xs-12,
			.col-xs-2,
			.col-xs-3,
			.col-xs-4,
			.col-xs-5,
			.col-xs-6,
			.col-xs-7,
			.col-xs-8,
			.col-xs-9 {
				position: relative;
				min-height: 1px;
				padding-right: 16px;
				padding-left: 16px;
			}
			.col-xs-1,
			.col-xs-10,
			.col-xs-11,
			.col-xs-12,
			.col-xs-2,
			.col-xs-3,
			.col-xs-4,
			.col-xs-5,
			.col-xs-6,
			.col-xs-7,
			.col-xs-8,
			.col-xs-9 {
				float: left;
			}
			.col-xs-1 {
				width: 8.333333%;
			}
			.col-xs-2 {
				width: 16.666667%;
			}
			.col-xs-3 {
				width: 25%;
			}
			.col-xs-4 {
				width: 33.333333%;
			}
			.col-xs-5 {
				width: 41.666667%;
			}
			.col-xs-6 {
				width: 50%;
			}
			.col-xs-7 {
				width: 58.333333%;
			}
			.col-xs-8 {
				width: 66.666667%;
			}
			.col-xs-9 {
				width: 75%;
			}
			.col-xs-10 {
				width: 83.333333%;
			}
			.col-xs-11 {
				width: 91.666667%;
			}
			.col-xs-12 {
				width: 100%;
			}
			.col-xs-offset-0 {
				margin-left: 0;
			}
			.col-xs-offset-1 {
				margin-left: 8.333333%;
			}
			.col-xs-offset-2 {
				margin-left: 16.666667%;
			}
			.col-xs-offset-3 {
				margin-left: 25%;
			}
			.col-xs-offset-4 {
				margin-left: 33.333333%;
			}
			.col-xs-offset-5 {
				margin-left: 41.666667%;
			}
			.col-xs-offset-6 {
				margin-left: 50%;
			}
			.col-xs-offset-7 {
				margin-left: 58.333333%;
			}
			.col-xs-offset-8 {
				margin-left: 66.666667%;
			}
			.col-xs-offset-9 {
				margin-left: 75%;
			}
			.col-xs-offset-10 {
				margin-left: 83.333333%;
			}
			.col-xs-offset-11 {
				margin-left: 91.666667%;
			}
			.col-xs-offset-12 {
				margin-left: 100%;
			}
			@media (min-width: 768px) {
				.col-sm-1,
				.col-sm-10,
				.col-sm-11,
				.col-sm-12,
				.col-sm-2,
				.col-sm-3,
				.col-sm-4,
				.col-sm-5,
				.col-sm-6,
				.col-sm-7,
				.col-sm-8,
				.col-sm-9 {
					float: left;
				}
				.col-sm-1 {
					width: 8.333333%;
				}
				.col-sm-2 {
					width: 16.666667%;
				}
				.col-sm-3 {
					width: 25%;
				}
				.col-sm-4 {
					width: 33.333333%;
				}
				.col-sm-5 {
					width: 41.666667%;
				}
				.col-sm-6 {
					width: 50%;
				}
				.col-sm-7 {
					width: 58.333333%;
				}
				.col-sm-8 {
					width: 66.666667%;
				}
				.col-sm-9 {
					width: 75%;
				}
				.col-sm-10 {
					width: 83.333333%;
				}
				.col-sm-11 {
					width: 91.666667%;
				}
				.col-sm-12 {
					width: 100%;
				}
				.col-sm-offset-0 {
					margin-left: 0;
				}
				.col-sm-offset-1 {
					margin-left: 8.333333%;
				}
				.col-sm-offset-2 {
					margin-left: 16.666667%;
				}
				.col-sm-offset-3 {
					margin-left: 25%;
				}
				.col-sm-offset-4 {
					margin-left: 33.333333%;
				}
				.col-sm-offset-5 {
					margin-left: 41.666667%;
				}
				.col-sm-offset-6 {
					margin-left: 50%;
				}
				.col-sm-offset-7 {
					margin-left: 58.333333%;
				}
				.col-sm-offset-8 {
					margin-left: 66.666667%;
				}
				.col-sm-offset-9 {
					margin-left: 75%;
				}
				.col-sm-offset-10 {
					margin-left: 83.333333%;
				}
				.col-sm-offset-11 {
					margin-left: 91.666667%;
				}
				.col-sm-offset-12 {
					margin-left: 100%;
				}
			}
			@media (min-width: 992px) {
				.col-md-1,
				.col-md-10,
				.col-md-11,
				.col-md-12,
				.col-md-2,
				.col-md-3,
				.col-md-4,
				.col-md-5,
				.col-md-6,
				.col-md-7,
				.col-md-8,
				.col-md-9 {
					float: left;
				}
				.col-md-1 {
					width: 8.333333%;
				}
				.col-md-2 {
					width: 16.666667%;
				}
				.col-md-3 {
					width: 25%;
				}
				.col-md-4 {
					width: 33.333333%;
				}
				.col-md-5 {
					width: 41.666667%;
				}
				.col-md-6 {
					width: 50%;
				}
				.col-md-7 {
					width: 58.333333%;
				}
				.col-md-8 {
					width: 66.666667%;
				}
				.col-md-9 {
					width: 75%;
				}
				.col-md-10 {
					width: 83.333333%;
				}
				.col-md-11 {
					width: 91.666667%;
				}
				.col-md-12 {
					width: 100%;
				}
				.col-md-offset-0 {
					margin-left: 0;
				}
				.col-md-offset-1 {
					margin-left: 8.333333%;
				}
				.col-md-offset-2 {
					margin-left: 16.666667%;
				}
				.col-md-offset-3 {
					margin-left: 25%;
				}
				.col-md-offset-4 {
					margin-left: 33.333333%;
				}
				.col-md-offset-5 {
					margin-left: 41.666667%;
				}
				.col-md-offset-6 {
					margin-left: 50%;
				}
				.col-md-offset-7 {
					margin-left: 58.333333%;
				}
				.col-md-offset-8 {
					margin-left: 66.666667%;
				}
				.col-md-offset-9 {
					margin-left: 75%;
				}
				.col-md-offset-10 {
					margin-left: 83.333333%;
				}
				.col-md-offset-11 {
					margin-left: 91.666667%;
				}
				.col-md-offset-12 {
					margin-left: 100%;
				}
			}
			@media (min-width: 1200px) {
				.col-lg-1,
				.col-lg-10,
				.col-lg-11,
				.col-lg-12,
				.col-lg-2,
				.col-lg-3,
				.col-lg-4,
				.col-lg-5,
				.col-lg-6,
				.col-lg-7,
				.col-lg-8,
				.col-lg-9 {
					float: left;
				}
				.col-lg-1 {
					width: 8.333333%;
				}
				.col-lg-2 {
					width: 16.666667%;
				}
				.col-lg-3 {
					width: 25%;
				}
				.col-lg-4 {
					width: 33.333333%;
				}
				.col-lg-5 {
					width: 41.666667%;
				}
				.col-lg-6 {
					width: 50%;
				}
				.col-lg-7 {
					width: 58.333333%;
				}
				.col-lg-8 {
					width: 66.666667%;
				}
				.col-lg-9 {
					width: 75%;
				}
				.col-lg-10 {
					width: 83.333333%;
				}
				.col-lg-11 {
					width: 91.666667%;
				}
				.col-lg-12 {
					width: 100%;
				}
				.col-lg-offset-0 {
					margin-left: 0;
				}
				.col-lg-offset-1 {
					margin-left: 8.333333%;
				}
				.col-lg-offset-2 {
					margin-left: 16.666667%;
				}
				.col-lg-offset-3 {
					margin-left: 25%;
				}
				.col-lg-offset-4 {
					margin-left: 33.333333%;
				}
				.col-lg-offset-5 {
					margin-left: 41.666667%;
				}
				.col-lg-offset-6 {
					margin-left: 50%;
				}
				.col-lg-offset-7 {
					margin-left: 58.333333%;
				}
				.col-lg-offset-8 {
					margin-left: 66.666667%;
				}
				.col-lg-offset-9 {
					margin-left: 75%;
				}
				.col-lg-offset-10 {
					margin-left: 83.333333%;
				}
				.col-lg-offset-11 {
					margin-left: 91.666667%;
				}
				.col-lg-offset-12 {
					margin-left: 100%;
				}
			}
			label {
				display: inline-block;
				max-width: 100%;
				margin-bottom: 5px;
				font-weight: 700;
			}
			input[type="search"] {
				-webkit-box-sizing: border-box;
				box-sizing: border-box;
				-webkit-appearance: none;
				-moz-appearance: none;
				appearance: none;
			}
			input[type="checkbox"],
			input[type="radio"] {
				margin: 4px 0 0;
				line-height: normal;
			}
			input[type="checkbox"].disabled,
			input[type="checkbox"][disabled],
			input[type="radio"].disabled,
			input[type="radio"][disabled] {
				cursor: not-allowed;
			}
			input[type="file"] {
				display: block;
			}
			input[type="range"] {
				display: block;
				width: 100%;
			}
			select[multiple],
			select[size] {
				height: auto;
			}
			input[type="checkbox"]:focus,
			input[type="file"]:focus,
			input[type="radio"]:focus {
				outline: 5px auto -webkit-focus-ring-color;
				outline-offset: -2px;
			}
			.form-control {
				display: block;
				width: 100%;
				height: 38px;
				padding: 6px 12px;
				font-size: 16px;
				line-height: 1.5;
				color: #49595e;
				background-color: #fff;
				background-image: none;
				border: 1px solid #cbd1e0;
				border-radius: 0;
				-webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
				box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
				-webkit-transition: border-color ease-in-out 0.15s,
					box-shadow ease-in-out 0.15s;
				-webkit-transition: border-color ease-in-out 0.15s,
					-webkit-box-shadow ease-in-out 0.15s;
				transition: border-color ease-in-out 0.15s,
					-webkit-box-shadow ease-in-out 0.15s;
				transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
				transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s,
					-webkit-box-shadow ease-in-out 0.15s;
			}
			.form-control:focus {
				border-color: #9eabae;
				outline: 0;
				-webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
					0 0 8px rgba(158, 171, 174, 0.6);
				box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
					0 0 8px rgba(158, 171, 174, 0.6);
			}
			.form-control::-moz-placeholder {
				color: #49595e;
				opacity: 1;
			}
			.form-control:-ms-input-placeholder {
				color: #49595e;
			}
			.form-control::-webkit-input-placeholder {
				color: #49595e;
			}
			.form-control::-ms-expand {
				background-color: transparent;
				border: 0;
			}
			.form-control[disabled],
			.form-control[readonly] {
				background-color: #fff;
				opacity: 1;
			}
			.form-control[disabled] {
				cursor: not-allowed;
			}
			@media screen and (-webkit-min-device-pixel-ratio: 0) {
				input[type="date"].form-control,
				input[type="datetime-local"].form-control,
				input[type="month"].form-control,
				input[type="time"].form-control {
					line-height: 38px;
				}
				.input-group-sm input[type="date"],
				.input-group-sm input[type="datetime-local"],
				.input-group-sm input[type="month"],
				.input-group-sm input[type="time"],
				.input-group-sm > .input-group-btn > input.btn[type="date"],
				.input-group-sm > .input-group-btn > input.btn[type="datetime-local"],
				.input-group-sm > .input-group-btn > input.btn[type="month"],
				.input-group-sm > .input-group-btn > input.btn[type="time"],
				.input-group-sm > input.form-control[type="date"],
				.input-group-sm > input.form-control[type="datetime-local"],
				.input-group-sm > input.form-control[type="month"],
				.input-group-sm > input.form-control[type="time"],
				.input-group-sm > input.input-group-addon[type="date"],
				.input-group-sm > input.input-group-addon[type="datetime-local"],
				.input-group-sm > input.input-group-addon[type="month"],
				.input-group-sm > input.input-group-addon[type="time"],
				input[type="date"].input-sm,
				input[type="datetime-local"].input-sm,
				input[type="month"].input-sm,
				input[type="time"].input-sm {
					line-height: 33px;
				}
				.input-group-lg input[type="date"],
				.input-group-lg input[type="datetime-local"],
				.input-group-lg input[type="month"],
				.input-group-lg input[type="time"],
				.input-group-lg > .input-group-btn > input.btn[type="date"],
				.input-group-lg > .input-group-btn > input.btn[type="datetime-local"],
				.input-group-lg > .input-group-btn > input.btn[type="month"],
				.input-group-lg > .input-group-btn > input.btn[type="time"],
				.input-group-lg > input.form-control[type="date"],
				.input-group-lg > input.form-control[type="datetime-local"],
				.input-group-lg > input.form-control[type="month"],
				.input-group-lg > input.form-control[type="time"],
				.input-group-lg > input.input-group-addon[type="date"],
				.input-group-lg > input.input-group-addon[type="datetime-local"],
				.input-group-lg > input.input-group-addon[type="month"],
				.input-group-lg > input.input-group-addon[type="time"],
				input[type="date"].input-lg,
				input[type="datetime-local"].input-lg,
				input[type="month"].input-lg,
				input[type="time"].input-lg {
					line-height: 49px;
				}
			}
			.form-group {
				margin-bottom: 15px;
			}
			.input-group-sm > .form-control,
			.input-group-sm > .input-group-addon,
			.input-group-sm > .input-group-btn > .btn,
			.input-sm {
				height: 33px;
				padding: 5px 10px;
				font-size: 14px;
				line-height: 1.5;
				border-radius: 0;
			}
			.input-group-sm > .input-group-btn > select.btn,
			.input-group-sm > select.form-control,
			.input-group-sm > select.input-group-addon,
			select.input-sm {
				height: 33px;
				line-height: 33px;
			}
			.input-group-sm > .input-group-btn > select.btn[multiple],
			.input-group-sm > select.form-control[multiple],
			.input-group-sm > select.input-group-addon[multiple],
			select[multiple].input-sm {
				height: auto;
			}
			.form-group-sm .form-control {
				height: 33px;
				padding: 5px 10px;
				font-size: 14px;
				line-height: 1.5;
				border-radius: 0;
			}
			.form-group-sm select.form-control {
				height: 33px;
				line-height: 33px;
			}
			.form-group-sm select[multiple].form-control {
				height: auto;
			}
			.input-group-lg > .form-control,
			.input-group-lg > .input-group-addon,
			.input-group-lg > .input-group-btn > .btn,
			.input-lg {
				height: 49px;
				padding: 10px 16px;
				font-size: 20px;
				line-height: 1.333333;
				border-radius: 0;
			}
			.input-group-lg > .input-group-btn > select.btn,
			.input-group-lg > select.form-control,
			.input-group-lg > select.input-group-addon,
			select.input-lg {
				height: 49px;
				line-height: 49px;
			}
			.input-group-lg > .input-group-btn > select.btn[multiple],
			.input-group-lg > select.form-control[multiple],
			.input-group-lg > select.input-group-addon[multiple],
			select[multiple].input-lg {
				height: auto;
			}
			.form-group-lg .form-control {
				height: 49px;
				padding: 10px 16px;
				font-size: 20px;
				line-height: 1.333333;
				border-radius: 0;
			}
			.form-group-lg select.form-control {
				height: 49px;
				line-height: 49px;
			}
			.form-group-lg select[multiple].form-control {
				height: auto;
			}
			.btn {
				display: inline-block;
				margin-bottom: 0;
				font-weight: 700;
				text-align: center;
				white-space: nowrap;
				vertical-align: middle;
				-ms-touch-action: manipulation;
				touch-action: manipulation;
				cursor: pointer;
				background-image: none;
				border: 1px solid transparent;
				padding: 6px 12px;
				font-size: 16px;
				line-height: 1.5;
				border-radius: 0;
				-webkit-user-select: none;
				-moz-user-select: none;
				-ms-user-select: none;
				user-select: none;
			}
			.btn.focus,
			.btn:active.focus,
			.btn:active:focus,
			.btn:focus {
				outline: 5px auto -webkit-focus-ring-color;
				outline-offset: -2px;
			}
			.btn.focus,
			.btn:focus,
			.btn:hover {
				color: #fff;
				text-decoration: none;
			}
			.btn:active {
				background-image: none;
				outline: 0;
				-webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
				box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
			}
			.btn.disabled,
			.btn[disabled] {
				cursor: not-allowed;
				opacity: 0.65;
				-webkit-box-shadow: none;
				box-shadow: none;
			}
			a.btn.disabled {
				pointer-events: none;
			}
			.btn-default {
				color: #fff;
				background-color: #8b0015;
				border-color: #8b0015;
			}
			.btn-default.focus,
			.btn-default:focus {
				color: #fff;
				background-color: #58000d;
				border-color: #0c0002;
			}
			.btn-default:hover {
				color: #fff;
				background-color: #58000d;
				border-color: #4e000c;
			}
			.btn-default:active {
				color: #fff;
				background-color: #58000d;
				background-image: none;
				border-color: #4e000c;
			}
			.btn-default:active.focus,
			.btn-default:active:focus,
			.btn-default:active:hover {
				color: #fff;
				background-color: #340008;
				border-color: #0c0002;
			}
			.btn-default.disabled.focus,
			.btn-default.disabled:focus,
			.btn-default.disabled:hover,
			.btn-default[disabled].focus,
			.btn-default[disabled]:focus,
			.btn-default[disabled]:hover {
				background-color: #8b0015;
				border-color: #8b0015;
			}
			.btn-primary {
				color: #fff;
				background-color: #0c234b;
				border-color: #0c234b;
			}
			.btn-primary.focus,
			.btn-primary:focus {
				color: #fff;
				background-color: #050e1f;
				border-color: #000;
			}
			.btn-primary:hover {
				color: #fff;
				background-color: #050e1f;
				border-color: #040a16;
			}
			.btn-primary:active {
				color: #fff;
				background-color: #050e1f;
				background-image: none;
				border-color: #040a16;
			}
			.btn-primary:active.focus,
			.btn-primary:active:focus,
			.btn-primary:active:hover {
				color: #fff;
				background-color: #000;
				border-color: #000;
			}
			.btn-info {
				color: #fff;
				background-color: #81d3eb;
				border-color: #81d3eb;
			}
			.btn-info.focus,
			.btn-info:focus {
				color: #fff;
				background-color: #55c4e4;
				border-color: #20a5cc;
			}
			.btn-info:hover {
				color: #fff;
				background-color: #55c4e4;
				border-color: #4cc1e3;
			}
			.btn-info:active {
				color: #fff;
				background-color: #55c4e4;
				background-image: none;
				border-color: #4cc1e3;
			}
			.btn-info:active.focus,
			.btn-info:active:focus,
			.btn-info:active:hover {
				color: #fff;
				background-color: #36b9df;
				border-color: #20a5cc;
			}
			.btn-info.disabled.focus,
			.btn-info.disabled:focus,
			.btn-info.disabled:hover,
			.btn-info[disabled].focus,
			.btn-info[disabled]:focus,
			.btn-info[disabled]:hover {
				background-color: #81d3eb;
				border-color: #81d3eb;
			}
			.btn-link {
				font-weight: 400;
				color: #8b0015;
				border-radius: 0;
			}
			.btn-link,
			.btn-link:active,
			.btn-link[disabled] {
				background-color: transparent;
				-webkit-box-shadow: none;
				box-shadow: none;
			}
			.btn-link,
			.btn-link:active,
			.btn-link:focus,
			.btn-link:hover {
				border-color: transparent;
			}
			.btn-link:focus,
			.btn-link:hover {
				color: #8b0015;
				text-decoration: underline;
				background-color: transparent;
			}
			.btn-link[disabled]:focus,
			.btn-link[disabled]:hover {
				color: #495057;
				text-decoration: none;
			}
			.btn-group-lg > .btn,
			.btn-lg {
				padding: 10px 16px;
				font-size: 20px;
				line-height: 1.333333;
				border-radius: 0;
			}
			.btn-group-sm > .btn,
			.btn-sm {
				padding: 5px 10px;
				font-size: 14px;
				line-height: 1.5;
				border-radius: 0;
			}
			.btn-group-xs > .btn,
			.btn-xs {
				padding: 1px 5px;
				font-size: 14px;
				line-height: 1.5;
				border-radius: 0;
			}
			.btn-block {
				display: block;
				width: 100%;
			}
			.btn-block + .btn-block {
				margin-top: 5px;
			}
			input[type="button"].btn-block,
			input[type="reset"].btn-block,
			input[type="submit"].btn-block {
				width: 100%;
			}
			.btn-group {
				position: relative;
				display: inline-block;
				vertical-align: middle;
			}
			.btn-group > .btn {
				position: relative;
				float: left;
			}
			.btn-group > .btn:active,
			.btn-group > .btn:focus,
			.btn-group > .btn:hover {
				z-index: 2;
			}
			.btn-group .btn + .btn,
			.btn-group .btn + .btn-group,
			.btn-group .btn-group + .btn,
			.btn-group .btn-group + .btn-group {
				margin-left: -1px;
			}
			.btn-group
				> .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {
				border-radius: 0;
			}
			.btn-group > .btn:first-child {
				margin-left: 0;
			}
			.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;
			}
			.btn-group > .btn:last-child:not(:first-child) {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
			}
			.btn-group > .btn-group {
				float: left;
			}
			.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {
				border-radius: 0;
			}
			.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,
			.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;
			}
			.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
			}
			[data-toggle="buttons"] > .btn input[type="checkbox"],
			[data-toggle="buttons"] > .btn input[type="radio"],
			[data-toggle="buttons"] > .btn-group > .btn input[type="checkbox"],
			[data-toggle="buttons"] > .btn-group > .btn input[type="radio"] {
				position: absolute;
				clip: rect(0, 0, 0, 0);
				pointer-events: none;
			}
			.input-group {
				position: relative;
				display: table;
				border-collapse: separate;
			}
			.input-group[class*="col-"] {
				float: none;
				padding-right: 0;
				padding-left: 0;
			}
			.input-group .form-control {
				position: relative;
				z-index: 2;
				float: left;
				width: 100%;
				margin-bottom: 0;
			}
			.input-group .form-control:focus {
				z-index: 3;
			}
			.input-group .form-control,
			.input-group-addon,
			.input-group-btn {
				display: table-cell;
			}
			.input-group .form-control:not(:first-child):not(:last-child),
			.input-group-addon:not(:first-child):not(:last-child),
			.input-group-btn:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
			.input-group-addon,
			.input-group-btn {
				width: 1%;
				white-space: nowrap;
				vertical-align: middle;
			}
			.input-group-addon {
				padding: 6px 12px;
				font-size: 16px;
				font-weight: 400;
				line-height: 1;
				color: #49595e;
				text-align: center;
				background-color: #fff;
				border: 1px solid #cbd1e0;
				border-radius: 0;
			}
			.input-group-addon.input-sm,
			.input-group-sm > .input-group-addon,
			.input-group-sm > .input-group-btn > .input-group-addon.btn {
				padding: 5px 10px;
				font-size: 14px;
				border-radius: 0;
			}
			.input-group-addon.input-lg,
			.input-group-lg > .input-group-addon,
			.input-group-lg > .input-group-btn > .input-group-addon.btn {
				padding: 10px 16px;
				font-size: 20px;
				border-radius: 0;
			}
			.input-group-addon input[type="checkbox"],
			.input-group-addon input[type="radio"] {
				margin-top: 0;
			}
			.input-group .form-control:first-child,
			.input-group-addon:first-child,
			.input-group-btn:first-child > .btn,
			.input-group-btn:first-child > .btn-group > .btn,
			.input-group-btn:first-child > .dropdown-toggle,
			.input-group-btn:last-child > .btn-group:not(:last-child) > .btn,
			.input-group-btn:last-child
				> .btn:not(:last-child):not(.dropdown-toggle) {
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;
			}
			.input-group-addon:first-child {
				border-right: 0;
			}
			.input-group .form-control:last-child,
			.input-group-addon:last-child,
			.input-group-btn:first-child > .btn-group:not(:first-child) > .btn,
			.input-group-btn:first-child > .btn:not(:first-child),
			.input-group-btn:last-child > .btn,
			.input-group-btn:last-child > .btn-group > .btn,
			.input-group-btn:last-child > .dropdown-toggle {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
			}
			.input-group-addon:last-child {
				border-left: 0;
			}
			.input-group-btn {
				position: relative;
				font-size: 0;
				white-space: nowrap;
			}
			.input-group-btn > .btn {
				position: relative;
			}
			.input-group-btn > .btn + .btn {
				margin-left: -1px;
			}
			.input-group-btn > .btn:active,
			.input-group-btn > .btn:focus,
			.input-group-btn > .btn:hover {
				z-index: 2;
			}
			.input-group-btn:first-child > .btn,
			.input-group-btn:first-child > .btn-group {
				margin-right: -1px;
			}
			.input-group-btn:last-child > .btn,
			.input-group-btn:last-child > .btn-group {
				z-index: 2;
				margin-left: -1px;
			}
			.label {
				display: inline;
				padding: 0.2em 0.6em 0.3em;
				font-size: 75%;
				font-weight: 700;
				line-height: 1;
				color: #fff;
				text-align: center;
				white-space: nowrap;
				vertical-align: baseline;
				border-radius: 0.25em;
			}
			.label:empty {
				display: none;
			}
			.btn .label {
				position: relative;
				top: -1px;
			}
			a.label:focus,
			a.label:hover {
				color: #fff;
				text-decoration: none;
				cursor: pointer;
			}
			.label-default {
				background-color: #ab0520;
			}
			.label-default[href]:focus,
			.label-default[href]:hover {
				background-color: #790417;
			}
			.label-primary {
				background-color: #0c234b;
			}
			.label-primary[href]:focus,
			.label-primary[href]:hover {
				background-color: #050e1f;
			}
			.label-info {
				background-color: #81d3eb;
			}
			.label-info[href]:focus,
			.label-info[href]:hover {
				background-color: #55c4e4;
			}
			@-webkit-keyframes progress-bar-stripes {
				from {
					background-position: 40px 0;
				}
				to {
					background-position: 0 0;
				}
			}
			@keyframes progress-bar-stripes {
				from {
					background-position: 40px 0;
				}
				to {
					background-position: 0 0;
				}
			}
			.popover {
				position: absolute;
				top: 0;
				left: 0;
				z-index: 1060;
				display: none;
				max-width: 276px;
				padding: 1px;
				font-family: MiloWeb-Text, Verdana, Geneva, sans-serif;
				font-style: normal;
				font-weight: 400;
				line-height: 1.5;
				line-break: auto;
				text-align: left;
				text-align: start;
				text-decoration: none;
				text-shadow: none;
				text-transform: none;
				letter-spacing: normal;
				word-break: normal;
				word-spacing: normal;
				word-wrap: normal;
				white-space: normal;
				font-size: 16px;
				background-color: #fff;
				background-clip: padding-box;
				border: 1px solid #1e5288;
				border: 1px solid #1e5288;
				border-radius: 0;
				-webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
				box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
			}
			.popover.top {
				margin-top: -10px;
			}
			.popover.right {
				margin-left: 10px;
			}
			.popover.bottom {
				margin-top: 10px;
			}
			.popover.left {
				margin-left: -10px;
			}
			.popover-content {
				padding: 9px 14px;
			}
			.clearfix:after,
			.clearfix:before {
				display: table;
				content: " ";
			}
			.clearfix:after {
				clear: both;
			}
			.center-block {
				display: block;
				margin-right: auto;
				margin-left: auto;
			}
			.hidden {
				display: none !important;
			}
			@media (max-width: 767px) {
				.hidden-xs {
					display: none !important;
				}
			}
			@media (min-width: 768px) and (max-width: 991px) {
				.hidden-sm {
					display: none !important;
				}
			}
			@media (min-width: 992px) and (max-width: 1199px) {
				.hidden-md {
					display: none !important;
				}
			}
			@media (min-width: 1200px) {
				.hidden-lg {
					display: none !important;
				}
			}
			html {
				font-size: 16px;
			}
			body {
				font-family: MiloWeb, Verdana, Geneva, sans-serif;
				-webkit-font-smoothing: antialiased;
				-moz-osx-font-smoothing: grayscale;
				text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
			}
			a {
				font-weight: 700;
				-webkit-transition: color 0.1s ease-in-out;
				transition: color 0.1s ease-in-out;
			}
			.page-header {
				margin: 3rem 0 2rem;
				line-height: 1.2;
			}
			label {
				color: #49595e;
			}
			.label {
				border-radius: 0;
			}
			.form-control {
				border: 2px solid #cbd1e0;
			}
			.btn {
				background-clip: border-box;
				font-weight: 700;
				-ms-touch-action: manipulation;
				touch-action: manipulation;
				cursor: pointer;
				letter-spacing: 0.04em;
				text-transform: uppercase;
				white-space: normal;
			}
			.btn-default {
				color: #fff;
				background-color: #8b0015;
				border-color: #8b0015;
				border-width: 2px;
				background-clip: border-box;
				-webkit-transition: all 0.1s ease-in-out;
				transition: all 0.1s ease-in-out;
			}
			.btn-default.focus,
			.btn-default:focus {
				color: #fff;
				background-color: #ab0520;
				border-color: #ab0520;
			}
			.btn-default:hover {
				color: #fff;
				background-color: #ab0520;
				border-color: #ab0520;
			}
			.btn-default:active {
				color: #fff;
				background-color: #ab0520;
				border-color: #ab0520;
			}
			.btn-default:active.focus,
			.btn-default:active:focus,
			.btn-default:active:hover {
				color: #fff;
				background-color: #ab0520;
				border-color: #ab0520;
			}
			.btn-default:active {
				background-image: none;
			}
			.btn-default.disabled,
			.btn-default.disabled.focus,
			.btn-default.disabled:active,
			.btn-default.disabled:focus,
			.btn-default.disabled:hover,
			.btn-default[disabled],
			.btn-default[disabled].focus,
			.btn-default[disabled]:active,
			.btn-default[disabled]:focus,
			.btn-default[disabled]:hover {
				background: #495057;
				border-color: #495057;
			}
			.btn-primary {
				color: #fff;
				background-color: #0c234b;
				border-color: #0c234b;
				border-width: 2px;
				background-clip: border-box;
				-webkit-transition: all 0.1s ease-in-out;
				transition: all 0.1s ease-in-out;
			}
			.btn-primary.focus,
			.btn-primary:focus {
				color: #fff;
				background-color: #1e5288;
				border-color: #1e5288;
			}
			.btn-primary:hover {
				color: #fff;
				background-color: #1e5288;
				border-color: #1e5288;
			}
			.btn-primary:active {
				color: #fff;
				background-color: #1e5288;
				border-color: #1e5288;
			}
			.btn-primary:active.focus,
			.btn-primary:active:focus,
			.btn-primary:active:hover {
				color: #fff;
				background-color: #1e5288;
				border-color: #1e5288;
			}
			.btn-primary:active {
				background-image: none;
			}
			.btn-info {
				color: #fff;
				background-color: #81d3eb;
				border-color: #81d3eb;
				border-width: 2px;
				background-clip: border-box;
				-webkit-transition: all 0.1s ease-in-out;
				transition: all 0.1s ease-in-out;
			}
			.btn-info.focus,
			.btn-info:focus {
				color: #fff;
				background-color: #5c939e;
				border-color: #5c939e;
			}
			.btn-info:hover {
				color: #fff;
				background-color: #5c939e;
				border-color: #5c939e;
			}
			.btn-info:active {
				color: #fff;
				background-color: #5c939e;
				border-color: #5c939e;
			}
			.btn-info:active.focus,
			.btn-info:active:focus,
			.btn-info:active:hover {
				color: #fff;
				background-color: #5c939e;
				border-color: #5c939e;
			}
			.btn-info:active {
				background-image: none;
			}
			.btn-info.disabled,
			.btn-info.disabled.focus,
			.btn-info.disabled:active,
			.btn-info.disabled:focus,
			.btn-info.disabled:hover,
			.btn-info[disabled],
			.btn-info[disabled].focus,
			.btn-info[disabled]:active,
			.btn-info[disabled]:focus,
			.btn-info[disabled]:hover {
				background: #495057;
				border-color: #495057;
			}
			.btn-link {
				font-weight: 700;
			}
			.input-group-btn {
				position: relative;
				white-space: nowrap;
			}
			.input-group-btn > .btn {
				position: relative;
			}
			.input-group-btn > .btn + .btn {
				margin-left: -2px;
			}
			.input-group-btn > .btn:active,
			.input-group-btn > .btn:focus,
			.input-group-btn > .btn:hover {
				z-index: 2;
			}
			.input-group-btn:first-child > .btn,
			.input-group-btn:first-child > .btn-group {
				margin-right: -2px;
				margin-top: 0;
				padding: 5px 8px;
			}
			.input-group-btn:last-child > .btn,
			.input-group-btn:last-child > .btn-group {
				z-index: 2;
				margin-left: -2px;
				margin-top: 0;
				padding: 5px 12px;
			}
			.label {
				font-size: 0.7em;
				font-weight: 700;
				line-height: 1.5;
				color: #fff;
				margin: 0 0.5em;
			}
			.popover {
				padding: 0;
				-webkit-box-shadow: 0 0 0 transparent;
				box-shadow: 0 0 0 transparent;
			}
			.text {
				color: #fff;
				font-family: MiloWeb, Verdana, Geneva, sans-serif;
				font-style: normal;
				font-weight: 500;
			}
			.btn-hollow,
			.btn-hollow-default {
				color: #8b0015;
				background-color: transparent;
				border-color: #8b0015;
				border-width: 2px;
				background-clip: border-box;
				-webkit-transition: all 0.1s ease-in-out;
				transition: all 0.1s ease-in-out;
			}
			.btn-hollow-default.focus,
			.btn-hollow-default:focus,
			.btn-hollow.focus,
			.btn-hollow:focus {
				color: #fff;
				background-color: #ab0520;
				border-color: #ab0520;
			}
			.btn-hollow-default:hover,
			.btn-hollow:hover {
				color: #fff;
				background-color: #ab0520;
				border-color: #ab0520;
			}
			.btn-hollow-default:active,
			.btn-hollow:active {
				color: #fff;
				background-color: #ab0520;
				border-color: #ab0520;
			}
			.btn-hollow-default:active.focus,
			.btn-hollow-default:active:focus,
			.btn-hollow-default:active:hover,
			.btn-hollow:active.focus,
			.btn-hollow:active:focus,
			.btn-hollow:active:hover {
				color: #fff;
				background-color: #ab0520;
				border-color: #ab0520;
			}
			.btn-hollow-default:active,
			.btn-hollow:active {
				background-image: none;
			}
			.btn-hollow-default.disabled,
			.btn-hollow-default.disabled.focus,
			.btn-hollow-default.disabled:active,
			.btn-hollow-default.disabled:focus,
			.btn-hollow-default.disabled:hover,
			.btn-hollow-default[disabled],
			.btn-hollow-default[disabled].focus,
			.btn-hollow-default[disabled]:active,
			.btn-hollow-default[disabled]:focus,
			.btn-hollow-default[disabled]:hover,
			.btn-hollow.disabled,
			.btn-hollow.disabled.focus,
			.btn-hollow.disabled:active,
			.btn-hollow.disabled:focus,
			.btn-hollow.disabled:hover,
			.btn-hollow[disabled],
			.btn-hollow[disabled].focus,
			.btn-hollow[disabled]:active,
			.btn-hollow[disabled]:focus,
			.btn-hollow[disabled]:hover {
				background: #495057;
				border-color: #495057;
			}
			.btn-hollow-primary {
				color: #0c234b;
				background-color: transparent;
				border-color: #0c234b;
				border-width: 2px;
				background-clip: border-box;
				-webkit-transition: all 0.1s ease-in-out;
				transition: all 0.1s ease-in-out;
			}
			.btn-hollow-primary.focus,
			.btn-hollow-primary:focus {
				color: #fff;
				background-color: #1e5288;
				border-color: #1e5288;
			}
			.btn-hollow-primary:hover {
				color: #fff;
				background-color: #1e5288;
				border-color: #1e5288;
			}
			.btn-hollow-primary:active {
				color: #fff;
				background-color: #1e5288;
				border-color: #1e5288;
			}
			.btn-hollow-primary:active.focus,
			.btn-hollow-primary:active:focus,
			.btn-hollow-primary:active:hover {
				color: #fff;
				background-color: #1e5288;
				border-color: #1e5288;
			}
			.btn-hollow-primary:active {
				background-image: none;
			}
			.btn-hollow-primary.disabled,
			.btn-hollow-primary.disabled.focus,
			.btn-hollow-primary.disabled:active,
			.btn-hollow-primary.disabled:focus,
			.btn-hollow-primary.disabled:hover,
			.btn-hollow-primary[disabled],
			.btn-hollow-primary[disabled].focus,
			.btn-hollow-primary[disabled]:active,
			.btn-hollow-primary[disabled]:focus,
			.btn-hollow-primary[disabled]:hover {
				background: #495057;
				border-color: #495057;
			}
			.btn-icon:before {
				line-height: 1.5;
				margin-right: -0.5em;
			}
			.search-form {
				position: relative;
				height: 38px;
			}
			.search-form .form-control::-webkit-input-placeholder {
				font-size: 40px;
				font-size: 0.75em;
			}
			.input-search {
				padding-right: 40px;
				padding-right: 2.5em;
			}
			.btn-search {
				text-indent: -9999em;
				width: 40px;
				height: 40px;
				top: 0;
				right: 0;
				width: 2.5rem;
				height: 2.5rem;
				border: 0;
				background-repeat: no-repeat;
				background-size: 24px 24px;
				background-size: 1.5rem 1.5rem;
				background-position: 7px 6px;
				background-position: right 7px top 6px;
				outline: 0;
				position: absolute;
				z-index: 0;
				background-image: url(img/search-chili.svg);
				background-color: transparent;
			}
			.btn-search:active,
			.btn-search:focus,
			.btn-search:hover {
				opacity: 0.5;
			}
			@media (max-width: 767px) {
				.text-left-xs {
					text-align: left;
				}
				.text-center-xs {
					text-align: center;
				}
				.text-right-xs {
					text-align: right;
				}
			}
			@media (min-width: 768px) and (max-width: 991px) {
				.text-left-sm {
					text-align: left;
				}
				.text-center-sm {
					text-align: center;
				}
				.text-right-sm {
					text-align: right;
				}
			}
			@media (min-width: 992px) and (max-width: 1199px) {
				.text-left-md {
					text-align: left;
				}
				.text-center-md {
					text-align: center;
				}
				.text-right-md {
					text-align: right;
				}
			}
			@media (min-width: 1200px) {
				.text-left-lg {
					text-align: left;
				}
				.text-center-lg {
					text-align: center;
				}
				.text-right-lg {
					text-align: right;
				}
			}
			.bottom-buffer-xs-0 {
				margin-bottom: 0;
			}
			.bottom-buffer-1,
			.bottom-buffer-xs-1 {
				margin-bottom: 1px;
			}
			.bottom-buffer-5,
			.bottom-buffer-xs-5 {
				margin-bottom: 5px;
			}
			.bottom-buffer-10,
			.bottom-buffer-xs-10 {
				margin-bottom: 10px;
			}
			.bottom-buffer-15,
			.bottom-buffer-xs-15 {
				margin-bottom: 15px;
			}
			.bottom-buffer-20,
			.bottom-buffer-xs-20 {
				margin-bottom: 20px;
			}
			.bottom-buffer-25,
			.bottom-buffer-xs-25 {
				margin-bottom: 25px;
			}
			.bottom-buffer-30,
			.bottom-buffer-xs-30 {
				margin-bottom: 30px;
			}
			.bottom-buffer-50,
			.bottom-buffer-xs-50 {
				margin-bottom: 50px;
			}
			@media (min-width: 768px) {
				.bottom-buffer-sm-0,
				.bottom-buffer-sm-reset {
					margin-bottom: 0;
				}
				.bottom-buffer-sm-1 {
					margin-bottom: 1px;
				}
				.bottom-buffer-sm-5 {
					margin-bottom: 5px;
				}
				.bottom-buffer-sm-10 {
					margin-bottom: 10px;
				}
				.bottom-buffer-sm-15 {
					margin-bottom: 15px;
				}
				.bottom-buffer-sm-20 {
					margin-bottom: 20px;
				}
				.bottom-buffer-sm-25 {
					margin-bottom: 25px;
				}
				.bottom-buffer-sm-30 {
					margin-bottom: 30px;
				}
				.bottom-buffer-sm-50 {
					margin-bottom: 50px;
				}
			}
			@media (min-width: 992px) {
				.bottom-buffer-md-0,
				.bottom-buffer-md-reset {
					margin-bottom: 0;
				}
				.bottom-buffer-md-1 {
					margin-bottom: 1px;
				}
				.bottom-buffer-md-5 {
					margin-bottom: 5px;
				}
				.bottom-buffer-md-10 {
					margin-bottom: 10px;
				}
				.bottom-buffer-md-15 {
					margin-bottom: 15px;
				}
				.bottom-buffer-md-20 {
					margin-bottom: 20px;
				}
				.bottom-buffer-md-25 {
					margin-bottom: 25px;
				}
				.bottom-buffer-md-30 {
					margin-bottom: 30px;
				}
				.bottom-buffer-md-50 {
					margin-bottom: 50px;
				}
			}
			@media (min-width: 1200px) {
				.bottom-buffer-lg-0,
				.bottom-buffer-lg-reset {
					margin-bottom: 0;
				}
				.bottom-buffer-lg-1 {
					margin-bottom: 1px;
				}
				.bottom-buffer-lg-5 {
					margin-bottom: 5px;
				}
				.bottom-buffer-lg-10 {
					margin-bottom: 10px;
				}
				.bottom-buffer-lg-15 {
					margin-bottom: 15px;
				}
				.bottom-buffer-lg-20 {
					margin-bottom: 20px;
				}
				.bottom-buffer-lg-25 {
					margin-bottom: 25px;
				}
				.bottom-buffer-lg-30 {
					margin-bottom: 30px;
				}
				.bottom-buffer-lg-50 {
					margin-bottom: 50px;
				}
			}
			.top-buffer-xs-0 {
				margin-top: 0;
			}
			.top-buffer-xs-1 {
				margin-top: 1px;
			}
			.top-buffer-xs-5 {
				margin-top: 5px;
			}
			.top-buffer-xs-10 {
				margin-top: 10px;
			}
			.top-buffer-xs-15 {
				margin-top: 15px;
			}
			.top-buffer-xs-20 {
				margin-top: 20px;
			}
			.top-buffer-xs-25 {
				margin-top: 25px;
			}
			.top-buffer-xs-30 {
				margin-top: 30px;
			}
			.top-buffer-xs-50 {
				margin-top: 50px;
			}
			@media (min-width: 768px) {
				.top-buffer-sm-0,
				.top-buffer-sm-reset {
					margin-top: 0;
				}
				.top-buffer-sm-1 {
					margin-top: 1px;
				}
				.top-buffer-sm-5 {
					margin-top: 5px;
				}
				.top-buffer-sm-10 {
					margin-top: 10px;
				}
				.top-buffer-sm-15 {
					margin-top: 15px;
				}
				.top-buffer-sm-20 {
					margin-top: 20px;
				}
				.top-buffer-sm-25 {
					margin-top: 25px;
				}
				.top-buffer-sm-30 {
					margin-top: 30px;
				}
				.top-buffer-sm-50 {
					margin-top: 50px;
				}
			}
			@media (min-width: 992px) {
				.top-buffer-md-0,
				.top-buffer-md-reset {
					margin-top: 0;
				}
				.top-buffer-md-1 {
					margin-top: 1px;
				}
				.top-buffer-md-5 {
					margin-top: 5px;
				}
				.top-buffer-md-10 {
					margin-top: 10px;
				}
				.top-buffer-md-15 {
					margin-top: 15px;
				}
				.top-buffer-md-20 {
					margin-top: 20px;
				}
				.top-buffer-md-25 {
					margin-top: 25px;
				}
				.top-buffer-md-30 {
					margin-top: 30px;
				}
				.top-buffer-md-50 {
					margin-top: 50px;
				}
			}
			@media (min-width: 1200px) {
				.top-buffer-lg-0,
				.top-buffer-lg-reset {
					margin-top: 0;
				}
				.top-buffer-lg-1 {
					margin-top: 1px;
				}
				.top-buffer-lg-5 {
					margin-top: 5px;
				}
				.top-buffer-lg-10 {
					margin-top: 10px;
				}
				.top-buffer-lg-15 {
					margin-top: 15px;
				}
				.top-buffer-lg-20 {
					margin-top: 20px;
				}
				.top-buffer-lg-25 {
					margin-top: 25px;
				}
				.top-buffer-lg-30 {
					margin-top: 30px;
				}
				.top-buffer-lg-50 {
					margin-top: 50px;
				}
			}
			.right-buffer-xs-0 {
				padding-right: 0;
			}
			.right-buffer-xs-1 {
				padding-right: 1px;
			}
			.right-buffer-xs-5 {
				padding-right: 5px;
			}
			.right-buffer-xs-10 {
				padding-right: 10px;
			}
			.right-buffer-xs-15 {
				padding-right: 15px;
			}
			.right-buffer-xs-20 {
				padding-right: 20px;
			}
			.right-buffer-xs-30 {
				padding-right: 30px;
			}
			.left-buffer-xs-0 {
				padding-left: 0;
			}
			.left-buffer-xs-1 {
				padding-left: 1px;
			}
			.left-buffer-xs-5 {
				padding-left: 5px;
			}
			.left-buffer-xs-10 {
				padding-left: 10px;
			}
			.left-buffer-xs-15 {
				padding-left: 15px;
			}
			.left-buffer-xs-20 {
				padding-left: 20px;
			}
			.left-buffer-xs-30 {
				padding-left: 30px;
			}
			@media (min-width: 768px) {
				.right-buffer-sm-0 {
					padding-right: 0;
				}
				.right-buffer-sm-1 {
					padding-right: 1px;
				}
				.right-buffer-sm-5 {
					padding-right: 5px;
				}
				.right-buffer-sm-10 {
					padding-right: 10px;
				}
				.right-buffer-sm-reset {
					padding-right: 16px;
				}
				.right-buffer-sm-15 {
					padding-right: 15px;
				}
				.right-buffer-sm-20 {
					padding-right: 20px;
				}
				.right-buffer-sm-30 {
					padding-right: 30px;
				}
				.left-buffer-sm-0 {
					padding-left: 0;
				}
				.left-buffer-sm-1 {
					padding-left: 1px;
				}
				.left-buffer-sm-5 {
					padding-left: 5px;
				}
				.left-buffer-sm-10 {
					padding-left: 10px;
				}
				.left-buffer-sm-15 {
					padding-left: 15px;
				}
				.left-buffer-sm-reset {
					padding-left: 16px;
				}
				.left-buffer-sm-20 {
					padding-left: 20px;
				}
				.left-buffer-sm-30 {
					padding-left: 30px;
				}
			}
			@media (min-width: 992px) {
				.right-buffer-md-0 {
					padding-right: 0;
				}
				.right-buffer-md-1 {
					padding-right: 1px;
				}
				.right-buffer-md-5 {
					padding-right: 5px;
				}
				.right-buffer-md-10 {
					padding-right: 10px;
				}
				.right-buffer-md-15 {
					padding-right: 15px;
				}
				.right-buffer-md-reset {
					padding-right: 16px;
				}
				.right-buffer-md-20 {
					padding-right: 20px;
				}
				.right-buffer-md-30 {
					padding-right: 30px;
				}
				.left-buffer-md-0 {
					padding-left: 0;
				}
				.left-buffer-md-1 {
					padding-left: 1px;
				}
				.left-buffer-md-5 {
					padding-left: 5px;
				}
				.left-buffer-md-10 {
					padding-left: 10px;
				}
				.left-buffer-md-15 {
					padding-left: 15px;
				}
				.left-buffer-md-reset {
					padding-left: 16px;
				}
				.left-buffer-md-20 {
					padding-left: 20px;
				}
				.left-buffer-md-30 {
					padding-left: 30px;
				}
			}
			@media (min-width: 1200px) {
				.right-buffer-lg-0 {
					padding-right: 0;
				}
				.right-buffer-lg-1 {
					padding-right: 1px;
				}
				.right-buffer-lg-5 {
					padding-right: 5px;
				}
				.right-buffer-lg-10 {
					padding-right: 10px;
				}
				.right-buffer-lg-15 {
					padding-right: 15px;
				}
				.right-buffer-lg-reset {
					padding-right: 16px;
				}
				.right-buffer-lg-20 {
					padding-right: 20px;
				}
				.right-buffer-lg-30 {
					padding-right: 30px;
				}
				.left-buffer-lg-0 {
					padding-left: 0;
				}
				.left-buffer-lg-1 {
					padding-left: 1px;
				}
				.left-buffer-lg-5 {
					padding-left: 5px;
				}
				.left-buffer-lg-10 {
					padding-left: 10px;
				}
				.left-buffer-lg-15 {
					padding-left: 15px;
				}
				.left-buffer-lg-reset {
					padding-left: 16px;
				}
				.left-buffer-lg-20 {
					padding-left: 20px;
				}
				.left-buffer-lg-30 {
					padding-left: 30px;
				}
			}
		`;
	}

	static get properties() {
		return {
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

			/**
			 * Theme to trigger alternate menu presentations
			 */
			theme: { type: String },
		};
	}

	constructor() {
		super();

		this.tree = [];
		this.isLoading = false;
		this.loadingMessage = "Loading...";
	}
	_showTooltip = () => {
		// Make the tooltip visible
		this.tooltip.setAttribute("data-show", "");

		// Enable the event listeners
		this.popperInstance.setOptions({
			modifiers: [{ name: "eventListeners", enabled: true }],
		});

		// Update its position
		this.popperInstance.update();
	};
	_hideTooltip = () => {
		// Hide the tooltip
		this.tooltip.removeAttribute("data-show");

		// Disable the event listeners
		this.popperInstance.setOptions({
			modifiers: [{ name: "eventListeners", enabled: false }],
		});
	};

	_handleEvents = (e) => {
		// Hide the popover when user touches any part of the screen, except the
		// select form button regardless of state.
		const selectElementHref =
			this.select.options[this.select.selectedIndex].dataset.href;
		//	If a navigable link is selected in the dropdown.
		if (!selectElementHref.includes("%3Cnolink%3E")) {
			this.select.setAttribute("aria-invalid", "false");
			this.btn.classList.remove("disabled");
			switch (e.type) {
				case "click":
					this._hideTooltip();
					// If the link works, don't allow the button to focus.
					e.stopImmediatePropagation();
					window.location = selectElementHref;
					break;
				default:
					break;
			}
		}
		//	Don't follow link if using the nolink setting.
		else {
			this.btn.classList.add("disabled");
			this.select.setAttribute("aria-invalid", "true");
			switch (e.type) {
				case "click":
					if (this.btn) {
						this.select.focus();
						this._showTooltip();
					}
					break;

				case "focus":
				case "mouseenter":
					if (this.btn) {
						this._showTooltip();
					} else {
						this._hideTooltip();
					}
					break;

				case "mouseleave":
					this._hideTooltip();
					break;
				default:
					break;
			}
		}
	};
	connectedCallback() {
		super.connectedCallback();
		if (this.baseUrl && this.menuId) {
			this.fetchData(this.baseUrl, this.menuId);
		}
	}
	disconnectedCallback() {
		if (super.disconnectedCallback) {
			super.disconnectedCallback();
		}
	}
	static azMenuLevelTemplate(levels) {
		return html` ${levels} `;
	}
	static azMenuOptionTemplate(title, href) {
		return html`<option
			data-href="${href}"
			@click="${(e) => {
				eventDataLayerPush(e, "az-select-menu");
			}}"
		>
			${title}
		</option>`;
	}

	static azMenuItemTemplate(title) {
		return html`${title}`;
	}
	renderAzSelectMenuOptions(level) {
		const levels = level.map((item) => this.renderAzMenuItem(item));
		return AzSelectMenu.azMenuLevelTemplate(levels);
	}

	renderAzMenuItem(item) {
		const title = item?.link?.attributes?.title;
		let href = item?.link?.href;

		// check if external or relative href
		href = href.charAt(0) === "/" ? "https://www.arizona.edu" + href : href;

		if (href) {
			return AzSelectMenu.azMenuOptionTemplate(title, href);
		}
		return this.azMenuItemTemplate(title);
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
	async firstUpdated() {
		// Give the browser a chance to paint
		await new Promise((r) => setTimeout(r, 0));
		this.btn = this.shadowRoot.querySelector("#button");
		this.btn.addEventListener("click", this._handleEvents, { passive: true });
		this.btn.addEventListener("mouseenter", this._handleEvents, {
			passive: true,
		});
		this.btn.addEventListener("mouseleave", this._handleEvents, {
			passive: true,
		});
		this.btn.addEventListener("focus", this._handleEvents, { passive: true });
		this.btn.addEventListener("touchstart", this._handleEvents, {
			passive: true,
		});
		this.btn.addEventListener("blur", this._handleEvents, { passive: true });
		this.form = this.shadowRoot.querySelector("form");
		this.tooltip = this.shadowRoot.querySelector("#tooltip");
		this.popperInstance = createPopper(this.form, this.tooltip, {
			placement: "top",
			modifiers: [
				{
					name: "offset",
					options: {
						offset: [0, 8],
					},
				},
			],
		});
		this.select = this.shadowRoot.querySelector("select");
	}

	render() {
		return html`
			<form aria-describedby="tooltip">
				<div id="tooltip" role="tooltip">
					Please make a selection.
					<div id="arrow" data-popper-arrow></div>
				</div>

				<div class="input-group">
					<span class="input-group-addon input-group-addon-no-border"
						><div class="select-menu-label">I am</div></span
					>
					<label
						for="uaqs-navigation-select-menu-uaqs-audience-select-menu"
						class="sr-only"
						>Select your audience</label
					>
					<select
						id="uaqs-navigation-select-menu-uaqs-audience-select-menu"
						class="form-control select-primary"
						aria-invalid="true"
					>
						<option data-href="https://www.arizona.edu/%3Cnolink%3E">
							choose an option
						</option>
						${this.isLoading
							? html`<slot name="loading">${this.loadingMessage}</slot>`
							: this.renderAzSelectMenuOptions(this.tree)}
					</select>
					<span class="input-group-btn">
						<button
							id="button"
							class="btn btn-primary btn-blue disabled"
							role="button"
							type="button"
							tabindex="0"
						>
							Go<span class="sr-only">to the page for that group</span>
						</button>
					</span>
				</div>
			</form>
		`;
	}
}

 customElements.get('az-select-menu') || customElements.define('az-select-menu', AzSelectMenu);

