import '@/components/slider/slider.css'
import { useState } from 'react'
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle
} from 'react-icons/io'
import Slick, { Settings } from 'react-slick'

type Props = Omit<Settings, 'children'> & {
  children?: (isSwipe: boolean) => React.ReactNode
}

export const Slider = (props: Props) => {
  const [isSwipe, setIsSwipe] = useState(false)

  return (
    <Slick
      {...props}
      autoplaySpeed={5000}
      onSwipe={() => setIsSwipe(true)}
      afterChange={() => setIsSwipe(false)}
      nextArrow={<IoIosArrowDroprightCircle />}
      prevArrow={<IoIosArrowDropleftCircle />}
    >
      {props.children?.(isSwipe)}
    </Slick>
  )
}
