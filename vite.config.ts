import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      utils: path.resolve(__dirname, './src/utils/'),
    },
    extensions: ['.tsx', '.ts', '.js', '.less', 'css'],
  },
})
