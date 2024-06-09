import { render, screen } from '@/test/utils'

import Header from './header'

describe('Header', () => {
  it('should render', async () => {
    render(<Header />)
    const element = screen.getByRole('brand')
    expect(element).toBeInTheDocument()
  })

  it('should render with text', async () => {
    render(<Header />)
    expect(screen.getByText('TheMovie')).toBeInTheDocument()
  })
})
