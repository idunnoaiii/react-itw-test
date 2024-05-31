import { createBrowserRouter } from 'react-router-dom'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <div>{import.meta.env.VITE_API_URL}</div>
  }
])

export default Router;
