import { render, screen } from '@testing-library/react'

import Loading from './loading'

describe('Loading', () => {
  it('should render', async () => {
    render(<Loading />)
    const element = screen.getByRole('loader')
    expect(element).toBeInTheDocument()
  })

  it('should render with color class', async () => {
    render(<Loading />)
    const element = screen.getByRole('loader')
    const icon = element.querySelector('svg')
    expect(icon).toHaveClass('text-primary')
  })
})
