import { defineConfig, loadEnv } from 'vite' // Importe loadEnv
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => { // Receba o 'mode' como argumento
  const env = loadEnv(mode, process.cwd(), ''); // Carregue as variáveis de ambiente

  return {
    plugins: [react()],
    define: {
      'process.env': env, // Defina 'process.env' para as variáveis carregadas
    },
  };
});
