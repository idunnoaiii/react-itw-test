import Container from '@/components/container'
import { cn } from '@/utils'
import { ComponentProps } from 'react'

type Props = ComponentProps<'div'> & {
  title?: string
  onTitleClick?: () => void
  hidden?: boolean
}

export const Section = (props: Props) => {
  if (props.hidden) return <></>

  return (
    <Container
      className={props.className}
      {...props}
    >
      {props.title && (
        <h1
          role='title'
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
