import Container from '@/components/container'
import DefaultLayout from '@/components/layout/default-layout'

const NotFoundPage = () => {
  return (
    <DefaultLayout>
        <Container className='flex flex-col items-center justify-center'>
            <h1 className='text-4xl'>404 - Not Found</h1>
        </Container>
    </DefaultLayout>
  )
}

export default NotFoundPage
