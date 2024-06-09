import { render, screen } from '@/test/utils'

import { Movie } from '@/types/movie'
import Trending from './trending'

describe('Trending', () => {
  it('should render', () => {
    const movie: Movie = {
      id: 1,
      title: 'movie name',
      poster_path: '/poster_path',
      backdrop_path: '/backdrop_path',
      overview: 'movie overview',
      vote_average: 0,
      vote_count: 0,
      adult: false,
      genre_ids: [1, 2, 3],
      original_language: 'en',
      popularity: 0
    }

    render(
      <Trending
        movie={movie}
        onClick={() => {}}
        onPlayTrailer={() => {}}
      ></Trending>
    )
    expect(screen.getByText(`${movie.title}`)).toBeInTheDocument()
    expect(screen.getByText(`${movie.overview}`)).toBeInTheDocument()
    expect(screen.getByText(/Play trailer/)).toBeInTheDocument()
  })
})
