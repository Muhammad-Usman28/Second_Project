import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Header() {
  return (
    <div >
      <header className='
      xl:w-full xl:h-[50px] xl:bg-[#202430] '>

      
    <div className="
    xl:w-[600px] xl:h-[22px]  xl:absolute xl:top-[14px] xl:left-[167px] xl:gap-[42px] xl:flex xl:ml-[-80px]">

    <div className='
    xl:flex xl:items-center xl:w-[322px] xl:h-[21px] xl:font-poppins xl:font-[400px] xl:size-[8px] xl:text-white xl:text-sm'>
    <FontAwesomeIcon icon={faLocationDot} 
    className="
    xl:w-[50px] xl:h-[25px] xl:text-[#006FFF]" />
    24 Olive Street, Prairie, NY 53590
    </div>

    <div className='
    xl:flex  xl:w-[250px] xl:h-[21px] xl:font-poppins xl:font-[400px] xl:size-[8px] xl:text-white
    xl:text-sm xl:ml-[-60px]'>
    <FontAwesomeIcon icon={faEnvelope} 
    className="
    xl:w-[50px] xl:h-[25px] xl:text-[#006FFF]" />
    whitecollar@gmail.com
    </div>

    </div>

        <div className='
        w-[200px] h-[22px] absolute top-[14px] ml-[1000px]
        '>
        <FontAwesomeIcon icon={faInstagram} className="
        xl:w-[50px] xl:h-[25px] xl:text-[#FFFFFF]"/>
        <FontAwesomeIcon icon={faFacebook} className="
        xl:w-[50px] xl:h-[25px] xl:text-[#FFFFFF]"/>
        <FontAwesomeIcon icon={faTwitter} className="
        xl:w-[50px] xl:h-[25px] xl:text-[#FFFFFF]"/>
        <FontAwesomeIcon icon={faPinterest} className="
        xl:w-[50px] xl:h-[25px] xl:text-[#FFFFFF]"/>
      </div>
</header>
    </div>
  )
}
