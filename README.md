# Shared Web Components for the University of Arizona

This repository contains the following web components that are created using the
[lit project](https://lit.dev/), and made to match Arizona Bootstrap V2.

- az-footer
- az-redbar
- az-button
- az-main-menu
- az-middle-header
- az-select-menu



## How to use

Include Javascript from CDN in your project.
```
<script src="cdn.digital.arizona.edu/lib/az-web-components/js/<component-name>.js"></script>
```

Add the web component anywhere on the page.

`<az-button>This is a button!</az-button>`



```
<az-button
  theme="primary"
	redbar
	link="https://www.arizona.edu"
	aria-expanded="false"
	aria-haspopup="true"
	target="az-main-menu"
	aria-controls="navbarOffcanvasDemo"
	>
		<svg class="icon" title="home" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z"/></svg>
		<span class="icon-text"> home </span>
</az-button>
```

### Option attributes available for `az-button`

`theme` (primary, az-red, red, bloom)

`outline`

`size` (`small` or `large`)

`redbar`

`link`

`target`

`toggle`

`event`

`elmid`

`value`

### How to contribute
Clone this repository
Navigate to the cloned repository via the command line

Install the build tools
```
npm install
```

Run the `develop` command.
```
npm run develop
```

