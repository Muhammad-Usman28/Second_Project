import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export default function FirstPart() {
  return (
    <div>
        <div className='w-full h-[660px] top-[150px] absolute '>
            <div className='w-full h-[650px] top-[150x] absolute bg-[#F2F3F6]'>
                <img src="images/img14.png" alt="" />
            </div>
            <div className='w-[510px] h-[390px] top-[40px] absolute left-[130px]'>
                <h1 className='w-[350px] h-[130px] top-[110px] absolute left-[50px] font-poppins font-semibold size-[60px] text-4xl'>DIGITAL PRODUCT ENGINEERING</h1>
                <p className='w-[310px] h-[124px] top-[200px] absolute left-[50px] font-poppins size-[24px]
                font-normal'>
                Stand out with an impressive resume, 
                connect with top companies, and gain 
                valuable insights for your professional 
                journey
                </p>

                <button className='w-[260px] h-[65px] top-[320px] absolute left-[40px] rounded-full 
                p-[18px, 64px, 18px, 64px] gap-[8px] bg-[#006FFF] text-[#FFFFFF] font-poppins size-[18px]
                font-normal'>
                    Get Started <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='ml-3' />
                </button>
                
            </div>
            <div className='w-[460px] h-[500px] top-[80px] absolute left-[730px]'>
                <img src="images/img1.png" alt="Person pic" />
            </div>
        </div>

        {/* Choose Us Part */}

        <div className='w-full h-[660px] top-[802px] absolute bg-[#FFFFFF] '>

            <img src="images/img15.png" alt="" className='left-[750px] absolute' />
            

            <div className='w-[450px] h-[430px] top-[10px] absolute left-[90px]'>
                <h1 className='w-[350px] h-[80px] top-[120px] absolute left-[80px] font-poppins size-[48px] font-semibold text-4xl'>Why Choose US?</h1>

                <p className='w-[350px] h-[300px] top-[180px] absolute left-[80px]'>
                Our team consists of experienced master trainers, certified product genius and professional project managers who have set themselves the goal of successfully marketing your brand and conveying your values. <br /><br />

                The professional master trainers from our team train the Mobile Product Genius internally 
                twice a year on the product range, brand, customer treatment.

                </p>

                <button className='w-[260px] h-[65px] top-[450px] absolute left-[70px] rounded-full 
                p-[18px, 64px, 18px, 64px] gap-[8px] bg-[#006FFF] text-[#FFFFFF] font-poppins size-[18px]
                font-normal'>
                    Get in touch <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='ml-3' />
                </button>

            </div>

            <div className='w-[250px] h-[145px] top-[260px] absolute left-[676px] gap-[6px] z-50'>
                <img src="images/img3.png" alt="frame pic" />

            </div>

            <div className='w-[450px] h-[510px] top-[90px] absolute left-[730px] '>
                <img src="images/img2.png" alt="Group pic" className='h-[510px]' />


            </div>
        </div>
    </div>
  )
}
