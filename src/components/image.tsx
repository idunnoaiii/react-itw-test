import { CommonProps } from '@/components/common/common-props'
import { cn } from '@/utils'

type Props = CommonProps & {
  src: string
  alt?: string
}

export const Image = (props: Props) => {
  return (
    <div
      className={cn(
        'bg-primary h-full w-full rounded-lg overflow-hidden',
        props.className
      )}
    >
      <img
        src={props.src}
        className='min-h-[200px] w-full h-full object-cover'
        alt={props.alt ?? ''}
      ></img>
    </div>
  )
}

export default Image
