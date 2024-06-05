import { fetchMovies } from '@/api/movie.api'
import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'

export default function HomePage() {
  const [page, setPage] = useState(1)

  const result = useQuery({
    queryKey: ['movies', page],
    queryFn: () => fetchMovies(page)
  })

  return (
    <>
      <div>Home</div>
      <ul>{result.data?.map((movie) => <li key={movie.id}>{movie.name}</li>)}</ul>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </>
  )
}
