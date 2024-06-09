import { renderWithWrapper, screen, waitFor } from '@/test/utils'

import DefaultLayout from './default-layout'

describe(
  'DefaultLayout',
  {
    concurrent: true
  },
  () => {
    it('should render', async () => {
      renderWithWrapper(<DefaultLayout>Content</DefaultLayout>)
      await waitFor(
        () => {
          const element = screen.getByText(/Content/)
          expect(element).toBeInTheDocument()
        },
        { timeout: 5000 }
      )
    })

    it('should render header', async () => {
      renderWithWrapper(<DefaultLayout>Content</DefaultLayout>)
      await waitFor(
        () => {
          const element = screen.getByRole('brand')
          expect(element).toBeInTheDocument()
        },
        { timeout: 5000 }
      )
    })

    it('should render footer', async () => {
      renderWithWrapper(<DefaultLayout>Content</DefaultLayout>)
      await waitFor(
        () => {
          const element = document.querySelector('footer')
          expect(element).toBeInTheDocument()
        },
        { timeout: 5000 }
      )
    })
  }
)
