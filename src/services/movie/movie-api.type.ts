import { Cast, Genre } from '@/types/movie'

export type GetCastsResponse = {
  cast: Cast[]
}

export type GetGenresResponse = {
  genres: Genre[]
}

export type BaseApiError = {
  success: number
  status_code: string
  status_message: string
}
