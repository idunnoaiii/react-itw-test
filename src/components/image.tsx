import { CommonProps } from '@/components/commons/common-props'
import { joinClassName } from '@/utils'

type Props = CommonProps & {
  src: string
  alt?: string
}

const Image = ({ src, className, alt }: Props) => {
  return (
    <div className={joinClassName('bg-primary h-full w-full rounded-lg overflow-hidden', className ?? '')}>
      <img src={src} className='min-h-[200px] w-full h-full object-cover' alt={alt ?? ''}></img>
    </div>
  )
}

export default Image
