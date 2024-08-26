import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <div>
      <div className='
      xl:w-full xl:h-[100px] xl:top-[50px]
      lg:w-full lg:h-[100px] lg:top-[50px]
      md:w-[768px] md:h-[100px] md:top-[50px]'>
      
      <div className='
      xl:w-[768px] xl:h-[45px] xl:left-[160px] xl:relative xl:top-[27px]
      lg:w-full lg:h-[45px] lg:left-[160px] lg:relative lg:top-[27px]
      md:w-[500px] md:h-[45px] left-[160px] md:relative md:top-[27px]'>

            <div className='
            xl:w-[60px] xl:h-[36px] xl:top-[6px] xl:absolute  xl:pl-2
            lg:w-[60px] lg:h-[36px] lg:top-[6px] lg:absolute  lg:pl-2
            md:w-[60px] md:h-[36px] md:top-[6px] md:absolute  md:pl-2'>
                <h1 className='
                xl:font-poppins xl:font-extrabold xl:text-xl xl:size-[24px] xl:leading-[36px] xl:ml-[-50px]
                lg:font-poppins lg:font-extrabold lg:text-xl lg:size-[24px] lg:leading-[36px] lg:ml-[-50px]md:font-poppins md:font-extrabold md:text-xl md:text-[14px] md:leading-[36px] ml-[-90px]'>Logo</h1>
            </div>

            <div className='
            xl:w-[750px] xl:h-[45px] xl:absolute xl:left-[300px] xl:gap-[20px] xl:flex xl:items-center xl:font-poppins xl:text-[12px]
            lg:w-[750px] lg:h-[45px] lg:absolute lg:left-[300px] lg:gap-[10px] lg:flex lg:items-center lg:font-poppins lg:text-[14px]
            md:w-[500px] md:h-[45px] md:absolute md:left-[80px] md:gap-[8px] md:flex md:items-center md:font-poppins md:text-[10px]'>
            <select name="services" id="services" >
            <option value="" >Service</option>
            </select>

            <select name="industries" id="industries" >
            <option value="" >Industries</option>
            </select>

            <select name="partnerships" id="partnerships" >
            <option value="" >Partnerships</option>
            </select>

            <select name="company" id="company" >
            <option value="" >Company</option>
            </select>

            <select name="careers" id="careers" >
            <option value="" >Careers</option>
            </select>

            <span className="
            xl:border-l-2 xl:border-gray-500 xl:h-8
            lg:border-l-2 lg:border-gray-500 lg:h-8
            md:border-l-2 md:border-gray-500 md:h-6"></span>

            <div className='
                xl:w-[160px] xl:h-[45px] xl:py-[10px] xl.px-[16px] xl:gap-2 xl:bg-[#E9FBFF] xl:rounded-full
                lg:w-[160px] lg:h-[45px] lg:py-[10px] lg.px-[16px] lg:gap-2 lg:bg-[#E9FBFF] lg:rounded-full
                md:w-[90px] md:h-[45px] md:py-[10px] md.px-[16px] md:gap-2 md:bg-[#E9FBFF] md:rounded-full'>
                <FontAwesomeIcon icon={faMagnifyingGlass} className="
                    xl:w-[50px] xl:h-[25px] xl:top-2 xl:absolute
                    lg:w-[50px] lg:h-[25px] lg:top-2 lg:absolute
                    md:w-[30px] md:h-[15px] md:top-3 md:absolute" />
                <h5 className='
                    xl:pt-[0px] xl:pl-[50px] xl:font-roboto xl:text-[18px] xl:text-[#006FFF]
                    lg:pt-[0px] lg:pl-[50px] lg:font-roboto lg:text-[18px] lg:text-[#006FFF]
                    md:pt-[2px] md:pl-[30px] md:font-roboto md:text-[10px] md:text-[#006FFF]'>
                    Search
                </h5>
            </div>


            </div>

        </div>
      </div>
    </div>
  )
}