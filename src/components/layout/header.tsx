import Container from '@/components/container'
import { cn } from '@/utils'
import { useEffect, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

const MENU_CLASS = `
  py-1
  px-1.5
  hover:bg-primary
  rounded-md
  mobile:px-6
`

const MENU_CLASS_ACTIVE = `
  bg-primary
`

const Header = () => {
  const defaultKeyword = useRef('')
  const pathnameRef = useRef('')
  const [pathname, setPathname] = useState('')
  const [searchParams] = useSearchParams()

  const getMenuClass = (path: string) => {
    if (path === pathname) {
      return cn(MENU_CLASS, MENU_CLASS_ACTIVE)
    }

    return cn(MENU_CLASS, '')
  }

  const onWindowClick = () => {}

  useEffect(() => {
    setPathname(location.pathname)
    pathnameRef.current = location.pathname
    defaultKeyword.current = searchParams.get('q') || ''
  }, [location.pathname])

  useEffect(() => {
    window.addEventListener('click', onWindowClick)

    return () => {
      window.removeEventListener('click', onWindowClick)
    }
  }, [])

  return (
    <nav className='bg-body sticky top-0 z-sticky'>
      <Container className='flex justify-between'>
        <div className='flex items-center gap-6'>
          <h1 className='text-2xl'>
            <Link to={'/'}>TheMovie</Link>
          </h1>
          <div
            className='
            pt-1.5
            flex 
            items-center 
            gap-1.5
            mobile:fixed
            mobile:bottom-0
            mobile:left-0
            mobile:right-0
            mobile:justify-center
            mobile:py-3
            mobile:bg-header
            mobile:gap-6
            '
          >
            <Link
              className={getMenuClass('/movies')}
              to={'/movies'}
            >
              Movies
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Header
