import { renderWithWrapper, screen, userEvent, waitFor } from '@/test/utils'

import HomePage from './home-page'

describe('HomePage', () => {
  it('should render', async () => {
    renderWithWrapper(<HomePage></HomePage>)
    await waitFor(
      () => {
        expect(screen.getByText('In Theaters')).toBeInTheDocument()
        expect(screen.getByText('Populars')).toBeInTheDocument()
      },
      { timeout: 10000 }
    )
  })

  it('should render', async () => {
    renderWithWrapper(<HomePage></HomePage>)
    await waitFor(
      () => {
        expect(screen.getByText('In Theaters')).toBeInTheDocument()
        expect(screen.getByText('Populars')).toBeInTheDocument()
      },
      { timeout: 10000 }
    )
  })

  it(
    'should show movie trailer modal',
    {
      timeout: 10000
    },
    async () => {
      renderWithWrapper(<HomePage></HomePage>)
      await waitFor(
        async () => {
          const playButton = screen.getAllByText(
            'Play trailer'
          )[0] as HTMLSpanElement
          await userEvent.click(playButton)
          await waitFor(
            () => {
              const iframe = document.querySelector('iframe')
              expect(iframe).toBeInTheDocument()
            },
            { timeout: 10000 }
          )
        },
        { timeout: 10000 }
      )
    }
  )
})
