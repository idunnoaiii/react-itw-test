import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Test from '@/components/Test'
import reactLogo from '@/assets/react.svg'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import Router from '@/router'

function App() {
  const queryClient = new QueryClient();

  return (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={Router}></RouterProvider>
  </QueryClientProvider>
  )
}

export default App
