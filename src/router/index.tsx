import NotFoundPage from '@/pages/error/not-found-page/not-found-page'
import RootErrorPage from '@/pages/error/root-error-page/root-error-page'
import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

const HomePage = lazy(() => import('@/pages/home/home-page'))
const MovieDetailPage = lazy(() => import('@/pages/movie-details/detail-page'))

const Router = createBrowserRouter([
  {
    path: '/',
    errorElement: <RootErrorPage></RootErrorPage>,
    element: <HomePage></HomePage>,
    children: [
      {
        path: '/movies',
        element: <HomePage></HomePage>
      },
      {
        path: '/details/:id',
        element: <MovieDetailPage></MovieDetailPage>
      }
    ]
  },
  {
    path: '*',
    element: <NotFoundPage></NotFoundPage>
  }
])

export default Router
