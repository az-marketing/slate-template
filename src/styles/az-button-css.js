import { css } from "lit";

export default css`
    .button {
        display: inline-block;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        text-align: center;
        text-decoration: none;
        vertical-align: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        border-style: solid;
        border-width: 1px;
        border-radius: 0;
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
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
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        font-weight: 500;
        text-transform: uppercase;
        text-decoration: none;
        letter-spacing: .04em;
        white-space: normal;
        border-width: 2px;
        border-color: transparent;
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
    :host([block]){
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
