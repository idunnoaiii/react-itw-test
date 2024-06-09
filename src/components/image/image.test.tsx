import { render, screen } from '@/test/utils'

import Image from './image'

describe('Image', () => {
  it('should render', () => {
    render(
      <Image
        src='/image.png'
        alt='img-alt'
      ></Image>
    )

    expect(screen.getByAltText('img-alt')).toBeInTheDocument()
  })
})
