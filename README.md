# Game Demo using React Typescript with Vite

This is a simple game demo using React Typescript with Vite.

## About set up

### Step 1: Install Bun (Just experienced it for the first time)

```bash
npm install -g bun
```

### Step 2: Create a new project

```bash
bun create vite
```

### Step 3: Config Vite

1. Choose a name for your project, I used `transport-game`
2. Choose a template, I used `react` and `typescript + swc`

### Step 4: Install dependencies

```bash
cd transport-game
bun i
```

## About Deployment

### Step 1: Enable GitHub Actions
- Go to your repository
- Click on `Settings`
- Scroll down to `Actions`
- Click on `General`
- Scroll down to `Workflow permissions`
- Enable `Read and write permissions`
- Click on `Save` down below

### Step 2: Choose GitHub Pages Source from the Actions
- Go to your repository
- Click on `Settings`
- Scroll down to `Pages`
- Click on `Source`
- Choose `GitHub Actions` from the dropdown

### Step 3: Configure the GitHub Actions

1. Create a new file `.github/workflows/deploy.yaml`
2. You can copy the content down below and paste it into the file

<details>
<summary>Click to see the content</summary>

```yaml
name: deploy

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node.js v20.x
        uses: actions/setup-node@v1
        with:
          node-version: '20.x'

      - name: Install
        run: yarn install

      - name: Build
        run: yarn build

      - name: Setup Pages
        uses: actions/configure-pages@v3

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v1
        with:
          path: 'dist'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```
</details>

### Step 4: Config page root

As the github pages will be deployed to `https://<username>.github.io/<repository-name>`, you need to set the `base` in the `vite.config.ts` to `/<repository-name>/`.

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/transport-game/', // Note: This is the repository name, modify it to your own
});
```
