export function eventDataLayerPush(e){			
	// FOR TESTING ----- REMOVE
	e.preventDefault();

	// Add window.dataLayer if doesnt exist
	window.dataLayer = window.dataLayer || [];
	
	// Fetch reference to the element that was actually clicked
	var targetElement = e.composedPath()[0];
	// Fetch reference to the element's parent dropdown which was clicked
	var parentDropDown = e.composedPath()[3];
	
	window.dataLayer.push({
		event: 'shadow_event_' + e.type,
		shadow_event: {
			elementInnerHTML: targetElement.textContent || '',
			elementInnerText: targetElement.innerText || '',
			title: 'shadow-dom-link',
			element: targetElement,
			elementId: targetElement.id || '',
			elementClasses: targetElement.className || '',
			elementUrl: targetElement.href || targetElement.action || '',
			elementTarget: targetElement.target || '',
			originalEvent: e,
			parentDropdown: parentDropDown.innerText.split("\n")[0] || "",
			inShadowDom: true
		}
	});

	console.log(window.dataLayer);
}