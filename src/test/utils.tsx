import FullAppLoading from '@/components/layout/full-app-loading'
import { AppDataProvider } from '@/hooks/app-context'
import RootErrorPage from '@/pages/error/root-error-page'
import logError from '@/services/logger'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { cleanup, render } from '@testing-library/react'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter } from 'react-router-dom'
import { afterEach } from 'vitest'

afterEach(() => {
  cleanup()
})

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false
    }
  }
})

function customRender(ui: React.ReactElement, options = {}) {
  return render(ui, {
    wrapper: ({ children }) => (
      <ErrorBoundary
        FallbackComponent={RootErrorPage}
        onReset={() => {
          location.href = '/'
        }}
        onError={logError}
      >
        <QueryClientProvider client={queryClient}>
          <AppDataProvider>
            <Suspense fallback={<FullAppLoading/>}>
              <BrowserRouter>{children}</BrowserRouter>
            </Suspense>
          </AppDataProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    ),
    ...options
  })
}

export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
export { customRender as renderWithWrapper }
