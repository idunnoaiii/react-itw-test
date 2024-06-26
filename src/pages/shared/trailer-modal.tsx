import Container from '@/components/container'
import { useEffect, useState } from 'react'
import { IoIosClose } from 'react-icons/io'

type Props = {
  src: string | null
  onHide: () => void
}

export const TrailerModal = ({ src, onHide }: Props) => {
  const [show, setShow] = useState(false)

  const hide = () => {
    setShow(false)
    onHide()
  }

  useEffect(() => {
    if (src) setShow(true)
  }, [src])

  return (
    <div
      role='dialog'
      aria-modal='true'
      onClick={() => hide()}
      className={`
            ${show ? `opacity-[1]` : 'opacity-0 pointer-events-none'}
            ease-in-out
            duration-300
            fixed
            z-modal
            top-0 
            bottom-0 
            left-0 
            right-0
            after:fixed
            after:content-['']
            after:top-0
            after:bottom-0
            after:left-0
            after:right-0
            after:bg-black
            after:opacity-[0.9]
        `}
    >
      <Container
        className={`
          relative 
          z-10
          transition-[margin,opacity]
          ease-in-out
          duration-300
          ${show ? ` mt-0 opacity-[1] ` : ` -mt-[200px] opacity-0 `}
        `}
      >
        <div
          className='bg-header rounded-lg'
          onClick={(e) => {
            e.stopPropagation()
          }}
        >
          <div className='p-3 text-right'>
            <button onClick={() => hide()}>
              <IoIosClose size={18}></IoIosClose>
            </button>
          </div>
          {show ? (
            <iframe
              title='Trailer'
              src={src as string}
              className='w-full h-[700px]'
            ></iframe>
          ) : (
            ''
          )}
        </div>
      </Container>
    </div>
  )
}
