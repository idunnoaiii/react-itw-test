
import NotFoundPage from '@/pages/error/not-found-page';
import HomePage from '@/pages/home/home-page';
import MovieDetailPage from '@/pages/movie-details/detail-page';
import { ErrorBoundary } from 'react-error-boundary';
import { createBrowserRouter } from 'react-router-dom'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage></HomePage>,
  },
  {
    path: '/movies',
    element: <HomePage></HomePage>,
  },
  {
    path: '/details/:id',
    element: <MovieDetailPage></MovieDetailPage>
  },
  {
    path: '*',
    element: <NotFoundPage></NotFoundPage>
  }
])

export default Router;
