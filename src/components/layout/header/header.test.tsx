import { renderWithWrapper, screen, waitFor } from '@/test/utils'

import Header from './header'

describe(
  'Header',
  {
    concurrent: true
  },
  () => {
    it('should render', async () => {
      renderWithWrapper(<Header />)
      await waitFor(
        () => {
          const element = screen.getByRole('brand')
          expect(element).toBeInTheDocument()
        },
        { timeout: 5000 }
      )
    })

    it('should render with text', async () => {
      renderWithWrapper(<Header />)
      await waitFor(
        () => {
          expect(screen.getByText('TheMovie')).toBeInTheDocument()
        },
        { timeout: 5000 }
      )
    })
  }
)
