import api from '@/services/api'
import {
  BaseApiError as BaseApiError,
  GetCastsResponse,
  GetGenresResponse
} from '@/services/movie.type'
import { BaseListResponse, BasePagedResponse } from '@/types/base'
import { Cast, Genre, Movie, MovieDetails, Trailer } from '@/types/movie'

export const getTrendingMoviess = (): Promise<Movie[]> => {
  return api
    .get<BasePagedResponse<Movie>>('/trending/movie/week')
    .then((res) => res.data.results)
}

export const getInTheaterMovies = (): Promise<Movie[]> =>
  api
    .get<BasePagedResponse<Movie>>('/movie/now_playing')
    .then((res) => res.data.results)

export const getPopularMovies = (page = 1): Promise<Movie[]> =>
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
): Promise<BaseApiError | MovieDetails | null> => {
  try {
    const apiRes = await api.get<MovieDetails>(`/movie/${id}`)
    return apiRes.data
  } catch (error) {
    console.log(error)
    return null
  }
}

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
