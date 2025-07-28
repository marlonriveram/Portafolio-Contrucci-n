// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react"
import { RouterProvider } from 'react-router'
import { router } from './routes/router.tsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Modal from 'react-modal'

const config = defineConfig({
  theme: {
    tokens: {
      colors: {},
    },
  },
})

const queriClient = new QueryClient()

const system = createSystem(defaultConfig, config)
Modal.setAppElement('#root') 
createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queriClient}>
    <ChakraProvider value={system}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </QueryClientProvider>
)
