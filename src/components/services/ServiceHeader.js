import React from 'react'
import Navbar from '../Navbar'
import Header from '../Header'

export default function ServiceHeader() {
  return (
    <div>
      <Header/>
      <Navbar/>

      <header className='
      xl:w-full xl:h-[160px] xl:p-[40px, 20px, 40px, 20px]
      lg:w-full lg:h-[160px] lg:p-[40px, 20px, 40px, 20px]
      md:w-full md:h-[160px] md:p-[40px, 20px, 40px, 20px] '>

        <div className='
        xl:w-[1240px] xl:h-[110px] xl:top-[180px] xl:left-[20px] xl:absolute
        lg:w-[1240px] lg:h-[110px] lg:top-[180px] lg:left-[0px] lg:absolute
        md:w-[750px] md:h-[110px] md:top-[180px] md:left-[10px] md:absolute'>
            <p className='
            xl:text-4xl xl:mt-[-20px] xl:ml-[1210px]
            lg:text-4xl lg:mt-[-20px] lg:ml-[1180px]
            md:text-3xl md:mt-[-20px] md:ml-[720px]'>&reg;</p>
            <h1 className='
            xl:text-[90px] xl:font-poppins xl:font-medium xl:top-[-30px] xl:absolute xl:left-[-10px]
            lg:text-[85px] lg:font-poppins lg:font-medium lg:top-[-30px] lg:absolute lg:left-[20px]
            md:text-[54px] md:font-poppins md:font-medium md:top-[-20px] md:absolute md:left-[0px] '>
            Gear up for Great Outdoors
            </h1>
            <h1 className='
            xl:mt-[60px] xl:text-[18px] xl:font-serif xl:ml-[-10px]
            lg:mt-[60px] lg:text-[18px] lg:font-serif lg:ml-[30px]
            md:mt-[40px] md:text-[18px] md:font-serif md:ml-[20px]'>Premium Camping Gear</h1>
        </div>

      </header>
    </div>
  )
}
