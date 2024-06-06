export type Movie = {
  title?: string
  id: number
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  first_air_date: string
  name: string
  vote_average: number
  vote_count: number
  seasons: Season[]
}

export type MovieDetails = {
  adult: boolean
  backdrop_path: string
  budget: number
  genres: Genre[]
  homepage: string
  id: number
  imdb_id: string
  origin_country: string[]
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  revenue: number
  runtime: number
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export type Cast = {
  profile_path: string
  id: number
  name: string
  character: string
}

export type Trailer = {
  id: number
  site: string
  key: string
}

export type Season = {
  name: string | undefined
  seasonNumber: number
  id: number
  posterPath: string
  episodeCount: number
}

export type Genre = {
  id: number
  name: string
}
