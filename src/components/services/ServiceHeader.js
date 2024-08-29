import React from 'react'
import Navbar from '../Navbar'
import Header from '../Header'

export default function ServiceHeader() {
  return (
    <div>
      <Header/>
      <Navbar/>

      <header className='w-full h-[160px] p-[40px, 20px, 40px, 20px] '>
        <div className='w-[1240px] h-[110px] top-[180px] left-[20px]  absolute'>
            <p className='text-4xl mt-[-20px] ml-[1210px]'>&reg;</p>
            <h1 className='text-[90px] font-poppins font-medium top-[-30px] absolute'>
            Gear up for Great Outdoors
            </h1>
            <h1 className='mt-[60px] text-[18px] font-serif'>Premium Camping Gear</h1>
        </div>

      </header>
    </div>
  )
}
