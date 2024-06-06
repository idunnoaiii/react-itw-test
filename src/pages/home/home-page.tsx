import DefaultLayout from '@/components/layout/default-layout'
import Section from '@/components/section'
import { Slider } from '@/components/slider/slider'
import Trending from './components/trending'
import { Card } from '@/components/card'
import { useNavigate } from 'react-router-dom'
import MovieSlider from '@/pages/home/components/movie-slider'
import { useGetInTheaters, useGetPopulars, useGetTrendings } from '@/pages/home/hooks'
import { Movie } from '@/types/movie'
import { useState } from 'react'
import { getFulImageSrc } from '@/utils'
import { getTrailers } from '@/api/movie.api'
import { TrailerModal } from '@/components/trailer-modal'
import { YOUTUBE_TRAILER } from '@/constants'

export default function HomePage() {
  const navigate = useNavigate()

  const { data: trendings } = useGetTrendings()
  const { data: inTheaters } = useGetInTheaters()
  const { data: populars } = useGetPopulars()

  const [trailerSrc, setTrailerSrc] = useState('')

  const playTrailer = async (film: Movie) => {
    const trailers = await getTrailers(film.id)
    setTrailerSrc(YOUTUBE_TRAILER.replace('{key}', trailers[0].key))
  }

  const goToDetailPage = (movie: Movie) => {
    navigate(`/details/${movie.id}`)
  }

  return (
    <>
      <DefaultLayout>
      <TrailerModal
        onHide={() => setTrailerSrc('')}
        src={trailerSrc}
      ></TrailerModal>
        <Section className='py-0 '>
          <Slider className='slick-slider' autoplay={true} slidesToShow={1} slidesToScroll={1}>
            {(isSwipe) =>
              trendings?.map((movie, i) => (
                <Trending
                  onClick={() => {
                    !isSwipe ?? navigate(`/movie/${movie.id}`)
                  }}
                  onPlayTrailer={() => playTrailer(movie)}
                  movie={movie}
                  key={i}
                ></Trending>
              ))
            }
          </Slider>
        </Section>
        <Section title='In Theaters'>
          <MovieSlider className='slick-slider movie-slider' slidesToShow={5} slidesToScroll={5}>
            {(_) =>
              inTheaters?.map((movie, i) => (
                <Card
                  withPlay={false}
                  title={movie.name}
                  imageSrc={getFulImageSrc(movie.poster_path, 'w500')}
                  key={i}
                  onClick={() => goToDetailPage(movie)}
                ></Card>
              ))
            }
          </MovieSlider>
        </Section>
        <Section title='Populars'>
          <MovieSlider className='slick-slider movie-slider' slidesToShow={5} slidesToScroll={5}>
            {(_) =>
              populars?.map((movie, i) => (
                <Card
                  withPlay={false}
                  title={movie.name}
                  imageSrc={getFulImageSrc(movie.poster_path, 'w500')}
                  key={i}
                  onClick={() => goToDetailPage(movie)}
                ></Card>
              ))
            }
          </MovieSlider>
        </Section>
      </DefaultLayout>
    </>
  )
}
