import { cn } from '@/utils'
import { ComponentProps } from 'react'

type Props = ComponentProps<'div'>

const Container = ({ children, className }: Props) => {
  return (
    <div className={cn('px-6 py-3 max-w-screen-2xl mx-auto', className)}>
      {children}
    </div>
  )
}

export default Container
