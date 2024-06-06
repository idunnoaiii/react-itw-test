import { CommonProps } from '@/components/commons/common-props'
import Container from '@/components/container'

type Props = CommonProps & {
  title?: string
}

const Section = (props: Props) => {
  return (
    <Container className={props.className}>
      {props.title ? <h1 className='text-xl px-6 py-1.5'>{props.title}</h1> : ''}
      {props.children}
    </Container>
  )
}

export default Section
