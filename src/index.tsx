import { Routes } from '@generouted/react-router/lazy'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Toaster } from 'sonner'
import './style.css'

const root = createRoot(document.getElementById('root')!)

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

root.render(
  <QueryClientProvider client={queryClient}>
    <Routes />
    <Toaster richColors position="top-right" />
  </QueryClientProvider>
)
