import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFoundPage from './pages/error/not-found-page'

const HomePage = lazy(() => import('@/pages/home/home-page'))
const MovieDetailPage = lazy(() => import('@/pages/movie-details/detail-page'))

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<HomePage />}
      />
      <Route
        path='/details/:id'
        element={<MovieDetailPage />}
      />
      <Route
        path='/*'
        element={<NotFoundPage></NotFoundPage>}
      />
    </Routes>
  )
}

export default App
