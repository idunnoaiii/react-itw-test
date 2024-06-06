import { Movie } from '@/types/movie'
import Image from '@/components/image'
import { MdPlayCircleOutline } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

type Props = {
  movie: Movie
  onClick: () => void
  onPlayTrailer: () => void
}

const Trending = (props: Props) => {

  const navigate = useNavigate()

  return (
    <>
      <div className='h-[300px] relative flex items-center cursor-pointer' onClick={() => props.onClick()}>
        <div className='absolute left-0 top-0 right-0 bottom-0'>
          <div className='overlay-slick-slider'></div>
          <Image src={''} className='rounded-0 rounded-none'></Image>
          <div className='overlay-card-cover'></div>
        </div>
        <div className='flex flex-col gap-3 items-start relative z-10 mx-[55px] max-w-[50%] mobile:max-w-[100%]'>
          <p className='text-xl line-clamp-1'>{props.movie.title}</p>
          <p className='text-sm line-clamp-3'>{props.movie.overview}</p>
          <button
            className='px-3 py-1.5 flex items-center gap-3 bg-primary rounded-md'
            onClick={(e) => {
              e.stopPropagation()
              props.onPlayTrailer()
            }}
          >
            <MdPlayCircleOutline size={18}></MdPlayCircleOutline>
            <span>Play trailer</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Trending
