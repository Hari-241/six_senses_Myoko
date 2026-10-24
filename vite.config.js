import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages project-site base path.
// This MUST match the repo name exactly (with leading and trailing slashes)
// or every asset (images, fonts, JS chunks) will 404 on the published site.
// Repo: https://github.com/Hari-241/six_senses_Myoko
const REPO_BASE = '/six_senses_Myoko/'

export default defineConfig({
  base: REPO_BASE,
  plugins: [react()],
})
