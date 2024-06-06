import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Image from '@/components/image'
import { getFulImageSrc as getFullImgSrc, youtubeThumbnail } from '@/utils'
import { Cast, Movie, Trailer } from '@/types/movie'
import Section from '@/components/section'
import { Card } from '@/components/card'

export default function MovieDetailPage() {
  const [movie, setMovie] = useState<Movie | null>({
    adult: false,
    backdrop_path: '/mu3lEhGovyhKHPJzb7HNYtZUCDT.jpg',
    genre_ids: [10766],
    id: 206559,
    origin_country: ['ZA'],
    original_language: 'af',
    original_name: 'Binnelanders',
    overview:
      'A South African Afrikaans soap opera. It is set in and around the fictional private hospital, Binneland Kliniek, in Pretoria, and the storyline follows the trials, trauma and tribulations of the staff and patients of the hospital.',
    popularity: 3329.153,
    poster_path: '/v9nGSRx5lFz6KEgfmgHJMSgaARC.jpg',
    first_air_date: '2005-10-13',
    name: 'Binnelanders',
    vote_average: 5.5,
    vote_count: 67
  })

  const [casts, setCasts] = useState<Cast[]>([])
  const [trailers, setTrailers] = useState<Trailer[]>([]) 

  const fetch = async () => {
    const arr: any = []
    for (let i = 0; i < 20; i++) {
      arr.push(i)
    }
   
    setCasts(arr)
    setTrailers(arr)
  }

  useEffect(() => {
    fetch()
  }, [])

  const { params } = useParams()

  if (!movie) {
    return <div>null</div>
  }

  function playTrailer(key: string): void {
    throw new Error('Function not implemented.')
  }

  return (
    <>
      <div className='h-[300px] left-0 right-0 top-0 relative'>
        <div className='overlay-card-cover'></div>
        <Image src={getFullImgSrc(movie?.poster_path)} className='rounded-0 rounded-none'></Image>
      </div>

      {/* details */}
      <Section className='-mt-[150px] flex items-center relative z-10 mobile:block'>
        <Image src={getFullImgSrc(movie.poster_path)} className='w-[200px] min-w-[200px] h-[300px] mobile:mx-auto' />
        <div className='px-3 flex flex-col items-start gap-3'>
          <p className='text-xl line-clamp-1'>{movie.title}</p>
          <ul className='flex items-center gap-3'>
            {movie.genre_ids.map((id, i) => (
              <li key={id} className='px-3 py-1.5 bg-primary rounded-lg text-sm'>
                {/* {globalContext.genres[film.mediaType]?.find((g) => g.id === id)?.name} */}
              </li>
            ))}
          </ul>
          <p className='line-clamp-3 opacity-[0.9]'>{movie.overview}</p>
        </div>
      </Section>

      {/* casts */}
      <Section title='Casts' hidden={casts.length === 0}>
        <div className='overflow-x-scroll scrollbar-thin scrollbar-thumb-primary scrollbar-track-header'>
          <div className='flex items-center gap-3'>
            {casts.map((cast, i) => (
              <div className='flex-shrink-0 w-[200px] mb-6' key={i}>
                <Card withPlay={false} imageSrc={getFullImgSrc(cast.profilePath)}>
                  <p className='font-semibold'>{cast.name}</p>
                  <p className='opacity-[0.9] text-sm'>{cast.characterName}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* trailers */}
      <Section title='Trailers' hidden={trailers.length === 0}>
        <div className='overflow-x-scroll scrollbar-thin scrollbar-thumb-primary scrollbar-track-header'>
          <div className='flex items-center gap-3 h-[300px]'>
            {trailers.map((trailer, i) => (
              <Card
                onClick={() => playTrailer(trailer.key)}
                imageSrc={youtubeThumbnail(trailer.key)}
                className='flex-shrink-0'
                key={i}
              ></Card>
            ))}
          </div>
        </div>
      </Section>

      
      {/* seasons */}
      {/* <Section title='Seasons' hidden={film.seasons.length === 0}>
        <Slider
          slidesToShow={film.seasons.length > 2 ? 2 : 1}
          slidesToScroll={film.seasons.length > 2 ? 2 : 1}
          swipe={false}
        >
          {(_) =>
            film.seasons.map((season, i) => (
              <Card
                className='h-[300px]'
                onClick={() => navigate(`/tv/${film.id}/season/${season.seasonNumber}`)}
                title={season.name}
                imageSrc={getFullImgSrc(season.posterPath)}
                key={i}
              ></Card>
            ))
          }
        </Slider>
      </Section> */}
      {/* recommendations */}
      {/* <Section title='Recommendations' hidden={recommendations.length === 0}>
        <Slider isMovieCard={true}>
          {(_) =>
            recommendations.map((movie, i) => (
              <Card
                onClick={() => navigate(`/${props.mediaType}/${movie.id}`)}
                title={movie.title}
                imageSrc={getFullImgSrc(movie.posterPath)}
                key={i}
              ></Card>
            ))
          }
        </Slider>
      </Section> */}
    </>
  )
}
