import { ChakraBaseProvider } from '@chakra-ui/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { theme } from './config/chakra-theme.ts'
import "./styles/fonts.css"



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraBaseProvider theme={theme}>
      <App />
    </ChakraBaseProvider>
  </StrictMode>
  ,
)
