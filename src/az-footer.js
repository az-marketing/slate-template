import { css, html, LitElement } from 'lit-element';
import { eventDataLayerPush } from './mixins/shadow-events-datalayer';

class AzFooter  extends LitElement {
	static get styles() {
		return css`
			* {
				box-sizing: border-box;
			}
			[class*=" ua-brand-"], [class^=ua-brand-] {
				font-family: ua-brand-symbols!important;
				-webkit-font-smoothing: antialiased;
				-moz-osx-font-smoothing: grayscale;
				speak: none;
				font-style: normal;
				font-weight: 400;
				font-variant: normal;
				text-transform: none;
				line-height: 1;
			}
			html.sticky-footer body {
				display: -webkit-box;
				display: -ms-flexbox;
				display: flex;
				-webkit-box-orient: vertical;
				-webkit-box-direction: normal;
				-ms-flex-direction: column;
				flex-direction: column;
				min-height: 100vh;
				height: 100%;
				font-size: 16px;
				line-height: 1.5;
			}
			body{
    		-webkit-font-smoothing: antialiased;
    		-moz-osx-font-smoothing: grayscale;
    		text-shadow: 1px 1px 1px rgb(0 0 0 / 0%);
				font-size: 16px;
				line-height: 1.5;
			}
			footer, nav, section, summary {
				display: block;
			}
			hr {
				position: relative;
				background: url(https://www.arizona.edu/img/sky-triangles-hr.svg) center center no-repeat;
				background-size: 2em .625em;
				border-top: 0;
				border-color: #007d84;
				height: 10px;
				width: 100%;
				margin-top: 24px;
				margin-bottom: 24px;
				border: 0;
				box-sizing: content-box;
			}
			#footer_site hr:after, #footer_site hr:before {
				border-color: transparent;
				border-color: rgba(55,55,55,.09);
				width: 100%;
			}
			hr:before {
				content: " ";
				border-top-width: 1px;
				border-top-style: solid;
				border-top-color: inherit;
				position: absolute;
				width: calc(50% - 26px);
				top: 4px;
				left: 0;
			}
			hr:after {
				content: " ";
				border-top-width: 1px;
				border-top-style: solid;
				border-top-color: inherit;
				position: absolute;
				width: calc(50% - 26px);
				top: 4px;
				right: 0;
			}
			p {
				margin: 0 0 12px;
				font-size: 16px;
			}
			p.smal{
				font-size: 87%;
			}
			.text-center {
				text-align: center;
			}
			.text-align-center {
				text-align: center;
			}
			@media (min-width: 1200px){
				.text-right-lg {
					text-align: right;
				}
			}
			.page-row{
				-webkit-box-flex: 0;
				-ms-flex: none;
				flex: none;
			}
			.container {
				width: 100%;
				padding-right: 15px;
				padding-left: 15px;
				margin-right: auto;
				margin-left: auto;
			}
			.container:after, .container:before{
				display: table;
				content: " ";
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
			.row section{
				align-items: center;
			}
			.row:before, .row:after{
				display: table;
				content: " ";
			}

			.page-row-padding-bottom:after, .page-row-padding-top:before {
				height: .8em;
				background: #f4ede5;
			}

			.container {
				padding-right: 16px;
				padding-left: 16px;
				margin-right: auto;
				margin-left: auto;
			}

			.container:after, .container:before {
				display: table;
				content: " ";
			}
			.container:after {
				clear: both;
			}
			@media (min-width: 768px) {
				.container {
					width: 752px;
				}
			}
			@media (min-width: 992px) {
				.container {
					width: 972px;
				}
			}
			@media (min-width: 1200px) {
					.container {
							width: 1172px;
					}
			}
			.row {
					margin-right: -15px;
					margin-left: -15px;
			}
			.row:after,
			.row:before {
					display: table;
					content: " ";
			}
			.row:after {
					clear: both;
			}
			.col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9 {
				position: relative;
				min-height: 1px;
				padding-right: 16px;
				padding-left: 16px;
			}
			.col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9 {
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
				.col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9 {
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
				.col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9 {
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
				.col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9 {
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
			select[multiple], select[size] {
				height: auto;
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
			a.label:focus, a.label:hover {
				color: #fff;
				text-decoration: none;
				cursor: pointer;
			}
			.label-default {
				background-color: #ab0520;
			}
			.label-default[href]:focus, .label-default[href]:hover {
				background-color: #790417;
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
			select {
				border: 0;
				outline: 1px solid #cbd1e0;
				background-color: #fff;
				border-radius: 0;
			}
			.label {
				font-size: 0.7em;
				font-weight: 700;
				line-height: 1.5;
				color: #fff;
				margin: 0 0.5em;
			}
			img {
				max-width: 100%;
				height: auto;
				border: 0;
				vertical-align: middle;
			}
			a.link-container {
				color: inherit;
				display: block;
				font-weight: inherit;
			}
			a.link-container:focus, a.link-container:hover {
				background-color: #eef1f1;
				outline: 0;
				text-decoration: none;
				color: inherit;
			}
			ol, ul {
    		margin-top: 0;
    		margin-bottom: 12px;
			}
			.h3, .h4, .h5, .h6, h3, h4, h5, h6 {
				font-weight: 500;
				line-height: 1.1;
				color: #49595e;
			}
			.h5, h5 {
				font-size: 16px;
			}
			.h4, .h5, .h6, h4, h5, h6 {
				margin-top: 12px;
				margin-bottom: 12px;
			}
			.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
				font-weight: 500;
				line-height: 1.1;
				color: #49595e;
			}
			.initialism, .text-uppercase {
				text-transform: uppercase;
			}
			.bold, bold, strong {
			  font-weight: 700;
			}
			b, strong {
				font-weight: 700;
			}



			.arizona-logo {
				display: inline-block;
				height: 20px;
				margin: 19px 0 20px;
				max-width: 80%;
				float: left;
				width: 276px;
				padding: 0 0 0 0.6rem;
			}
			.bottom-buffer-xs-0 {
				margin-bottom: 0;
			}
			.bottom-buffer-1, .bottom-buffer-xs-1 {
				margin-bottom: 1px;
			}
			.bottom-buffer-5, .bottom-buffer-xs-5 {
				margin-bottom: 5px;
			}
			.bottom-buffer-10, .bottom-buffer-xs-10 {
				margin-bottom: 10px;
			}
			.bottom-buffer-15, .bottom-buffer-xs-15 {
				margin-bottom: 15px;
			}
			.bottom-buffer-20, .bottom-buffer-xs-20 {
				margin-bottom: 20px;
			}
			.bottom-buffer-25, .bottom-buffer-xs-25 {
				margin-bottom: 25px;
			}
			.bottom-buffer-30, .bottom-buffer-xs-30 {
				margin-bottom: 30px;
			}
			.bottom-buffer-50, .bottom-buffer-xs-50 {
				margin-bottom: 50px;
			}
			@media (min-width: 768px) {
				.bottom-buffer-sm-0, .bottom-buffer-sm-reset {
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
				.bottom-buffer-md-0, .bottom-buffer-md-reset {
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
				.bottom-buffer-lg-0, .bottom-buffer-lg-reset {
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
				.top-buffer-sm-0, .top-buffer-sm-reset {
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
				.top-buffer-md-0, .top-buffer-md-reset {
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
				.top-buffer-lg-0, .top-buffer-lg-reset {
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
			.mb-0, .my-0 {
				margin-bottom: 0!important;
				margin-bottom: 0!important;
			}
			.mt-0, .my-0 {
				margin-top: 0!important;
				margin-top: 0!important;
			}
			.text-muted {
				color: #495057;
			}
			.container-collapsed .column {
				min-height: initial;
			}
			.visible-lg-block, .visible-lg-inline, .visible-lg-inline-block, .visible-md-block, .visible-md-inline, .visible-md-inline-block, .visible-sm-block, .visible-sm-inline, .visible-sm-inline-block, .visible-xs-block, .visible-xs-inline, .visible-xs-inline-block {
    		display: none!important;
			}
			.small, small {
				font-size: 87%;
			}
			html.ua-brand-icons.external-links .remove-external-link-icon[target=_blank] .pseudo-link span, html.ua-brand-icons.external-links .remove-external-link-icon[target=_blank] .psuedo-link span, html.ua-brand-icons.external-links [target=_blank] {
				padding-right: .8em;
			}
			html.external-links .pseudo-link:after, html.external-links [target=_blank]:after {
				border-bottom: .3125em solid transparent;
				border-left: .3125em solid transparent;
				border-right: .3125em solid #8f1124;
				border-top: .3125em solid #8f1124;
				content: '';
				display: inline-block;
				height: 0;
				position: relative;
				top: 0;
				width: 0;
				right: 0;
			}
			html.ua-brand-icons.external-links .remove-external-link-icon[target=_blank] .pseudo-link span:after, html.ua-brand-icons.external-links .remove-external-link-icon[target=_blank] .psuedo-link span:after, html.ua-brand-icons.external-links [target=_blank]:after {
				content: "\E648";
				font-family: ua-brand-symbols;
				font-size: .7em;
				border-width: 0;
			}
			#footer_site {
				background: #f4ede5;
				padding: 2.5rem 0;
				color: #49595e;
				line-height: 1.5;
			}
			#footer_site hr {
				background: 0 0;
			}
			#footer_site a {
    		color: #49595e;
    		text-decoration: underline;
			}
			#footer_site ul {
				display: inline-block;
				margin: 0;
				padding: 1rem 0 0;
			}
			#footer_site #block-bean-uaqs-footer-links-bean-main ul {
				display: inline-block;
				padding: 0;
				margin: 0 0 12px;
			}
			#footer_site ul>li {
				border-right: 1px solid #e2e9eb;
				display: inline-block;
				list-style: none;
				padding: 0 .75rem;
			}
			#footer_site ul>li.last {
				border-right: 0;
			}
			#footer_site #block-bean-uaqs-footer-links-bean-main ul li {
				border-right: 0px solid hsl(196,8%,74%);
				display: inline-block;
				list-style: none;
				padding: 0 0 0 .75rem;
			}
			#footer_site #block-bean-uaqs-footer-links-bean-main ul li a {
				color: hsl(0,0%,20%);
				text-decoration: none;
				text-transform: none;
				font-size: 14px;
			}

			#footer_site #footer_sub ul {
				display: block;
				margin: 0;
				padding: 0 0 0;
				width: 100%;
			}
			#footer_site #footer_sub .two-col-menu ul {
				-moz-column-count: 2;
				-moz-column-gap: 2em;
				-webkit-column-count: 2;
				-webkit-column-gap: 2em;
				column-count: 2;
				column-gap: 2em;
				display: block;
			}
			#footer_site #footer_sub ul li {
				border-right: 0px solid #B6BEC1;
				display: block;
				list-style: none;
				padding: 0;
				margin: 0;
			}
			#footer_site ul li a {
				color: hsl(0,0%,20%);
				font-weight: normal;
				display: block;
				text-decoration: none;
				font-size: 14px;
				line-height: inherit;
				vertical-align: top;
				text-transform: none;
				margin: 7px 0;
			}
			#footer_sub ul.menu li a i {
				margin: 0 .5em 0 0;
			}
			.bg-warm-gray {
				background-color: #f4ede5;
			}
			.paragraphs-item-uaqs-full-width-bg-wrapper {
				margin-top: -1px;
			}
			.background-wrapper {
				padding: 3rem 0;
			}
			#footer_sub .background-wrapper {
			  padding: 0;
			  margin: 0 -16px;
			}




		`;
	}

