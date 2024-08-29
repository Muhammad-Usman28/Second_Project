import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Solution() {
  return (
    <div>
      <div className='w-full h-[1900px]  '>

        <div>
            <img src="images/img17.png" alt="pic"  className='h-[1900px] w-[630px]'/>
        </div>

        {/* First Part */}

        <div className='w-[420px] h-[120px]  mt-[-1030px] ml-[200px]'>

            <h1 className='text-[50px] text-center font-sans font-normal text-[#FFFFFF]'>
            The <br />
            Eco Camping <br /> Solution
            </h1>

            <p className='font-sans text-[13px] text-center text-[#FFFFFF]'>
            There is no waste, but there is a lot of consideration. “Base and Packana” is a large shelter that is spacious, light, easy to set up, and cost-effective.
            </p>

            <button className='w-[175px] h-[56px] border border-[#FFFFFF] border-solid rounded-full mt-[20px]
             ml-[120px] text-[#FFFFFF]'>
                Read More
            </button>
        </div>

        {/* right first part Journal */}

        <div className='w-[632px] h-[620px] ml-[630px] mt-[-990px] p-[22px, 20px, 22px, 20px] gap-[30px]
        '>

            <div className='w-[632px] h-[435px] gap-[14px] '>

            <div className='w-[620px] h-[23px] '>
                <h1 className='font-sans pl-6 pt-6'>Journal</h1>
                <img src="images/img18.png" alt="" className='pl-6 pt-4' />
            </div>

            </div>

            <div className='w-[620px] h-[115px] gap-[20px] flex'>

                <div className='w-[300px] h-[150px] mt-3 ml-6'>
                    <h1 className='text-[32px] font-sans'>
                    Introducing the All-New Adventure Dome Tent
                    </h1>
                </div>
                <div className='w-[300px] h-[150px] mt-3'>

                    <p className='text-[13px] font-sans pt-3'>
                    Your Ultimate Shelter for Outdoor Escapades! Experience easy setup, superior durability, and ample space, ensuring comfort and security wherever your adventures take you. Get ready to elevate your camping experience with our premium tent!
                    </p>
                </div>

            </div>

        </div>

        {/* Right 2 Part Event */}

        <div className='w-[632px] h-[620px] ml-[630px] mt-[30px] p-[22px, 20px, 22px, 20px] gap-[30px]
        '>

            <div className='w-[632px] h-[435px] gap-[14px] '>

            <div className='w-[620px] h-[23px] '>
                <h1 className='font-sans pl-6 pt-6'>Event</h1>
                <img src="images/img19.png" alt="" className='pl-6 pt-4' />
            </div>

            </div>

            <div className='w-[620px] h-[210px] gap-[20px] flex'>

                <div className='w-[300px] h-[110px] mt-3 ml-6'>
                    <h1 className='text-[32px] font-sans'>
                    Organic Aquaculture Big Catch Festival
                    </h1>
                </div>
                <div className='w-[300px] h-[210px] mt-3'>

                    <p className='text-[13px] font-sans pt-3'>
                    Saiyuen has had a great harvest this year! In our aquaponic pool, we have a variety of edible fish, including Crucian Carp, Tilapia, and Jade Perch. Especially Jade Perch is the treasure among the freshwater fish. During the Big Catch Festival at Saiyuen, campers can enjoy fishing or even try cooking their own catch in the wild. Come and experience the thrill of catching and cooking your own fish in the great outdoors at Saiyuen!
                    </p>
                </div>

            </div>

        </div>

        {/* Right 3 part Feature */}

        <div className='w-[632px] h-[620px] ml-[630px] mt-[50px] p-[22px, 20px, 22px, 20px] gap-[30px]
        '>

            <div className='w-[632px] h-[435px] gap-[14px] '>

            <div className='w-[620px] h-[23px] '>
                <h1 className='font-sans pl-6 pt-6'>Feature</h1>
            </div>

            <div className='w-[320px] h-[400px] bg-[#F9F9F9] mt-[50px] ml-6'>
                    <img src="images/img20.png" alt="" className='w-[320px] h-[400px]' />
            </div>

            <div className='w-[320px] h-[40px] font-sans mt-[50px] ml-6'>
                     <p className='text-[12px] '>Lightweight Waterproof Camping Tent <br />
                     $259</p>
            </div>

            </div>

           
        </div>
      </div>

      {/* food Collaboratin Part */}

      <div className='w-full h-[550px]'>
            <img src="images/img21.png" alt="" className='w-full h-[550px]' />
      </div>

      
      <div className='w-[450px] h-[130px] bg-red-600 mt-[-500px] ml-[20px] '>
            <h1 className='text-[50px] text-[#FFFFFF]' >
            FOOD <br /> COLLABORATION <br /> 
            <FontAwesomeIcon icon={faArrowRight} className='mr-4 w-[40px] ' />
            THIS FALL
            </h1>

            <p className='text-[#FFFFFF] text-[13px] '>
            CEIN first food collaboration product will be released this fall.
            By collaborating with K&K, a canned food brand known for its canned goods and canned beef, CEIN collaboration products have been added to K&K's series, a lineup specializing in outdoor activities.
            </p>
        </div>

        <button className='w-[175px] h-[56px] border border-[#FFFFFF] border-solid rounded-full mt-[200px]
             ml-[20px] text-[#FFFFFF]'>
                Read More
            </button>
    </div>
  )
}
