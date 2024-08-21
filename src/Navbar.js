import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <div>
      <div className='w-full h-[100px] top-[50px]'>
      <div className='w-[1120px] h-[45px] left-[160px] relative top-[27px]'>

            <div className='w-[60px] h-[36px] top-[4px] absolute left-[10px] pl-2'>
                <h1 className='font-poppins font-extrabold text-xl size-[24px] leading-[36px]'>Logo</h1>
            </div>

            <div className='w-[800px] h-[45px]  absolute left-[450px] gap-[28px] flex items-center
            font-poppins'>
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

            <span className="border-l-2 border-gray-500 h-8"></span>

            <div className='w-[250px] h-[45px]  p-[10px, 16px, 10px, 16px]  gap-2 bg-[#E9FBFF] rounded-full'>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="w-[50px] h-[25px] top-2 absolute" />
             <h5 className='pt-[10px] pl-[50px] font-roboto size-[14px] text-[#006FFF]'>Search</h5>
            </div>

            </div>

        </div>
      </div>
    </div>
  )
}
