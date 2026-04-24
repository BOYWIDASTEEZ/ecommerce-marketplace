import React from 'react'
import { Navbar } from './navbar';
import { Footer } from './footer';

interface LayoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: LayoutProps) => {
  return (
    <div className='min-h-screen  flex flex-col'>
      <Navbar />
      <div className='flex-1 bg-[#f4f4f0]'>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default layout