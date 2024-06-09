import { RouterProvider } from 'react-router-dom'
import Router from '@/router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AppDataProvider } from './hooks/app-context'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      throwOnError: true,
      refetchOnReconnect: false
    }
  }
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppDataProvider>
        <RouterProvider router={Router}></RouterProvider>
      </AppDataProvider>
    </QueryClientProvider>
  )
}

export default App
