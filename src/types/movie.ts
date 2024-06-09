export type Movie = {
  title: string
  id: number
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  origin_country?: string[]
  original_language: string
  original_name?: string
  overview: string
  popularity: number
  poster_path: string
  first_air_date?: string
  vote_average: number
  vote_count: number
}

export type MovieDetails = Omit<Movie, 'genre_ids'> & {
  budget: number
  genres: Genre[]
  homepage: string
  imdb_id: string
  original_title: string
  release_date: string
  revenue: number
  runtime: number
  status: string
  tagline: string
  video: boolean
}

export type Cast = {
  profile_path: string | null
  id: number
  name: string
  character: string
}

export type Trailer = {
  id: string
  site: string
  key: string
}

export type Genre = {
  id: number
  name: string
}
