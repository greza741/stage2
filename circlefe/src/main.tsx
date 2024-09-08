import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./styles/fonts.css"
import { theme } from './config/chakra-theme.ts'
import { ChakraBaseProvider } from '@chakra-ui/react'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraBaseProvider theme={theme}>
      <App />
    </ChakraBaseProvider>
  </StrictMode>,
)
