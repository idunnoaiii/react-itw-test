import { renderWithWrapper, screen, waitFor } from '@/test/utils'

import App from './App'

describe('App', () => {
  it('should render successfully', async () => {
    const { baseElement } = renderWithWrapper(<App />)
    await waitFor(
      () => {
        expect(baseElement).toBeTruthy()
      },
      { timeout: 5000 }
    )
  })

  it('should render with global error boundary', async () => {
    function AppWithError() {
      // throw error on purpose
      throw new Error('Test Error')
      return <div>Unreachable</div>
    }
    renderWithWrapper(<AppWithError />)
    await waitFor(
      () => {
        expect(screen.getByText(/There's a problem/)).toBeInTheDocument()
      },
      { timeout: 5000 }
    )
  })
})
