import { BasePagedResponse } from '@/types/base'
import { Cast, Genre, Movie, MovieDetails, Trailer } from '@/types/movie'
import casts from './casts.json'
import genres from './genres.json'
import inTheaterMovies from './in-theater-movies.json'
import movieDetails from './movie-details.json'
import popularMovies from './popular-movies.json'
import recommendations from './recommendations-movie.json'
import trailers from './trailers.json'
import trendingMovies from './trending-movies.json'

const trendingMoviesData: BasePagedResponse<Movie> = trendingMovies
const inTheaterMoviesData: BasePagedResponse<Movie> = inTheaterMovies
const popularMoviesData: BasePagedResponse<Movie> = popularMovies
const genresData: Genre[] = genres.genres
const movieDetailsData: MovieDetails = movieDetails
const castsData: Cast[] = casts.cast
const trailersData: Trailer[] = trailers.results
const recommendationsData: BasePagedResponse<Movie> = recommendations

export {
  castsData,
  genresData,
  inTheaterMoviesData,
  movieDetailsData,
  popularMoviesData,
  recommendationsData,
  trailersData,
  trendingMoviesData
}
