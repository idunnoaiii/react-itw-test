import Card from '@/components/card'
import DefaultLayout from '@/components/layout/default-layout'
import FullAppLoading from '@/components/layout/full-app-loading/full-app-loading'
import Section from '@/components/section'
import { Slider } from '@/components/slider/slider'
import { YOUTUBE_TRAILER } from '@/constants'
import MovieSlider from '@/pages/home/components/movie-slider'
import {
  useGetInTheaters,
  useGetPopulars,
  useGetTrendings
} from '@/pages/home/hooks'
import { TrailerModal } from '@/pages/shared/trailer-modal'
import { getTrailers } from '@/services/movie/movie-api'
import { Movie } from '@/types/movie'
import { getFulImageSrc } from '@/utils'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Trending from './components/trending'

export default function HomePage() {
  const navigate = useNavigate()

  const { data: trendings, isLoading: trendingsLoading } = useGetTrendings()
  const { data: inTheaters, isLoading: inTheatersLoading } = useGetInTheaters()
  const { data: populars, isLoading: popularsLoading } = useGetPopulars()

  const [trailerSrc, setTrailerSrc] = useState('')

  const playTrailer = async (film: Movie) => {
    const trailers = await getTrailers(film.id)
    setTrailerSrc(YOUTUBE_TRAILER.replace('{key}', trailers[0].key))
  }

  const goToDetailPage = (movie: Movie) => {
    navigate(`/details/${movie.id}`)
  }

  if (trendingsLoading || inTheatersLoading || popularsLoading) {
    return <FullAppLoading></FullAppLoading>
  }

  return (
    <>
      <DefaultLayout>
        <TrailerModal
          onHide={() => setTrailerSrc('')}
          src={trailerSrc}
        ></TrailerModal>
        <Section className='py-0 '>
          <Slider
            className='slick-slider'
            autoplay={true}
            slidesToShow={1}
            slidesToScroll={1}
          >
            {(isSwipe) =>
              trendings?.map((movie) => (
                <Trending
                  onClick={() => {
                    !isSwipe ?? navigate(`/movie/${movie.id}`)
                  }}
                  onPlayTrailer={() => playTrailer(movie)}
                  movie={movie}
                  key={movie.id}
                ></Trending>
              ))
            }
          </Slider>
        </Section>
        <Section title='In Theaters'>
          <MovieSlider
            className='slick-slider movie-slider'
            slidesToShow={5}
            slidesToScroll={5}
          >
            {() =>
              inTheaters?.map((movie) => (
                <Card
                  withPlay={false}
                  title={movie.name}
                  imageSrc={getFulImageSrc(movie.poster_path, 'w500')}
                  key={movie.id}
                  onClick={() => goToDetailPage(movie)}
                ></Card>
              ))
            }
          </MovieSlider>
        </Section>
        <Section title='Populars'>
          <MovieSlider
            className='slick-slider movie-slider'
            slidesToShow={5}
            slidesToScroll={5}
          >
            {() =>
              populars?.map((movie) => (
                <Card
                  withPlay={false}
                  title={movie.name}
                  imageSrc={getFulImageSrc(movie.poster_path, 'w500')}
                  key={movie.id}
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
