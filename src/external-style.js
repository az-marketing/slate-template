document.addEventListener('DOMContentLoaded', () => {
	// JS that manipulates CSS styles
	const link = document.createElement('link'); 
	link.rel = 'stylesheet';
	link.href = '<link href="https://cdn.digital.arizona.edu/lib/az-icons/main/az-icons-styles.css" rel="stylesheet">';

	document.head.appendChild(link); 
  });