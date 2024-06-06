import { joinClassName } from '@/utils'
import { CommonProps } from './commons/common-props'

const Container = ({ children, className }: CommonProps) => {
  return <div className={joinClassName('px-6 py-3 max-w-screen mx-auto', className ?? '')}>{children}</div>
}

export default Container
