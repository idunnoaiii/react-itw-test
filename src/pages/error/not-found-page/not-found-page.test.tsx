import { renderWithWrapper, screen, waitFor } from '@/test/utils'

import NotFoundPage from './not-found-page'

describe('NotFoundPage', () => {
  it('should render', async () => {
    renderWithWrapper(<NotFoundPage />)
    await waitFor(
      () => {
        expect(screen.getByText('404 - Not Found')).toBeInTheDocument()
      },
      { timeout: 5000 }
    )
  })
})
