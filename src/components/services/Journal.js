import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export default function Journal() {
  return (
    <div>

      <div className='w-full h-[625px] p-[20px] gap-[20px] flex'>

        <div className='w-[355px] h-[525px] gap-[24px] '>

            <div className='w-[355px] h-[20px] flex justify-between'>
                <h5 className='w-[40px] h-[20px] text-[12px] font-serif text-[#1A1A1A] font-normal'>Journal</h5>
                <h5 className='w-[55px] h-[20px] font-sans text-[12px] text-[#1A1A1A] font-normal'>2024.2.10</h5>      
            </div>

            <div className='w-[355px] h-[345px] '>
                <h1 className='text-[36px] font-sans font-normal'>The practical bonfire stand.</h1>
            </div>

            <div className='w-[355px] h-[95px]'>
                <p className='text-[13px] font-sans'>
                CEIN has released yet another playful bonfire stand.
                Its name is "Ringwo Moyase".As you can see, this bonfire stand is modeled after the ring, a stage familiar to boxing and professional wrestling.
                </p>
            </div>

            <div className='w-[50px] h-[50px] border border-black border-solid rounded-full ml-[305px] mt-[15px]'>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='m-4' />
            </div>
        </div>

        <div className='w-[990px] h-[525px]'>
            <img src="images/img16.png" alt="pic" className='h-[525px]'/>
        </div>

      </div>
    </div>
  )
}
