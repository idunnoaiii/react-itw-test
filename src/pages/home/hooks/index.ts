import { getInTheaters, getPopulars, getTrailers, getTrendings } from '@/api/movie.api'
import { useQuery } from '@tanstack/react-query'

export const useGetTrendings = () => {
  return useQuery({
    queryKey: ['trending'],
    queryFn: () => getTrendings()
  })
}

export const useGetPopulars = () => {
  return useQuery({
    queryKey: ['populars'],
    queryFn: () => getPopulars()
  })
}

export const useGetTrailer = (id: number) => {
  return useQuery({
    queryKey: ['movieTrailer', id],
    queryFn: () => getTrailers(id).then((res) => res?.[0])
  })
}


export const useGetInTheaters = () => {
  return useQuery({
    queryKey: ['inTheaters'],
    queryFn: () => getInTheaters()
  })
}
