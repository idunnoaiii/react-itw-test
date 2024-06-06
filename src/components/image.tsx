import { CommonProps } from '@/components/commons/common-props'
import { twMerge } from 'tailwind-merge'

type Props = CommonProps & {
  src: string
  alt?: string
}

export const Image = (props: Props) => {
  return (
    <div
      className={twMerge(
        'bg-primary h-full w-full rounded-lg overflow-hidden',
        props.className ?? ''
      )}
    >
      <img
        src={props.src}
        className="min-h-[200px] w-full h-full object-cover"
      ></img>
    </div>
  )
}

export default Image
