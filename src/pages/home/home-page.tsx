import { fetchMovies } from '@/api/movie.api'
import DefaultLayout from '@/components/layout/default-layout'
import Section from '@/components/section'
import { Slider } from '@/components/slider/slider'
import { Movie } from '@/types/movie'
import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import Trending from './components/trending'
import { Card } from '@/components/card'
import { useNavigate } from 'react-router-dom'
import MovieSlider from './components/movie-slider'

export default function HomePage() {
  // const [page, setPage] = useState(1)

  // const result = useQuery({
  //   queryKey: ['movies', page],
  //   queryFn: () => fetchMovies(page)
  // })
  //

  const navigate = useNavigate()

  const [trending, setTrending] = useState<Movie[]>([])
  const [inTheaters, setInTheaters] = useState<Movie[]>([])

  const fetchDummy = async () => {
    const arrs: Movie[] = []

    for (let i = 0; i < 10; i++) {
      const res = await fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=${1}`
      )
      const data = await res.json()
      arrs.push(...data.results)
    }

    setTrending(arrs)
    setInTheaters(arrs)
  }

  useEffect(() => {
    fetchDummy()
  }, [])

  return (
    <>
      <DefaultLayout>
        <Section className='py-0 '>
          <Slider className='slick-slider' autoplay={true} slidesToShow={1} slidesToScroll={1}>
            {(onSwipe) =>
              trending.map((movie, i) => (
                <Trending
                  onClick={() => {
                    !onSwipe ?? navigate(`/movie/${movie.id}`)
                  }}
                  onPlayTrailer={() => console.log('play trailer')}
                  movie={movie}
                  key={i}
                ></Trending>
              ))
            }
          </Slider>
        </Section>
        <Section title='In Theaters'>
          <MovieSlider className='slick-slider movie-slider' autoplay={true} slidesToShow={5} slidesToScroll={5}>
            {(_) => inTheaters.map((movie, i) => <Card movie={movie} key={i} onClick={() => console.log('click')}></Card>)}
          </MovieSlider>
        </Section>
        {/* <ul>{result.data?.map((movie) => <li key={movie.id}>{movie.name}</li>)}</ul>
        <button onClick={() => setPage(page + 1)}>Next</button> */}
      </DefaultLayout>
    </>
  )
}
