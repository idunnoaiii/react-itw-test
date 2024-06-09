import { QueryClientProvider } from '@tanstack/react-query'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import FullAppLoading from './components/layout/full-app-loading/full-app-loading.tsx'
import { AppDataProvider } from './hooks/app-context.tsx'
import './index.css'
import RootErrorPage from './pages/error/root-error-page/root-error-page.tsx'
import logError from './services/logger.ts'
import queryClient from './services/query-client.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={RootErrorPage}
      onReset={() => {
        location.href = '/'
      }}
      onError={logError}
    >
      <QueryClientProvider client={queryClient}>
        <AppDataProvider>
          <Suspense fallback={<FullAppLoading></FullAppLoading>}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </Suspense>
        </AppDataProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  </React.StrictMode>
)
