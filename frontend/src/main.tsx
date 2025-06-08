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

const config = defineConfig({
  theme: {
    tokens: {
      colors: {},
    },
  },
})

const system = createSystem(defaultConfig, config)

createRoot(document.getElementById('root')!).render(

  <ChakraProvider value={system}>
    <RouterProvider router={router}/>
  </ChakraProvider>
)
