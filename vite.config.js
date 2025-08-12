import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/MattTheMet.github.io/',
  plugins: [react()],
});

