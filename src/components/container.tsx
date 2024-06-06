import { CommonProps } from './commons/common-props'
import { twMerge } from 'tailwind-merge'

const Container = ({ children, className }: CommonProps) => {
  return <div className={twMerge('px-6 py-3 max-w-screen-2xl mx-auto', className ?? '')}>{children}</div>
}

export default Container
