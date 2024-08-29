import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div>

        <div className='w-full h-[60px] mt-[45px]'> </div>
      
      <div className='w-full h-[500px] bg-[#F0F0F0] flex justify-between'>
            
            <div className=' w-[350px] h-[350px]  mt-[70px] ml-[10px]'>
                <h1 className='text-6xl font-sans font-extrabold ml-[10px]'>CEIN.</h1>

                <p className='text-[13px] ml-[20px] mt-[20px]'>52619 Spinka Course, Dannyfort, AL 16976-7623 <br /><br />

                OPEN 11:00 ～ 19:00 <br />
                TEL +1 (779) 274-6613</p>

                <div className='w-[140px] h-[35px]  ml-[20px] mt-[50px] flex justify-between'>

                    <div className='w-[36px] h-[36px] bg-[#D0D0D0] border border-[#D0D0D0] rounded-full flex items-center justify-center'>

                     <FontAwesomeIcon icon={faFacebook} />

                    </div>

                    <div className='w-[36px] h-[36px] bg-[#D0D0D0] border  rounded-full
                    flex items-center justify-center'>

                     <FontAwesomeIcon icon={faTwitter} />

                    </div>
                    <div className='w-[36px] h-[36px] bg-[#D0D0D0] border  rounded-full
                    flex items-center justify-center'>

                     <FontAwesomeIcon icon={faInstagram} />

                    </div>
                </div>
            </div>

            <div className=' w-[350px] h-[350px] mt-[70px] ml-[50px]'>

                <h1 className='font-sans text-[20px] font-medium'>Online Stores</h1>

                <div className='w-[350px] h-[230px] mt-[30px]'>
                    <p className='text-[13px] font-sans'>
                        Products <br />
                        Orders   <br />
                        Payment  <br />
                        Delivery  <br />
                        Point Service  <br />
                        Returns and Exchanges  <br />
                        Inquiries <br />
                        Terms of Service  <br />
                        Privacy Policy  <br />
                        Description based on Specified Commercial Transactions Law</p>

                </div>

            </div>

            <span className="
            border-l-2 border-gray-500 h-64 mt-[75px]"></span>
            <div className=' w-[350px] h-[350px] mt-[70px] mr-[10px]'>

            <h1 className='font-sans text-[20px] font-medium'>Cstomer Service</h1>

            <div className='w-[350px] h-[230px] mt-[30px]'>
                    <p className='text-[13px] font-sans'>
                    The staff at the stores that carry the products will be happy to discuss the products you are interested in online. Use video calls or messages. <br /><br />

                    Add the account as a friend and send a message saying "I would like to receive online service."
                    </p>

                    <button className='w-[175px] h-[56px] border border-[#1A1A1A] border-solid rounded-full  ml-[10px] text-[#1A1A1A] mt-[30px]'> Contact Us
            </button>
                </div>

            </div>
      </div>

            <div className='w-[100px]h-[23px] mt-[-80px] ml-[20px]'>
                <p className='text-[13px]'>
                    &copy; CEIN.
                </p>
            </div>
    </div>
  )
}
