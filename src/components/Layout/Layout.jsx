import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Toaster } from "react-hot-toast"
import BookingSidebar from "@/components/Layout/BookingSidebar"
const Layout = ({ children }) => {
  return (
    <>

      <Toaster position="top-right" />
      <div className='max-w-[1512px] mx-auto' >
        <Header />
        {children}
        <Footer />
        <BookingSidebar />
      </div>
    </>
  )
}

export default Layout