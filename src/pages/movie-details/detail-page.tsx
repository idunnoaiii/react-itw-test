import Card from '@/components/card'
import Image from '@/components/image'
import DefaultLayout from '@/components/layout/default-layout'
import FullAppLoading from '@/components/layout/full-app-loading'
import Section from '@/components/section'
import { YOUTUBE_TRAILER } from '@/constants'
import MovieSlider from '@/pages/home/components/movie-slider'
import {
  useGetCasts,
  useGetInTheaters,
  useGetRecommendations,
  useGetTrailers
} from '@/pages/movie-details/hooks'
import { TrailerModal } from '@/pages/shared/trailer-modal'
import { getFulImageSrc, youtubeThumbnail } from '@/utils'
import { useState } from 'react'
import {
  Navigate,
  useNavigate,
  useParams
} from 'react-router-dom'

export default function MovieDetailPage() {
  const { id } = useParams()
  const idInt = Number.parseInt(id ?? '')

  const {
    data: movie,
    isLoading: movieLoading,
    isFetched: movieFetched
  } = useGetInTheaters(idInt)

  const { data: casts, isError: castsError } =
    useGetCasts(idInt)
  const { data: trailers, isError: trailersError } =
    useGetTrailers(idInt)
  const {
    data: recommendations,
    isError: recommendationsError
  } = useGetRecommendations(idInt)

  const navigate = useNavigate()

  const [trailerSrc, setTrailerSrc] = useState('')

  const playTrailer = async (key: string) => {
    setTrailerSrc(YOUTUBE_TRAILER.replace('{key}', key))
  }

  if (movieLoading || movie == undefined) {
    return <FullAppLoading></FullAppLoading>
  }

  if (movie == null && !movieFetched) {
    ;<Navigate to={`404`}></Navigate>
  }

  return (
    <>
      <TrailerModal
        onHide={() => setTrailerSrc('')}
        src={trailerSrc}
      ></TrailerModal>
      <DefaultLayout>
        <div className='h-[450px] left-0 right-0 top-0 relative'>
          <div className='overlay-card-cover'></div>
          <Image
            src={getFulImageSrc(
              movie.backdrop_path,
              'original'
            )}
            className='rounded-0 rounded-none'
          ></Image>
        </div>

        <Section className='-mt-[150px] flex items-center relative z-10 mobile:block'>
          <Image
            src={getFulImageSrc(movie.poster_path, 'w500')}
            className='w-[200px] min-w-[200px] h-[300px] mobile:mx-auto'
          />
          <div className='px-3 flex flex-col items-start gap-3'>
            <p className='text-xl line-clamp-1'>
              {movie.title}
            </p>
            <ul className='flex items-center gap-3'>
              {movie.genres.map((genre) => (
                <li
                  key={genre.id}
                  className='px-3 py-1.5 bg-primary rounded-lg text-sm'
                >
                  {genre.name}
                </li>
              ))}
            </ul>
            <p className='line-clamp-3 opacity-[0.9]'>
              {movie.overview}
            </p>
          </div>
        </Section>

        <Section
          title='Casts'
          hidden={castsError || casts?.length === 0}
        >
          <div className='overflow-x-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-primary scrollbar-track-header'>
            <div className='flex items-center gap-3'>
              {casts?.map((cast) => (
                <div
                  className='flex-shrink-0 w-[200px] mb-6'
                  key={cast.id}
                >
                  <Card
                    withPlay={false}
                    imageSrc={getFulImageSrc(
                      cast.profile_path,
                      'w500'
                    )}
                  >
                    <p className='font-semibold'>
                      {cast.name}
                    </p>
                    <p className='opacity-[0.9] text-sm'>
                      {cast.character}
                    </p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section
          title='Trailers'
          hidden={trailersError || trailers?.length === 0}
        >
          <div className='overflow-x-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-primary scrollbar-track-header'>
            <div className='flex items-center gap-3 h-[300px]'>
              {trailers?.map((trailer) => (
                <Card
                  onClick={() => playTrailer(trailer.key)}
                  imageSrc={youtubeThumbnail(trailer.key)}
                  className='flex-shrink-0 w-[250px]'
                  key={trailer.id}
                ></Card>
              ))}
            </div>
          </div>
        </Section>

        <Section
          title='Recommendations'
          hidden={
            recommendationsError ||
            recommendations?.length === 0
          }
        >
          <MovieSlider>
            {() =>
              recommendations?.map((movie) => (
                <Card
                  withPlay={false}
                  onClick={() =>
                    navigate(`/details/${movie.id}`)
                  }
                  title={movie.title}
                  imageSrc={getFulImageSrc(
                    movie.poster_path,
                    'w500'
                  )}
                  key={movie.id}
                ></Card>
              ))
            }
          </MovieSlider>
        </Section>
      </DefaultLayout>
    </>
  )
}
