import '@/components/slider/slider.css'
import React, { useState } from 'react'
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle
} from 'react-icons/io'
import Slick, { CustomArrowProps, Settings } from 'react-slick'

type Props = Omit<Settings, 'children'> & {
  children?: (isSwipe: boolean) => React.ReactNode
}

const SlickArrowFix = ({
  children,
  slideCount,
  currentSlide,
  ...props
}: CustomArrowProps & { children: React.ReactNode }) =>
  React.cloneElement(children as React.ReactElement, {
    ...props,
    'attr-slidecount': slideCount,
    'attr-currentslide': currentSlide
  })

export const Slider = ({ children, ...props }: Props) => {
  const [isSwipe, setIsSwipe] = useState(false)

  return (
    <Slick
      {...props}
      autoplaySpeed={5000}
      onSwipe={() => setIsSwipe(true)}
      afterChange={() => setIsSwipe(false)}
      nextArrow={
        <SlickArrowFix>
          <IoIosArrowDroprightCircle />
        </SlickArrowFix>
      }
      prevArrow={
        <SlickArrowFix>
          <IoIosArrowDropleftCircle />
        </SlickArrowFix>
      }
    >
      {children?.(isSwipe)}
    </Slick>
  )
}
