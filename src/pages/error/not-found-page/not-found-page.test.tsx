import { render, screen } from '@testing-library/react'

import NotFoundPage from './not-found-page'

describe('NotFoundPage', () => {
  it('should render', async () => {
    render(<NotFoundPage />)
    expect(screen.getByText('404 - Not Found')).toBeInTheDocument()
  })
})
