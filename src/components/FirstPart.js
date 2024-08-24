import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export default function FirstPart() {
  return (
    <div>
        <div className=
        'xl:w-full xl:h-[660px] xl:top-[150px] xl:absolute '>

            <div className='
            xl:w-full xl:h-[650px] xl:top-[150x] xl:absolute xl:bg-[#F2F3F6]'>
                <img src="images/img14.png" alt="" />
            </div>

            <div className='
            xl:w-[510px] xl:h-[390px] xl:top-[40px] xl:absolute xl:left-[70px]'>

                <h1 className='
                xl:w-[450px] xl:h-[130px] xl:top-[80px] xl:absolute xl:left-[50px] xl:font-poppins xl:font-semibold xl:size-[60px] xl:text-5xl'>DIGITAL PRODUCT ENGINEERING</h1>

                <p className='
                w-[310px] h-[124px] top-[200px] absolute left-[50px] font-poppins size-[24px]
                font-normal'>
                Stand out with an impressive resume, 
                connect with top companies, and gain 
                valuable insights for your professional 
                journey
                </p>

                <button className='
                xl:w-[260px] xl:h-[65px] xl:top-[320px] xl:absolute xl:left-[40px] xl:rounded-full xl:p-[18px, 64px, 18px, 64px] xl:gap-[8px] xl:bg-[#006FFF] xl:text-[#FFFFFF] xl:font-poppins xl:size-[18px] xl:font-normal'>
                    Get Started <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='ml-3' />
                </button>
                
            </div>
            <div className='
            xl:w-[460px] xl:h-[500px] xl:top-[80px] xl:absolute xl:left-[700px]'>
                <img src="images/img1.png" alt="Person pic" />
            </div>
        </div>

        {/* Choose Us Part */}

        <div className='
        xl:w-full xl:h-[660px] xl:top-[802px] xl:absolute xl:bg-[#FFFFFF] '>

            <img src="images/img15.png" alt="" className='left-[700px] absolute' />
            

            <div className='
            xl:w-[450px] xl:h-[430px] xl:top-[10px] xl:absolute xl:left-[40px]'>
                <h1 className='
                xl:w-[350px] xl:h-[80px] xl:top-[120px] xl:absolute xl:left-[80px] xl:font-poppins xl:size-[48px] xl:font-semibold xl:text-4xl'>Why Choose US?</h1>

                <p className='
                xl:w-[450px] xl:h-[300px] xl:top-[180px] xl:absolute xl:left-[80px] text-xl'>
                Our team consists of experienced master trainers, certified product genius and professional project managers who have set themselves the goal of successfully marketing your brand and conveying your values. <br /><br />

                The professional master trainers from our team train the Mobile Product Genius internally 
                twice a year on the product range, brand, customer treatment.

                </p>

                <button className='
                xl:w-[260px] xl:h-[65px] xl:top-[520px] xl:absolute xl:left-[70px] xl:rounded-full xl:p-[18px, 64px, 18px, 64px] xl:gap-[8px] xl:bg-[#006FFF] xl:text-[#FFFFFF] xl:font-poppins xl:size-[18px] xl:font-normal'>
                    Get in touch <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='ml-3' />
                </button>

            </div>

            <div className='
            xl:w-[250px] xl:h-[145px] xl:top-[260px] xl:absolute xl:left-[676px] xl:gap-[6px] xl:z-50'>
                <img src="images/img3.png" alt="frame pic" />

            </div>

            <div className='
            xl:w-[450px] xl:h-[510px] xl:top-[90px] xl:absolute xl:left-[730px] '>
                <img src="images/img2.png" alt="Group pic" className='h-[510px]' />


            </div>
        </div>
    </div>
  )
}
