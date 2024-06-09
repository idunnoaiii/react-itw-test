import { render } from '@/test/utils'

import MovieSlider from './movie-slider'

describe('MovieSlider', () => {
  it('should render with certain number of items', () => {
    const numberOfItems = 10

    render(
      <MovieSlider infinite={false}>
        {() =>
          Array.from({ length: numberOfItems }).map((_, i) => (
            <div className='slider-item-content'>{i}</div>
          ))
        }
      </MovieSlider>
    )

    expect(document.querySelectorAll('.slider-item-content').length).toBe(
      numberOfItems
    )
  })
})
