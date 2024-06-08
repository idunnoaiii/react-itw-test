import { render } from '@testing-library/react'

import Container from './container'

describe('Container', () => {
  it('should render', async () => {
    const { asFragment } = render(<Container>Test</Container>)
    expect(asFragment()).toMatchSnapshot()
  })
})
