import { question } from './questions'
import { answers } from './answers'
import { defineConfig } from 'vite'

import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
