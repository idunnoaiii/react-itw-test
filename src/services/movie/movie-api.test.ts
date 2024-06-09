import {
  getCasts,
  getGenres,
  getInTheaterMovies,
  getMovieDetail,
  getPopularMovies,
  getRecommendations,
  getTrailers,
  getTrendingMoviess
} from '@/services/movie/movie-api'
import {
  castsData,
  genresData,
  inTheaterMoviesData,
  movieDetailsData,
  popularMoviesData,
  recommendationsData,
  trailersData,
  trendingMoviesData
} from '@/test/mock/data'

describe('movie api', () => {
  it('getTrendingMoviess', async () => {
    const res = await getTrendingMoviess()
    expect(res).toBeDefined()
    expect(res).toEqual(trendingMoviesData.results)
  })

  it('getInTheaterMovies', async () => {
    const res = await getInTheaterMovies()
    expect(res).toBeDefined()
    expect(res).toEqual(inTheaterMoviesData.results)
  })

  it('getPopularMovies', async () => {
    const res = await getPopularMovies()
    expect(res).toBeDefined()
    expect(res).toEqual(popularMoviesData.results)
  })

  it('getGenres', async () => {
    const res = await getGenres()
    expect(res).toBeDefined()
    expect(res).toEqual(genresData)
  })

  it('getMovieDetail', async () => {
    const res = await getMovieDetail(1000)
    expect(res).toBeDefined()
    expect(res).toEqual(movieDetailsData)
  })

  it('getCasts', async () => {
    const res = await getCasts(1000)
    expect(res).toBeDefined()
    expect(res).toEqual(castsData)
  })

  it('getTrailers', async () => {
    const res = await getTrailers(1000)
    expect(res).toBeDefined()
    expect(res).toEqual(trailersData)
  })

  it('getRecommendations', async () => {
    const res = await getRecommendations(1000)
    expect(res).toBeDefined()
    expect(res).toEqual(recommendationsData.results)
  })
})
