import React from 'react'
import Footer from '@/components/layout/footer/footer'
import Header from '@/components/layout/header/header'

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
