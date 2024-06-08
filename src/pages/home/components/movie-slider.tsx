import { Slider } from '@/components/slider/slider'
import { Settings } from 'react-slick'

type Props = Omit<Settings, 'children'> & {
  children: (isSwipe: boolean) => React.ReactNode
}

const MovieSlider = (props: Props) => {
  let settings: Omit<Settings, 'children'> = {
    ...props
  }

  settings = {
    autoplay: false,
    infinite: true,
    swipe: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ],
    ...settings
  }

  return <Slider {...settings}>{props.children}</Slider>
}
export default MovieSlider
