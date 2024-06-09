import {
  getCasts,
  getMovieDetail,
  getRecommendations,
  getTrailers
} from '@/services/movie.api'
import { useQuery } from '@tanstack/react-query'

export const useGetInTheaters = (id: number) => {
  return useQuery({
    queryKey: ['movieDetails', id],
    queryFn: () => getMovieDetail(id)
  })
}

export const useGetCasts = (id: number) => {
  return useQuery({
    queryKey: ['moveCasts', id],
    queryFn: () => getCasts(id)
  })
}

export const useGetTrailers = (id: number) => {
  return useQuery({
    queryKey: ['movieTrailers', id],
    queryFn: () => getTrailers(id)
  })
}

export const useGetRecommendations = (id: number) => {
  return useQuery({
    queryKey: ['movieRecommendations', id],
    queryFn: () => getRecommendations(id)
  })
}
