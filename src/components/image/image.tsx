import { cn } from '@/utils'
import { ComponentProps } from 'react'

type Props = ComponentProps<'img'>

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
        {...props}
      ></img>
    </div>
  )
}

export default Image
