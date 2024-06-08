import { CommonProps } from '@/components/common/common-props'
import { cn } from '@/utils'

const Container = ({ children, className }: CommonProps) => {
  return (
    <div className={cn('px-6 py-3 max-w-screen-2xl mx-auto', className)}>
      {children}
    </div>
  )
}

export default Container
