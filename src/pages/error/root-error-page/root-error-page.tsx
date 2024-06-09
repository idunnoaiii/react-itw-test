import Container from '@/components/container'

const RootErrorPage = () => {
  return (
    <Container className='flex flex-col items-center justify-center'>
      <section>
        <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
          <div className='mx-auto max-w-screen-sm text-center'>
            <p className='mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white'>
              There's a problem.
            </p>
            <p className='mb-4 text-xl font-light text-gray-500 dark:text-gray-400'>
              Try refreshing the page.
            </p>
            <a
              href='/'
              className='inline-flex 
              text-white 
              bg-primary focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center'
            >
              Try again
            </a>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default RootErrorPage
