import { http, HttpResponse } from 'msw'

import casts from './data/casts.json'
import genres from './data/genres.json'
import inTheaterMovies from './data/in-theater-movies.json'
import movieDetails from './data/movie-details.json'
import popularMovies from './data/popular-movies.json'
import recommendations from './data/recommendations-movie.json'
import trailers from './data/trailers.json'
import trendingMovies from './data/trending-movies.json'

const handlers = [
  http.get(import.meta.env.VITE_API_URL + '/trending/movie/week', async () => {
    return HttpResponse.json(trendingMovies)
  }),
  http.get(import.meta.env.VITE_API_URL + '/movie/now_playing', () =>
    HttpResponse.json(inTheaterMovies)
  ),
  http.get(import.meta.env.VITE_API_URL + '/movie/popular', () =>
    HttpResponse.json(popularMovies)
  ),
  http.get(import.meta.env.VITE_API_URL + '/genre/movie/list', () =>
    HttpResponse.json(genres)
  ),

  http.get(import.meta.env.VITE_API_URL + '/movie/:id/credits', () =>
    HttpResponse.json(casts)
  ),
  http.get(import.meta.env.VITE_API_URL + '/movie/:id/videos', () =>
    HttpResponse.json(trailers)
  ),
  http.get(import.meta.env.VITE_API_URL + '/movie/:id/recommendations', () =>
    HttpResponse.json(recommendations)
  ),
  http.get(import.meta.env.VITE_API_URL + '/movie/*', () =>
    HttpResponse.json(movieDetails)
  )
]

export default handlers
