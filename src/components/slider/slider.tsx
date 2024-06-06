import Slick, { Settings } from 'react-slick'
import '@/components/slider/slider.css'
import { useState } from 'react'

type Props = Omit<Settings, 'children'> & {
  children?: (isSwipe: boolean) => React.ReactNode
}

export const Slider = (props: Props) => {
  const [isSwipe, setIsSwipe] = useState(false)

  return (
    <Slick {...props} autoplaySpeed={5000} onSwipe={() => setIsSwipe(true)} afterChange={() => setIsSwipe(false)}>
      {props.children ? props.children(isSwipe) : ''}
    </Slick>
  )
}
