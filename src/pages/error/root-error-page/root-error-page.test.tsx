import { render, screen } from '@testing-library/react'

import RootErrorPage from './root-error-page'

describe('RootErrorPage', () => {
  it('should render', async () => {
    render(<RootErrorPage />)
    expect(screen.getByText("There's a problem.")).toBeInTheDocument()
  })
})
