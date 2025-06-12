import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/mel/', // ou o nome do repositório no GitHub
  plugins: [react()],
});
