import { MdPlayCircleFilled } from 'react-icons/md'

import { CommonProps } from '@/components/common/common-props'
import Image from '@/components/image'
import { cn } from '@/utils'

type Props = CommonProps & {
  imageSrc: string
  imageAlt?: string
  title?: string
  onClick?: () => void
  withPlay?: boolean
}

const Card = (props: Props) => {
  const withPlay = props.withPlay ?? true

  return (
    <div
      onClick={() => props.onClick?.()}
      className={cn('group mx-3 my-1.5 cursor-pointer', props.className)}
    >
      <div
        className='
          h-[200px]
          relative
          rounded-lg overflow-hidden
      '
      >
        {withPlay ?? (
          <div
            className="
            absolute
            hidden
            group-hover:flex
            items-center
            justify-center
            left-0
            right-0
            top-0
            bottom-0
            before:absolute
            before:content-['']
            before:bg-black
            before:opacity-[0.7]
            before:left-0
            before:right-0
            before:top-0
            before:bottom-0
        "
          >
            <button className='relative z-10'>
              <MdPlayCircleFilled size={32}></MdPlayCircleFilled>
            </button>
          </div>
        )}
        <Image
          src={props.imageSrc}
          className={cn('rounded-lg', {
            'bg-primaryDark': !props.imageSrc
          })}
          alt={props.imageAlt}
        ></Image>
      </div>
      <p className='py-1.5 line-clamp-2'>{props.title}</p>
      {props.children}
    </div>
  )
}

export default Card
