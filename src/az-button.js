import { LitElement, html } from 'lit-element';
import { DelegateFocusMixin } from './mixins/delegate-focus-mixin.js';
import azButtonStyles from './styles/az-button-css.js';


export class AzButton extends DelegateFocusMixin(LitElement) {
  static get properties() {
    return {
      /**
       * Set to URL to render <a> element styled as button.
       */
      link: {
        type: String,
        reflect: true
      },
      target: {
        type: String,
				reflect: true
      },
      toggle: {
        type: String,
				reflect: true
      },
      event: {
        type: String,
				reflect: true
      },
			elmid: {
				type: String,
				reflect: true
			},
			value: {
				type: String,
				reflect: true
			}
    };
  }

  static get styles() {
    return [azButtonStyles];
  }

  constructor() {
    super();
  }

  attributeChangedCallback(name, oldVal, newVal) {
    // console.log('attribute change: ', name, newVal);
    super.attributeChangedCallback(name, oldVal, newVal);
  }

  changeAttributes() {
    this.setAttribute('closed', 'true');
    this.setAttribute('aria-expanded', 'true')
    this.requestUpdate();
  }

	


  _handleClick(e) {
    if(this.event){
      let event = new Event(this.event);
      document.querySelector(this.target).dispatchEvent(event);
      return
    }
    else {
      let openAzOffCanvasMenu = new Event('open-az-offcanvas-menu');
      document.querySelector(this.target).dispatchEvent(openAzOffCanvasMenu);
      console.log(this);
    }
  }

	trackClicks(e){			
		// Add window.dataLayer if doesnt exist
		window.dataLayer = window.dataLayer || [];
		// Fetch reference to the element that was actually clicked
		var targetElement = e.composedPath()[0];

		window.dataLayer.push({
			event: 'shadow_event_' + e.type,
			shadow_event: {
				elementInnerHTML: targetElement.innerHTML.replace("\n", "").replace("<!---->", "").replace("<slot></slot>", "").trim() || '',
				elementInnerText: targetElement.innerText || '',
				title: 'shadow-dom-link',
				element: targetElement,
				elementId: targetElement.id || '',
				elementClasses: targetElement.className || '',
				elementUrl: targetElement.href || targetElement.action || '',
				elementTarget: targetElement.target || '',
				originalEvent: e,
				inShadowDom: true
			}
		});
	}

  render() {	
    return html`
      ${this.link ? 
				html`<a class="button" href="${this.link}" ?disabled="${this.disabled}" @click="${this.trackClicks}" id="${this.elmid}">${this.value}<slot></slot></a>`
        : 
				html`<button type="button" class="button" ?disabled="${this.disabled}" role="presentation" @click="${this._handleClick, this.trackClicks}" id="${this.elmid}">${this.value}<slot></slot></button>`}
    `;
  }

  firstUpdated() {
    super.firstUpdated();
    this.setAttribute('role', 'button');
  }

  /**
   * @protected
   */
  get focusElement() {
    return this.shadowRoot.querySelector('.button');
  }
}
customElements.get('az-button') || customElements.define('az-button', AzButton);
