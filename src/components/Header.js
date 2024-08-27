import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Header() {
  return (
    <div >
      <header className='
      xl:w-full xl:h-[50px] xl:bg-[#202430]
      lg:w-[1240px] lg:h-[50px] lg:bg-[#202430]
      md:w-[768px] md:h-[50px] md:bg-[#202430]
      w-[425px] h-[50px] bg-[#202430]'>

      
    <div className="
    xl:w-[600px] xl:h-[22px]  xl:absolute xl:top-[14px] xl:left-[167px] xl:gap-[42px] xl:flex xl:ml-[-80px]
    lg:w-[600px] lg:h-[22px]  lg:absolute lg:top-[14px] lg:left-[167px] lg:gap-[42px] lg:flex lg:ml-[-80px]
    md:w-[320px] md:h-[22px]  md:absolute md:top-[14px] md:left-[167px] md:gap-[20px] md:flex md:ml-[-100px]
    w-[350px] h-[22px]  absolute top-[14px] left-[167px] gap-[20px] flex ml-[-180px]
    ">

    <div className='
    xl:flex xl:items-center xl:w-[322px] xl:h-[21px] xl:font-poppins xl:font-[400px] xl:size-[8px] xl:text-white xl:text-sm
    lg:flex lg:items-center lg:w-[322px] lg:h-[21px] lg:font-poppins lg:font-[400px] lg:size-[8px] lg:text-white lg:text-sm
    md:flex md:items-center md:w-[120px] md:h-[21px] md:font-poppins md:font-[400px] md:text-[6px] md:text-white
    flex items-center  w-[120px] h-[21px] font-poppins font-[400px] text-[6px] text-white
     ml-[30px]
      '>
    <FontAwesomeIcon icon={faLocationDot} 
    className="
    xl:w-[50px] xl:h-[25px] xl:text-[#006FFF]
    lg:w-[50px] lg:h-[25px] lg:text-[#006FFF]
    md:w-[20px] md:h-[10px] md:text-[#006FFF]
    w-[20px] h-[10px] text-[#006FFF]" />
    24 Olive Street, Prairie, NY 53590
    </div>

    <div className='
    xl:flex  xl:w-[250px] xl:h-[21px] xl:font-poppins xl:font-[400px] xl:size-[8px] xl:text-white
    xl:text-sm xl:ml-[-60px]
    lg:flex  lg:w-[250px] lg:h-[21px] lg:font-poppins lg:font-[400px] lg:size-[8px] lg:text-white
    lg:text-sm lg:ml-[-60px]
    md:flex md:items-center  md:w-[120px] md:h-[21px] md:font-poppins md:font-[400px] md:text-[8px] md:text-white
     md:ml-[30px]
     flex items-center  w-[120px] h-[21px] font-poppins font-[400px] text-[6px] text-white
     ml-[-10px]'>
    <FontAwesomeIcon icon={faEnvelope} 
    className="
    xl:w-[50px] xl:h-[25px] xl:text-[#006FFF]
    lg:w-[50px] lg:h-[25px] lg:text-[#006FFF]
    md:w-[20px] md:h-[10px] md:text-[#006FFF]
    w-[20px] h-[10px] text-[#006FFF]" />
    whitecollar@gmail.com
    </div>

    </div>

        <div className='
        xl:w-[200px] xl:h-[22px] xl:absolute xl:top-[14px] xl:ml-[1000px]
        lg:w-[200px] lg:h-[22px] lg:absolute lg:top-[14px] lg:ml-[950px]
        md:w-[150px] md:h-[22px] md:absolute md:top-[14px] md:ml-[570px]
        w-[100px] h-[22px] absolute top-[14px] ml-[300px]
        '>
        <FontAwesomeIcon icon={faInstagram} className="
        xl:w-[50px] xl:h-[25px] xl:text-[#FFFFFF] xl:mr-[-10px]
        lg:w-[50px] lg:h-[25px] lg:text-[#FFFFFF] lg:mr-[-10px]
        md:w-[20px] md:h-[15px] md:text-[#FFFFFF] md:mr-4
        w-[15px] h-[10px] text-[#FFFFFF] mr-2"/>
        <FontAwesomeIcon icon={faFacebook} className="
        xl:w-[50px] xl:h-[25px] xl:text-[#FFFFFF] xl:mr-[-10px]
        lg:w-[50px] lg:h-[25px] lg:text-[#FFFFFF] lg:mr-[-10px]
        md:w-[20px] md:h-[15px] md:text-[#FFFFFF] md:mr-4
        w-[15px] h-[10px] text-[#FFFFFF] mr-2"/>
        <FontAwesomeIcon icon={faTwitter} className="
        xl:w-[50px] xl:h-[25px] xl:text-[#FFFFFF] xl:mr-[-10px]
        lg:w-[50px] lg:h-[25px] lg:text-[#FFFFFF] lg:mr-[-10px]
        md:w-[20px] md:h-[15px] md:text-[#FFFFFF] md:mr-4
        w-[15px] h-[10px] text-[#FFFFFF] mr-2"/>
        <FontAwesomeIcon icon={faPinterest} className="
        xl:w-[50px] xl:h-[25px] xl:text-[#FFFFFF] xl:mr-[-10px]
        lg:w-[50px] lg:h-[25px] lg:text-[#FFFFFF] lg:mr-[-10px]
        md:w-[20px] md:h-[15px] md:text-[#FFFFFF] md:mr-4
        w-[15px] h-[10px] text-[#FFFFFF] mr-2"/>
      </div>
</header>
    </div>
  )
}
