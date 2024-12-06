# geist-jsrepo
A demo using jsrepo to broker components from shyakadavis's geist project.

## Setup

### 1. **Initialize SvelteKit**:
```bash
npx sv create
# add tailwind, prettier, eslint
```

### 2. **Copy Config Files**:

Copy [app.css](https://github.com/shyakadavis/geist/blob/main/src/app.css) to `src/app.css` 

Copy [tailwind.config.ts](https://github.com/shyakadavis/geist/blob/main/tailwind.config.ts) to `tailwind.config.ts`

Install tailwind dependencies:
```bash
npm install @pyncz/tailwind-mask-image @tailwindcss/typography tailwindcss-animate -D
```

### 3. Setup vite svg plugin:

Install plugin:
```bash
npm install @poppanator/sveltekit-svg -D
```

Add plugin in `vite.config.ts`:
```diff
+import svg from '@poppanator/sveltekit-svg';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit(), 
+		svg()
	]
});
```

> [!TIP]
> For Typescript support of `file.svg?component`, add this import to any `.d.ts` file in your project path:

### 4. Install fonts

```bash
npm install @fontsource/geist-sans @fontsource/geist-mono -D
```

### 5. Setup Theming

```bash
npm install mode-watcher -D
```

Add `<ModeWatcher/>` to `src/routes/+layout.svelte`
```diff
<script lang="ts">
+	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';
	let { children } = $props();
</script>

+<ModeWatcher/>
{@render children()}
```

### 6. Setup jsrepo

Run `init`:
```bash
npx jsrepo init --project --repos github/ieedan/geist/tree/jsrepo
```

Configure paths in `jsrepo.json`:
```diff
{
	"$schema": "https://unpkg.com/jsrepo@1.17.2/schemas/project-config.json",
	"repos": ["github/ieedan/geist/tree/jsrepo"],
	"includeTests": false,
	"watermark": true,
	"formatter": "prettier",
	"paths": {
		"*": "./src/lib/ts/blocks",
+       "ui": "$lib/components/ui",
+       "icons": "$lib/assets/icons",
+       "lib": "$lib/"
	}
}
```

### 7. Add components

```bash
npx jsrepo add # list

npx jsrepo add ui/snippet # individual
```