	render() {
		return html`
			<footer id="footer_site" class="page page-row" role="contentinfo">
				<div class="region region-footer">
					<div class="container">
						<div class="row">
							<div class="page-row-padding-top page-row-padding-bottom"></div>
							<div class="page-row-padding-top page-row-padding-bottom"></div>
							<div class="col-xs-12 col-sm-5 col-md-4 col-lg-4 text-center-xs text-left-not-xs">
								<div class="row bottom-buffer-30">
									<div class="col-xs-12">
										<a href="https://www.arizona.edu/" title="Home" class="remove-external-link-icon active" @click="${(e) => {eventDataLayerPush(e, 'az-footer')}}"><img src="https://www.arizona.edu/sites/default/files/UA_horiz_rgb_webheader.png" alt="Home"></a>              </div>
									</div>
								</div>
								<!-- Add the extra clearfix for only the required viewport -->
								<div class="clearfix visible-xs-block"></div>
								<div class="col-xs-12 col-sm-7 col-md-8 col-lg-8">
									<div id="block-bean-uaqs-footer-links-bean-main" class="block block-bean first odd small text-right-lg text-right-md  text-right-sm text-center-xs" role="complementary">
										<ul class="menu">
											<li class="menu__item is-leaf first leaf"><a href="https://talent.arizona.edu" title="" class="menu__link" @click="${(e) => {eventDataLayerPush(e, 'az-footer')}}">Employment</a></li>
											<li class="menu__item is-leaf leaf"><a href="http://cirt.arizona.edu" title="" class="menu__link" @click="${(e) => {eventDataLayerPush(e, 'az-footer')}}">Emergency Information</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/title-ix" title="" class="menu__link" @click="${(e) => {eventDataLayerPush(e, 'az-footer')}}">Title IX / Non-Discrimination</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/campus-safety" title="" class="menu__link" @click="${(e) => {eventDataLayerPush(e, 'az-footer')}}">Campus Safety</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://cirt.arizona.edu/ualert" class="menu__link" @click="${(e) => {eventDataLayerPush(e, 'az-footer')}}">UAlert</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/copyright" title="" class="menu__link" @click="${(e) => {eventDataLayerPush(e, 'az-footer')}}">Copyright</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/campus-accessibility" title="" class="menu__link" @click="${(e) => {eventDataLayerPush(e, 'az-footer')}}">Campus Accessibility</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/contact-us" title="" class="menu__link" @click="${(e) => {eventDataLayerPush(e, 'az-footer')}}">Contact Us</a></li>
											<li class="menu__item is-leaf last leaf"><a href="https://www.arizona.edu/website-feedback" title="" class="menu__link" @click="${(e) => {eventDataLayerPush(e, 'az-footer')}}">Feedback</a></li>
										</ul>
									</div>
									<div id="block-bean-footer-university-address" class="block block-bean last even" role="complementary">
										<div class="entity entity-bean bean-uaqs-contact-summary clearfix" about="/block/footer---university-address">
											<div class="content">
												<p class="text-center-xs text-right-sm text-right-md text-right-lg"><span>
												The University of Arizona | Tucson, Arizona 85721 | </span><span>
												<a href="tel:520-621-2211">520-621-2211</a></span></p>
											</div>
										</div>
									</div>
								</div>
								<div class="col-xs-12"><hr></div>
							</div>
						</div>
					</div>
					<div id="footer_sub" class="region region-footer-sub">
						<div class="container">
							<div class="row">
									<div id="block-bean-uaqs-footer-links-bean-informa" class="block block-bean first odd col-xs-12 col-sm-4 col-md-3 col-lg-3" role="complementary">
										<h5><strong class="text-uppercase">Information for</strong></h5>
										<ul class="menu">
											<li class="menu__item is-leaf first leaf"><a href="http://www.arizona.edu/future-students" class="menu__link" @click="${(e) => {eventDataLayerPush(e, 'az-footer')}}">Future Students</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/students" title="" class="menu__link" @click="${(e) => {eventDataLayerPush(e, 'az-footer')}}">Current Students</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/faculty-staff" title="" class="menu__link" @click="${(e) => {eventDataLayerPush(e, 'az-footer')}}">Faculty &amp; Staff</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/alumni-donors" title="" class="menu__link" @click="${(e) => {eventDataLayerPush(e, 'az-footer')}}">Alumni &amp; Donors</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/parents-visitors" title="" class="menu__link" @click="${(e) => {eventDataLayerPush(e, 'az-footer')}}">Parents &amp; Visitors</a></li>
											<li class="menu__item is-leaf last leaf"><a href="https://www.arizona.edu/corporations-businesses" title="" class="menu__link" @click="${(e) => {eventDataLayerPush(e, 'az-footer')}}">Corporations &amp; Businesses</a></li>
										</ul>
									</div>
									<div class="clearfix visible-xs-block col-xs-12">
										<hr>
									</div>
									<div id="block-bean-uaqs-footer-links-bean-topics" class="block block-bean even col-xs-12 col-sm-8 col-md-5 two-col-menu" role="complementary">
										<h5><strong class="text-uppercase">Topics</strong></h5>
										<ul class="menu">
											<li class="menu__item is-leaf first leaf"><a href="https://www.arizona.edu/about" title="" class="menu__link" @click="${(e) => {eventDataLayerPush(e, 'az-footer')}}">About the University</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/academics" title="" class="menu__link" @click="${(e) => {eventDataLayerPush(e, 'az-footer')}}">Academics</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/arts-museums" title="" class="menu__link" @click="${(e) => {eventDataLayerPush(e, 'az-footer')}}">Arts &amp; Museums</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/athletics-recreation" title="" class="menu__link" @click="${(e) => {eventDataLayerPush(e, 'az-footer')}}">Athletics &amp; Recreation</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/colleges-schools" title="" class="menu__link" @click="${(e) => {eventDataLayerPush(e, 'az-footer')}}">Colleges, Schools, Departments</a></li>
											<li class="menu__item is-leaf leaf"><a href="http://diversity.arizona.edu" class="menu__link" @click="${(e) => {eventDataLayerPush(e, 'az-footer')}}">Diversity</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.environment.arizona.edu" title="" class="menu__link" @click="${(e) => {eventDataLayerPush(e, 'az-footer')}}">Environment &amp; Sustainability</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://international.arizona.edu" class="menu__link" @click="${(e) => {eventDataLayerPush(e, 'az-footer')}}">Global Engagement</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/health-sciences" title="" class="menu__link" @click="${(e) => {eventDataLayerPush(e, 'az-footer')}}">Health &amp; Medical</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/libraries" title="" class="menu__link" @click="${(e) => {eventDataLayerPush(e, 'az-footer')}}">Libraries</a></li>
											<li class="menu__item is-leaf leaf"><a href="http://uaforyou.arizona.edu" class="menu__link" @click="${(e) => {eventDataLayerPush(e, 'az-footer')}}">Outreach &amp; Extension</a></li>
											<li class="menu__item is-leaf leaf"><a href="http://research.arizona.edu" class="menu__link" @click="${(e) => {eventDataLayerPush(e, 'az-footer')}}">Research &amp; Innovation</a></li>
											<li class="menu__item is-leaf last leaf"><a href="https://www.arizona.edu/purpose-mission-values" title="" class="menu__link" @click="${(e) => {eventDataLayerPush(e, 'az-footer')}}">Purpose, Mission &amp; Values</a></li>
										</ul>
									</div>
									<div class="clearfix visible-xs-block col-xs-12">
										<hr>
									</div>
									<div class="clearfix visible-sm-block col-xs-12">
										<hr>
									</div>
									<div id="block-bean-uaqs-footer-links-bean-resourc" class="block block-bean odd col-xs-6 col-sm-4 col-md-2 clearfix" role="complementary">
										<h5><strong class="text-uppercase">Resources</strong></h5>
										<ul class="menu"><li class="menu__item is-leaf first leaf"><a href="http://directory.arizona.edu/index" class="menu__link" @click="${(e) => {eventDataLayerPush(e, 'az-footer')}}"><i class="ua-brand-directory"></i>A-Z Index</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://www.arizona.edu/calendars-events" title="" class="menu__link" @click="${(e) => {eventDataLayerPush(e, 'az-footer')}}"><i class="ua-brand-calendar"></i>Calendars</a></li>
											<li class="menu__item is-leaf leaf"><a href="http://map.arizona.edu" class="menu__link" @click="${(e) => {eventDataLayerPush(e, 'az-footer')}}"><i class="ua-brand-campus-map"></i>Campus Map</a></li>
											<li class="menu__item is-leaf leaf"><a href="https://news.arizona.edu" class="menu__link" @click="${(e) => {eventDataLayerPush(e, 'az-footer')}}"><i class="ua-brand-news"></i>News</a></li>
											<li class="menu__item is-leaf leaf"><a href="http://directory.arizona.edu/phonebook" class="menu__link" @click="${(e) => {eventDataLayerPush(e, 'az-footer')}}"><i class="ua-brand-directory"></i>Phonebook</a></li>
											<li class="menu__item is-leaf last leaf"><a href="https://www.arizona.edu/weather" title="" class="menu__link" @click="${(e) => {eventDataLayerPush(e, 'az-footer')}}"><i class="ua-brand-weather"></i>Weather</a></li>
										</ul>
									</div>
									<div id="block-uaqs-social-media-uaqs-social-media-links" class="block block-uaqs-social-media even col-xs-6 col-sm-4 col-md-2" role="complementary">
										<h5><strong class="text-uppercase">Connect</strong></h5>
										<div class="content">
											<ul id="social-media-links">
												<li class="uaqs-social-media"><a href="https://facebook.com/uarizona" target="_blank" title="Click here to visit our Facebook page" rel="noopener noreferrer" @click="${(e) => {eventDataLayerPush(e, 'az-footer')}}"><i class="ua-brand-facebook"></i>Facebook</a></li>
												<li class="uaqs-social-media"><a href="https://twitter.com/uarizona" target="_blank" title="Click here to visit our Twitter page" rel="noopener noreferrer" @click="${(e) => {eventDataLayerPush(e, 'az-footer')}}"><i class="ua-brand-twitter"></i>Twitter</a></li>
												<li class="uaqs-social-media"><a href="https://instagram.com/uarizona" target="_blank" title="Click here to visit our Instagram page" rel="noopener noreferrer" @click="${(e) => {eventDataLayerPush(e, 'az-footer')}}"><i class="ua-brand-instagram"></i>Instagram</a></li>
												<li class="uaqs-social-media"><a href="https://linkedin.com/edu/university-of-arizona-17783" target="_blank" title="Click here to visit our LinkedIn page" rel="noopener noreferrer" @click="${(e) => {eventDataLayerPush(e, 'az-footer')}}"><i class="ua-brand-linkedin"></i>LinkedIn</a></li>
												<li class="uaqs-social-media"><a href="https://youtube.com/universityofarizona" target="_blank" title="Click here to visit our YouTube page" rel="noopener noreferrer" @click="${(e) => {eventDataLayerPush(e, 'az-footer')}}"><i class="ua-brand-youtube"></i>YouTube</a></li>
											</ul>
										</div>
									</div>
									<div id="block-bean-uagc-footer" class="block block-bean last odd" role="complementary">
										<div class="entity entity-bean bean-uaqs-flexible-block clearfix" about="/block/uagc-footer">
											<div class="content"></div>
										</div>
									</div>
								</div>
								<div class="entity entity-paragraphs-item paragraphs-item-uaqs-full-width-bg-wrapper mb-0  background-wrapper bg-warm-gray">
									<div class="container">
										<div class="row">
											<div class="col-sm-12">
												<hr>
												<p class="text-align-center text-muted mt-0 mb-0"><em>We respectfully acknowledge the University of Arizona is on the land and territories of Indigenous peoples. Today, Arizona is home to 22 federally recognized tribes, with Tucson being home to the O’odham and the Yaqui. Committed to diversity and inclusion, the University strives to build sustainable relationships with sovereign Native Nations and Indigenous communities through education offerings, partnerships, and community service.</em></p>
												<hr>
												<p class="text-align-center text-muted mt-0 mb-0">We are affiliated with the&nbsp;<a class="text-muted" href="https://www.uagc.edu" target="_blank" @click="${(e) => {eventDataLayerPush(e, 'az-footer')}}">University of Arizona Global Campus</a></p>
											</div>
										</div>
									</div>
								</div><!--Close wrapper-->
								<div class="container container-collapsed">
									<div class="row">
										<div class="column col-sm-12"><div>
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-xs-12 text-center">
								<hr>
								<p class="small"><a href="https://www.arizona.edu/information-security-privacy" target="_blank" @click="${(e) => {eventDataLayerPush(e, 'az-footer')}}">University Information Security and Privacy</a></p>
								<p class="copyright small">© 2021 The Arizona Board of Regents on behalf of <a href="https://www.arizona.edu" target="_blank" @click="${(e) => {eventDataLayerPush(e, 'az-footer')}}">The University of Arizona</a>.</p>
							</div>
						</div>
					</div>
				</div>
			</footer>
		`
	}
};

customElements.get('az-footer') || customElements.define('az-footer', AzFooter);
