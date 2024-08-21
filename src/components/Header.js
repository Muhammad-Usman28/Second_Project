import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Header() {
  return (
    <div className='w-full'>
      <header className='
      w-full h-[50px] bg-[#202430]
      xl:w-full xl:h-[50px] xl:bg-[#202430]s '>

      
<div className="
w-[600px] h-[22px]  absolute top-[14px] left-[167px] gap-[42px] flex
xl:w-[600px] xl:h-[22px]  xl:absolute xl:top-[14px] xl:left-[167px] xl:gap-[42px] xl:flex">

<div className='
flex items-center w-[322px] h-[21px]  font-poppins font-[400px] size-[14px] text-white
xl:flex xl:items-center xl:w-[322px] xl:h-[21px] xl:font-poppins xl:font-[400px] xl:size-[14px] xl:text-white'>
<FontAwesomeIcon icon={faLocationDot} 
 className="
 w-[50px] h-[25px] text-[#006FFF]
 xl:w-[50px] xl:h-[25px] xl:text-[#006FFF]" />
 24 Olive Street, Prairie, NY 53590
</div>

<div className='
flex items-center w-[250px] h-[21px] font-poppins font-[400px] size-[14px] text-white
xl:flex xl:items-center xl:w-[250px] xl:h-[21px] xl:font-poppins xl:font-[400px] xl:size-[14px]xl:text-white'>
<FontAwesomeIcon icon={faEnvelope} 
 className="
 w-[50px] h-[25px] text-[#006FFF]
 xl:w-[50px] xl:h-[25px] xl:text-[#006FFF]" />
 whitecollar@gmail.com
</div>

</div>

<div className='
w-[200px] h-[22px] absolute top-[14px] ml-[1000px]
xl:w-[200px] xl:h-[22px] xl:absolute xl:top-[14px] xl:ml-[1000px] '>
   <FontAwesomeIcon icon={faInstagram} className="
   w-[50px] h-[25px] text-[#FFFFFF]
   xl:w-[50px] xl:h-[25px] xl:text-[#FFFFFF]"/>
   <FontAwesomeIcon icon={faFacebook} className="
   w-[50px] h-[25px] text-[#FFFFFF]
   xl:w-[50px] xl:h-[25px] xl:text-[#FFFFFF]"/>
   <FontAwesomeIcon icon={faTwitter} className="
   w-[50px] h-[25px] text-[#FFFFFF]
   xl:w-[50px] xl:h-[25px] xl:text-[#FFFFFF]"/>
   <FontAwesomeIcon icon={faPinterest} className="
   w-[50px] h-[25px] text-[#FFFFFF]
   xl:w-[50px] xl:h-[25px] xl:text-[#FFFFFF]"/>
</div>
</header>
    </div>
  )
}
