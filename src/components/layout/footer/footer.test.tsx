import { render, screen } from '@testing-library/react'

import Footer from './footer'

describe('Footer', () => {
  it('should render', async () => {
    render(<Footer />)
    const element = document.querySelector('footer')
    expect(element).toBeInTheDocument()
  })

  it('should render with text', async () => {
    render(<Footer />)
    expect(
      screen.getByText('© 2024 TheMovie. All Right Reserved.')
    ).toBeInTheDocument()
  })
})
