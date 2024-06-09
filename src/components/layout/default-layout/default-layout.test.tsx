import { render, screen } from '@/test/utils'

import DefaultLayout from './default-layout'

describe('DefaultLayout', () => {
  it('should render', async () => {
    render(<DefaultLayout>Content</DefaultLayout>)
    const element = screen.getByText(/Content/)
    expect(element).toBeInTheDocument()
  })

  it('should render header', async () => {
    render(<DefaultLayout>Content</DefaultLayout>)
    const element = screen.getByRole('brand')
    expect(element).toBeInTheDocument()
  })

  it('should render footer', async () => {
    render(<DefaultLayout>Content</DefaultLayout>)
    const element = document.querySelector('footer')
    expect(element).toBeInTheDocument()
  })
})
