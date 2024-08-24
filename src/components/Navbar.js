import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <div>
      <div className='
      xl:w-full xl:h-[100px] xl:top-[50px]'>
      
      <div className='
      xl:w-[1120px] xl:h-[45px] xl:left-[160px] xl:relative xl:top-[27px]'>

            <div className='
            xl:w-[60px] xl:h-[36px] xl:top-[6px] xl:absolute  xl:pl-2'>
                <h1 className='
                xl:font-poppins xl:font-extrabold xl:text-xl xl:size-[24px] xl:leading-[36px] xl:ml-[-50px]'>Logo</h1>
            </div>

            <div className='
            xl:w-[750px] xl:h-[45px] xl:absolute xl:left-[300px] xl:gap-[20px] xl:flex xl:items-center xl:font-poppins'>
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
            xl:border-l-2 xl:border-gray-500 xl:h-8"></span>

            <div className='
            xl:w-[250px] xl:h-[45px] xl:p-[10px, 16px, 10px, 16px] xl:gap-2 xl:bg-[#E9FBFF] xl:rounded-full'>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="
            xl:w-[50px] xl:h-[25px] xl:top-2 xl:absolute" />
             <h5 className='
             xl:pt-[10px] xl:pl-[50px] xl:font-roboto xl:size-[14px] xl:text-[#006FFF]'>Search</h5>
            </div>

            </div>

        </div>
      </div>
    </div>
  )
}
