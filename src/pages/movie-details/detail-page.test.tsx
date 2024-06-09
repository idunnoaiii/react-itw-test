import { renderWithWrapper, screen, waitFor } from '@/test/utils'

import { movieDetailsData } from '@/test/mock/data'
import DetailPage from './detail-page'

describe('DetailPage', () => {
  it('should render', async () => {
    renderWithWrapper(<DetailPage></DetailPage>)
    await waitFor(
      () => {
        expect(
          screen.getByText(`${movieDetailsData.title}`)
        ).toBeInTheDocument()

        expect(
          screen.getByText(`${movieDetailsData.overview}`)
        ).toBeInTheDocument()
      },
      { timeout: 10000 }
    )
  })
})
