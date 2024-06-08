import { CommonProps } from '@/components/common/common-props'
import Container from '@/components/container'
import { cn } from '@/utils'

type Props = CommonProps & {
  title?: string
  onTitleClick?: () => void
  hidden?: boolean
}

export const Section = (props: Props) => {
  if (props.hidden) return <></>

  return (
    <Container className={props.className}>
      {props.title && (
        <h1
          onClick={props.onTitleClick}
          className={cn(
            'text-xl px-3 py-2',
            props.onTitleClick ? 'cursor-pointer hover:text-primary' : ''
          )}
          dangerouslySetInnerHTML={{
            __html: props.title
          }}
        ></h1>
      )}
      {props.children}
    </Container>
  )
}

export default Section
