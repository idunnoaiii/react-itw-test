import HomePage from '@/pages/home/HomePage';
import Home from '@/pages/home/HomePage';
import { MovieDetail } from '@/pages/movie-details/MovieDetailPage';
import { MovieDetailPage } from '@/pages/movie-details/MovieDetailPage';
import { createBrowserRouter } from 'react-router-dom'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage></HomePage>
  },
  {
    path: '/details',
    element: <MovieDetailPage></MovieDetailPage>
  }
])

export default Router;
