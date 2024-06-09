import { render } from '@testing-library/react'

import FullAppLoading from './full-app-loading'

describe('FullAppLoading', () => {
  it('should render', async () => {
    const { asFragment } = render(<FullAppLoading />)
    expect(asFragment()).toMatchSnapshot()
  })
})
