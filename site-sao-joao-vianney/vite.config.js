import { defineConfig } from 'vite'
import { resolve } from 'node:path'

// Mantém cada capítulo como uma página HTML própria também no build de produção.
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, 'index.html'),
        infancia: resolve(import.meta.dirname, 'infancia-e-familia.html'),
        vocacao: resolve(import.meta.dirname, 'vocacao-sacerdotal.html'),
        ars: resolve(import.meta.dirname, 'chegada-a-ars.html'),
        missao: resolve(import.meta.dirname, 'missao-e-confissoes.html'),
        ultimosAnos: resolve(import.meta.dirname, 'ultimos-anos-e-morte.html'),
        legado: resolve(import.meta.dirname, 'beatificacao-canonizacao-e-legado.html'),
        reliquias: resolve(import.meta.dirname, 'reliquias.html'),
      },
    },
  },
})
