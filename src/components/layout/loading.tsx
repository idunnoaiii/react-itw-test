import { cn } from '@/utils'
import { IconBaseProps } from 'react-icons'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

type Props = IconBaseProps & {
  className?: string
}

export const Loading = ({ className, ...props }: Props) => {
  return (
    <div
      role='loader'
      className='justify-center flex items-center gap-3'
    >
      <AiOutlineLoading3Quarters
        size={64}
        className={cn('animate-spin text-primary', className)}
        {...props}
      ></AiOutlineLoading3Quarters>
    </div>
  )
}
