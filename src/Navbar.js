import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <div>
      <div className='
      w-full h-[100px] top-[50px]
      xl:w-full xl:h-[100px] xl:top-[50px]'>
      <div className='
      w-[1120px] h-[45px] left-[160px] relative top-[27px]
      xl:w-[1120px] xl:h-[45px] xl:left-[160px] xl:relative xltop-[27px]'>

            <div className='
            w-[60px] h-[36px] top-[4px] absolute left-[10px] pl-2
            xl:w-[60px] xl:h-[36px] xl:top-[4px] xl:absolute xl:left-[10px] xl:pl-2'>
                <h1 className='
                font-poppins font-extrabold text-xl size-[24px] leading-[36px]
                xl:font-poppins xl:font-extrabold xl:text-xl xl:size-[24px] xl:leading-[36px]'>Logo</h1>
            </div>

            <div className='
            w-[800px] h-[45px]  absolute left-[250px] gap-[28px] flex items-center font-poppins
            xl:w-[800px] xl:h-[45px] xl:absolute xl:left-[250px] xl:gap-[28px] xl:flex xl:items-center xl:font-poppins'>
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
            border-l-2 border-gray-500 h-8
            xl:border-l-2 xl:border-gray-500 xl:h-8"></span>

            <div className='
            w-[250px] h-[45px]  p-[10px, 16px, 10px, 16px]  gap-2 bg-[#E9FBFF] rounded-full
            xl:w-[250px] xl:h-[45px] xl:p-[10px, 16px, 10px, 16px] xl:gap-2 xl:bg-[#E9FBFF] xl:rounded-fulls'>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="
            w-[50px] h-[25px] top-2 absolute
           xl:w-[50px] xl:h-[25px] xl:top-2 xl:absolute" />
             <h5 className='
             pt-[10px] pl-[50px] font-roboto size-[14px] text-[#006FFF]
             xl:pt-[10px] xl:pl-[50px] xl:font-roboto xl:size-[14px] xl:text-[#006FFF]'>Search</h5>
            </div>

            </div>

        </div>
      </div>
    </div>
  )
}
