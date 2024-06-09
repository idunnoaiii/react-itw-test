import { render } from '@/test/utils'

import Slider from './slider'

describe('Slider', () => {
  it('should render with certain number of items', () => {
    const numberOfItems = 10

    render(
      <Slider infinite={false}>
        {() =>
          Array.from({ length: numberOfItems }).map((_, i) => (
            <div className='slider-item-content'>{i}</div>
          ))
        }
      </Slider>
    )

    expect(document.querySelectorAll('.slider-item-content').length).toBe(
      numberOfItems
    )
  })
})
