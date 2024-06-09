import api from '@/services/api'
import { Cast, Movie, Genre, Trailer, MovieDetails } from '@/types/movie'
import { BaseListResponse, BasePagedResponse } from '@/types/base'
import { GetCastsResponse, GetGenresResponse } from '@/services/movie.type'

export const getTrendingMoviess = (): Promise<Movie[]> =>
  api
    .get<BasePagedResponse<Movie>>('/trending/movie/week')
    .then((res) => res.data.results)

export const getInTheaterMovies = (): Promise<Movie[]> =>
  api
    .get<BasePagedResponse<Movie>>('/movie/now_playing')
    .then((res) => res.data.results)

export const getPopulars = (page = 1): Promise<Movie[]> =>
  api
    .get<BasePagedResponse<Movie>>(`/movie/popular`, {
      params: {
        page
      }
    })
    .then((res) => res.data.results)

export const getGenres = (): Promise<Genre[]> =>
  api.get<GetGenresResponse>(`/genre/movie/list`).then((res) => res.data.genres)

export const getMovieDetail = async (
  id: number
): Promise<null | MovieDetails> =>
  api.get<null | MovieDetails>(`/movie/${id}`).then((res) => res.data)

export const getCasts = async (id: number): Promise<Cast[]> =>
  api.get<GetCastsResponse>(`/movie/${id}/credits`).then((res) => res.data.cast)

export const getTrailers = async (id: number): Promise<Trailer[]> =>
  api
    .get<BaseListResponse<Trailer>>(`/movie/${id}/videos`)
    .then((res) => res.data.results?.filter((t) => t.site === 'YouTube'))

export const getRecommendations = async (id: number): Promise<Movie[]> =>
  api
    .get<BaseListResponse<Movie>>(`/movie/${id}/recommendations`)
    .then((res) => res.data.results)
