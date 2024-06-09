import Router from '@/router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import FullAppLoading from './components/layout/full-app-loading/full-app-loading'
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
        <Suspense fallback={<FullAppLoading></FullAppLoading>}>
          <RouterProvider router={Router}></RouterProvider>
        </Suspense>
      </AppDataProvider>
    </QueryClientProvider>
  )
}

export default App
