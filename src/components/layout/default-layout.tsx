import React from 'react'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'

type Props = {
  children: React.ReactNode
}

const DefaultLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default DefaultLayout
