# `astro-vt-callback-wrapper`

An Astro Integration that allows provides utilities around the client router's lifecylce events. The code is based on @0Dexz0's [proposal on the Astro roadmap](https://github.com/withastro/roadmap/discussions/1436).

## Prerequisites

- Astro 7

## Getting Started

First, install the integration:

```bash
# npm
npx astro add astro-vt-callback-wrapper

# pnpm
pnpm astro add astro-vt-callback-wrapper

# yarn
yarn astro add astro-vt-callback-wrapper
```

Alternatively, you can manually install the package and add it to your astro.config.mjs file:

```bash
# npm
npm install astro-vt-callback-wrapper

# pnpm
pnpm add astro-vt-callback-wrapper

# yarn
yarn add astro-vt-callback-wrapper
```

```js
// @ts-check
import { defineConfig } from "astro/config";
import vtCallbackWrapper from "astro-vt-callback-wrapper";

// https://astro.build/config
export default defineConfig({
	// ...
	integrations: [vtCallbackWrapper()],
});
```
