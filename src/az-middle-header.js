import { html, css, LitElement } from 'lit-element';
import './az-button';
import './az-select-menu';


/**
 * TODO: Create a class for your element that extends the LitElement
 * base class.
 */
class AzLogoSelectCta  extends LitElement {
     static get styles() {
       return css`
       :host {
        font-family: inherit;
        -ms-text-size-adjust: inherit;
        -webkit-text-size-adjust: inherit;
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
    img {
        border: 0;
    }
    select {
        color: inherit;
        font: inherit;
        margin: 0;
    }
    select {
        text-transform: none;
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
        img {
            page-break-inside: avoid;
        }
        img {
            max-width: 100% !important;
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
    img {
        vertical-align: middle;
    }
    [role="button"] {
        cursor: pointer;
    }
    .page-header{
        padding-bottom: 11px;
        margin: 48px 0 24px;
        border-bottom: 1px solid #fff;
    }
    .page-row > .row{
        border-bottom: 1px solid #E2E9EB;
    }
    .container {
        padding-right: 16px;
        padding-left: 16px;
        margin-right: auto;
        margin-left: auto;
    }
    .container:after,
    .container:before {
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
    select[multiple],
    select[size] {
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
    html {
        font-size: 16px;
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
    }
    a.link-container {
        color: inherit;
        display: block;
        font-weight: inherit;
    }
    a.link-container:focus,
    a.link-container:hover {
        background-color: #eef1f1;
        outline: 0;
        text-decoration: none;
        color: inherit;
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
    header {
        display: block;
    }
    [hidden] {
        display: none;
    }
    html {
        font-family: MiloWeb, Verdana, Geneva, sans-serif;
        font-size: 100%;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        line-height: 1.5em;
    }
    body {
        margin: 0;
        padding: 0;
    }
    .header__logo {
        float: left;
        width: 100%;
        text-align: center;
        margin: 24px 0;
        margin: 1.5rem 0;
        padding: 0;
    }
    @media (min-width: 48em) {
        .header__logo {
            width: auto;
            text-align: left;
            margin: 40px 0;
            margin: 2rem 0;
        }
    }
    .header__logo-image {
        vertical-align: bottom;
        width: 100%;
        max-width: 400px;
        height: auto;
    }
    .header__site-link:link,
    .header__site-link:visited {
        color: #000;
        text-decoration: none;
    }
    .header__site-link:focus,
    .header__site-link:hover {
        text-decoration: underline;
    }
    #logo a.webheader,
    #logo a.webheader:hover,
    #logo.webheader {
        font-weight: 700;
        text-transform: uppercase;
        color: #0c234b;
        font-size: 1.8em;
        text-decoration: none;
        display: flex;
        line-height: 0.9em;
        text-align: left;
    }
    header#header_ua {
        max-height: 59px;
        min-height: 10px;
    }
    @media print {
        a:link,
        a:visited {
            text-decoration: underline !important;
        }
        a:link.header__site-link,
        a:visited.header__site-link {
            text-decoration: none !important;
        }
        #page,
        body {
            color: #000;
            background-color: transparent !important;
            background-image: none !important;
        }
    }

                  `;
     }

       render() {
     return html`
    <header class="header page-row" id="header_site" role="banner">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-lg-4">
                    <a href="https://www.arizona.edu/" title="The University of Arizona, Tucson, Arizona | Home" class="header__logo active" rel="home" id="logo"><img src="https://www.arizona.edu/sites/default/files/UA_horiz_rgb_webheader.png" alt="The University of Arizona, Tucson, Arizona | Home" class="header__logo-image"></a>              </div>
                    <div class="col-xs-12 col-sm-6 col-lg-8">
                        <div class="row">
                            <div class="region region-header-2">
                            <div id="block-bean-uaqs-audience-select" class="block block-bean col-xs-12 top-buffer-xs-20 bottom-buffer-xs-20 col-sm-12 top-buffer-sm-15 bottom-buffer-sm-10 col-md-11 top-buffer-md-30 bottom-buffer-md-15 col-lg-5 col-lg-offset-2 top-buffer-lg-50 bottom-buffer-lg-5 left-buffer-lg-0 right-buffer-lg-0 first odd" role="complementary" aria-label="select menu">
                                 <az-select-menu baseurl="https://live-az-admissions.pantheonsite.io" menuId="header----select-menu"></az-select-menu>
                            </div>

                                <div class="col-xs-12 col-sm-12 col-md-5 col-lg-3 right-buffer-md-0 left-buffer-sm-3 right-buffer-sm-reset left-buffer-md-0 right-buffer-lg-5 left-buffer-lg-5 bottom-buffer-5 top-buffer-sm-0 top-buffer-lg-50 col-lg-offset-0">
                                    <div id="block-bean-cta-request-info" class="block block-bean even" role="complementary" aria-label="call to action link">
                                        <az-button theme="primary" block outline="true" link="https://www.arizona.edu/admissions/visit" id="cta-visit">Visit</az-button>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-3 col-lg-2 left-buffer-md-5 left-buffer-lg-0 bottom-buffer-30 top-buffer-md-0 top-buffer-lg-50"><div id="block-bean-cta-apply" class="block block-bean last even" role="complementary" aria-label="call to action link">
                                    <az-button theme="primary" block link="https://www.arizona.edu/admissions/apply" id="cta-apply">Apply</az-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> <!-- /.row -->
            </div> <!-- /.container -->
        </header>
    `;
   }
 }

 customElements.get('az-middle-header') || customElements.define('az-middle-header', AzLogoSelectCta);
