import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./styles/fonts.css"
import { theme } from './config/chakra-theme.ts'
import { ChakraBaseProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"

const client = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ChakraBaseProvider theme={theme}>
      <QueryClientProvider client={client}>
          <App />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </ChakraBaseProvider>
    </Provider>
  </StrictMode>
  ,
)
