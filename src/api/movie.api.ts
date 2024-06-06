import api from '@/api/api'
import { Cast, Movie, Genre, Trailer, MovieDetails } from '@/types/movie'
import { BaseListResponse, BasePagedResponse } from '@/types/base'
import { GetCastsResponse, GetGenresResponse } from '@/api/movie.type'

export const getTrendings = (): Promise<Movie[]> =>
  api.get<BasePagedResponse<Movie>>('/trending/movie/week').then((res) => res.data.results)

export const getInTheaters = (): Promise<Movie[]> =>
  api.get<BasePagedResponse<Movie>>('/movie/now_playing').then((res) => res.data.results)

export const getPopulars = (page = 1): Promise<Movie[]> =>
  api
    .get<BasePagedResponse<Movie>>(`/movie/popular`, {
      params: {
        page
      }
    })
    .then((res) => res.data.results)

// export const getTopRated = async (
//   page = 1
// ): Promise<{
//   films: Film[],
//   totalPages: number
// }> => {
//   try {
//     const { data } = await axiosClient.get<
//       any,
//       AxiosResponse<{
//         results: unknown[],
//         total_pages: number
//       }>
//     >(`/${mediaType}/top_rated`, {
//       params: {
//         page,
//       },
//     })

//     return {
//       films: data.results.map((val) => formatResult(val, mediaType)),
//       totalPages: data.total_pages,
//     }
//   } catch (error) {
//     console.error(error)
//   }

//   return {
//     films: [],
//     totalPages: 0,
//   }
// }

// export const search = async (
//   query: string,
//   page = 1
// ): Promise<{
//   totalPages: number
//   totalResults: number
//   films: Film[]
// }> => {
//   try {
//     const { data } = await axiosClient.get<
//       any,
//       AxiosResponse<{
//         total_pages: number,
//         total_results: number
//         results: unknown[]
//       }>
//     >(`/search/multi`, {
//       params: {
//         query,
//         page,
//       },
//     })

//     return {
//       totalPages: data.total_pages,
//       totalResults: data.total_results,
//       films: data.results.map((val) => formatResult(val)),
//     }
//   } catch (error) {
//     console.error(error)
//   }

//   return {
//     totalPages: 0,
//     totalResults: 0,
//     films: [],
//   }
// }

export const getGenres = (): Promise<Genre[]> =>
  api.get<GetGenresResponse>(`/genre/movie/list`).then((res) => res.data.genres)

export const getDetail = async (id: number): Promise<null | MovieDetails> =>
  api.get<null | MovieDetails>(`/movie/${id}`).then((res) => res.data)

export const getCasts = async (id: number): Promise<Cast[]> =>
  api.get<GetCastsResponse>(`/movie/${id}/credits`).then((res) => res.data.cast)

export const getTrailers = async (id: number): Promise<Trailer[]> =>
  api.get<BaseListResponse<Trailer>>(`/movie/${id}/videos`).then((res) => res.data.results?.filter((t) => t.site === 'YouTube'))

export const getRecommendations = async (id: number): Promise<Movie[]> =>
  api.get<BaseListResponse<Movie>>(`/movie/${id}/recommendations`).then((res) => res.data.results)

// export const getSeason = async (tvId: number, seasonNumber: number): Promise<Season | null> => {
//   try {
//     const { data } = await axiosClient.get<any, any>(`/tv/${tvId}/season/${seasonNumber}`)

//     const film = await getDetail('tv', tvId)

//     return {
//       id: data.id,
//       filmName: film?.title || '',
//       name: data.name,
//       posterPath: data.poster_path,
//       seasonNumber: data.season_number,
//       airDate: data.air_date,
//       episodes: data.episodes.map(
//         (episode: any) =>
//           ({
//             id: episode.id,
//             title: episode.name,
//             overview: episode.overview,
//             airDate: episode.air_date,
//             stillPath: episode.still_path,
//             episodeNumber: episode.episode_number
//           }) satisfies Episode
//       )
//     }
//   } catch (error) {
//     console.error(error)
//   }

//   return null
// }

export const discover = async (page = 1): Promise<BasePagedResponse<Movie>> =>
  await api
    .get<BasePagedResponse<Movie>>(`/discover/movie`, {
      params: {
        page
      }
    })
    .then((res) => res.data)
