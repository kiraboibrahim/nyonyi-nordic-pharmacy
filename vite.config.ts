import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default ({mode}: {mode: string}) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};
  return defineConfig({
    base: process.env.VITE_BASE_URL,
    plugins: [react()], 
  })
}
