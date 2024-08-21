import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Header() {
  return (
    <div>
      <header className='w-full h-[50px] bg-[#202430] '>

      
<div className="className= w-[600px] h-[22px]  absolute top-[14px] left-[167px] gap-[42px]
flex">

<div className='flex items-center w-[322px] h-[21px]  font-poppins font-[400px] size-[14px] 
text-white'>
<FontAwesomeIcon icon={faLocationDot} 
 className="w-[50px] h-[25px] text-[#006FFF]" />
 24 Olive Street, Prairie, NY 53590
</div>

<div className='flex items-center w-[250px] h-[21px] font-poppins font-[400px] size-[14px] 
text-white'>
<FontAwesomeIcon icon={faEnvelope} 
 className="w-[50px] h-[25px] text-[#006FFF]" />
 whitecollar@gmail.com
</div>

</div>

<div className='w-[200px] h-[22px] absolute top-[14px] ml-[900px] '>
   <FontAwesomeIcon icon={faInstagram} className="w-[50px] h-[25px] text-[#FFFFFF]"/>
   <FontAwesomeIcon icon={faFacebook} className="w-[50px] h-[25px] text-[#FFFFFF]"/>
   <FontAwesomeIcon icon={faTwitter} className="w-[50px] h-[25px] text-[#FFFFFF]"/>
   <FontAwesomeIcon icon={faPinterest} className="w-[50px] h-[25px] text-[#FFFFFF]"/>
</div>
</header>
    </div>
  )
}
