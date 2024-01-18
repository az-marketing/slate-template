export const eventDataLayerPush = (e, location = '') => {  
  // Add window.dataLayer if doesnt exist
  window.dataLayer = window.dataLayer || [];
  // Fetch reference to the element that was actually clicked
  var targetElement = e.composedPath()[0];
  // Fetch reference to the element's parent dropdown which was clicked
  var parentDropDown = e.composedPath()[3].innerText ? e.composedPath()[3].innerText.split("\n")[0] : '';
  
  window.dataLayer.push({
    event: 'shadow_event_' + e.type,
    shadow_event: {
      elementInnerHTML: targetElement.textContent || '',
      elementInnerText: targetElement.innerText || '',
      title: 'shadow-dom-link',
      element: targetElement,
      elementClasses: targetElement.className || '',
      elementId: targetElement.id || '',
      elementLocation: location || '',
      elementTarget: targetElement.target || '',
      elementUrl: targetElement.href || targetElement.action || '',
      originalEvent: e,
      parent: parentDropDown || "",
      inShadowDom: true
    }
  });
}