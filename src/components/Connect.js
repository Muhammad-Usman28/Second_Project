import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export default function Connect() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleSubmit = () => {
    // Handle form submission here
    console.log({ name, email, message });
  };

  return (
    <div>
      <div className='
      xl:w-full xl:h-[845px] xl:top-[2850px] xl:absolute
      lg:w-full lg:h-[845px] lg:top-[2850px] lg:absolute
      md:w-[768px] md:h-[845px] md:top-[2850px] md:absolute'>
        <img src="images/img12.png" alt="" />

        <div className='
        xl:w-[1050px] xl:h-[690px] xl:top-[77px] xl:absolute xl:left-[80px]
        lg:w-[1050px] lg:h-[690px] lg:top-[77px] lg:absolute lg:left-[80px]
        md:w-[300px] md:h-[690px] md:top-[77px] md:absolute md:left-[80px]'>
          <div className='
          xl:w-[700px] xl:h-[450px] xl:left-[160px] xl:rounded-[0px, 0px, 0px, 60px]
          lg:w-[700px] lg:h-[450px] lg:left-[160px] lg:rounded-[0px, 0px, 0px, 60px]
          md:w-[300px] md:h-[650px] md:left-[160px] md:rounded-[0px, 0px, 0px, 60px]'>
            <img src="images/img13.png" alt="" className='md:h-[650px]'/>
          </div>

          <div className='
          xl:w-[570px] xl:h-[690px] xl:top-[-1px] xl:absolute xl:left-[480px] xl:rounded-tl-[60px]
          xl:bg-[#FFFFFF] xl:shadow-[#929292] xl:border xl:border-[#F2F3F6]
          lg:w-[570px] lg:h-[690px] lg:top-[-1px] lg:absolute lg:left-[480px] lg:rounded-tl-[60px]
          lg:bg-[#FFFFFF] lg:shadow-[#929292] lg:border lg:border-[#F2F3F6]
          md:w-[400px] md:h-[690px] md:top-[-1px] md:absolute md:left-[250px] md:rounded-tl-[60px]
          md:bg-[#FFFFFF] md:shadow-[#929292] md:border md:border-[#F2F3F6]'>

            <div className="
            xl:w-[510px] xl:h-[610px] xl:top-[40px] xl:absolute xl:left-[72px]
            lg:w-[510px] lg:h-[610px] lg:top-[40px] lg:absolute lg:left-[72px]
            md:w-[190px] md:h-[610px] md:top-[40px] md:absolute md:left-[72px]">
              <h1 className='
              xl:w-[300px] xl:h-[80px] xl:top-[40px] xl:absolute xl:left-[72px] 
              xl:font-poppins xl:font-semibold xl:text-2xl
              lg:w-[300px] lg:h-[80px] lg:top-[40px] lg:absolute lg:left-[72px] 
              lg:font-poppins lg:font-semibold lg:text-2xl
              md:w-[300px] md:h-[80px] md:top-[40px] md:absolute md:left-[10px] 
              md:font-poppins md:font-semibold md:text-xl'>
                Connect With Your <br />
                Next Great Hire Today!
              </h1>
            </div>

            <div className='
            xl:w-[510px] xl:h-[400px] xl:top-[130px] xl:left-[72px] xl:absolute
            lg:w-[510px] lg:h-[400px] lg:top-[130px] lg:left-[72px] lg:absolute
            md:w-[190px] md:h-[400px] md:top-[130px] md:left-[72px] md:absolute'>
              <label htmlFor="name" className='
              xl:w-[95px] xl:h-[20px] xl:top-[30px] xl:left-[75px] xl:absolute
              xl:font-poppins xl:font-medium xl:text-[18px]
              lg:w-[95px] lg:h-[20px] lg:top-[30px] lg:left-[75px] lg:absolute
              lg:font-poppins lg:font-medium lg:text-[18px]
              md:w-[95px] md:h-[20px] md:top-[30px] md:left-[10px] md:absolute
              md:font-poppins md:font-medium md:text-[14px]'>Your Name</label>
              <input 
                type="text" 
                value={name} 
                onChange={handleNameChange} 
                className='
                xl:w-[350px] xl:h-[40px] xl:top-[60px] xl:absolute xl:left-[75px] xl:rounded-sm
              xl:bg-[#F2F3F6]
                lg:w-[350px] lg:h-[40px] lg:top-[60px] lg:absolute lg:left-[75px] lg:rounded-sm
              lg:bg-[#F2F3F6]
                md:w-[250px] md:h-[40px] md:top-[60px] md:absolute md:left-[10px] md:rounded-sm
              md:bg-[#F2F3F6]' 
              />

              <label htmlFor="email" className='
              xl:w-[95px] xl:h-[20px] xl:top-[110px] xl:left-[77px] xl:absolute xl:font-poppins xl:font-medium xl:size-[18px]
              lg:w-[95px] lg:h-[20px] lg:top-[110px] lg:left-[77px] lg:absolute lg:font-poppins lg:font-medium lg:text-[18px]
              md:w-[95px] md:h-[20px] md:top-[110px] md:left-[10px] md:absolute md:font-poppins md:font-medium md:text-[14px]'>Email</label>
              <input 
                type="email" 
                value={email} 
                onChange={handleEmailChange} 
                className='
                xl:w-[350px] xl:h-[40px] xl:top-[150px] xl:absolute xl:left-[75px] xl:rounded-sm
              xl:bg-[#F2F3F6]
                lg:w-[350px] lg:h-[40px] lg:top-[150px] lg:absolute lg:left-[75px] lg:rounded-sm
              lg:bg-[#F2F3F6]
                md:w-[250px] md:h-[40px] md:top-[150px] md:absolute md:left-[10px] md:rounded-sm
              md:bg-[#F2F3F6]' 
              />

              <label htmlFor="message" className='
              xl:w-[95px] xl:h-[20px] xl:top-[200px] xl:left-[77px] xl:absolute
              xl:font-poppins xl:font-medium xl:text-[18px]
              lg:w-[95px] lg:h-[20px] lg:top-[200px] lg:left-[77px] lg:absolute
              lg:font-poppins lg:font-medium lg:text-[18px]
              md:w-[95px] md:h-[20px] md:top-[200px] md:left-[10px] md:absolute
              md:font-poppins md:font-medium md:text-[14px]'>Message</label>
              <textarea 
                value={message} 
                onChange={handleMessageChange} 
                className='
                xl:w-[350px] xl:h-[140px] xl:top-[240px] xl:absolute xl:left-[75px] xl:rounded-sm
              xl:bg-[#F2F3F6]
                lg:w-[350px] lg:h-[140px] lg:top-[240px] lg:absolute lg:left-[75px] lg:rounded-sm
              lg:bg-[#F2F3F6]
                md:w-[250px] md:h-[140px] md:top-[240px] md:absolute md:left-[10px] md:rounded-sm
              md:bg-[#F2F3F6]' 
              />

              <button 
                onClick={handleSubmit}
                className='
                xl:w-[350px] xl:h-[60px] xl:top-[450px] xl:left-[80px] xl:absolute xl:rounded-full 
                xl:p-[18px, 64px, 18px, 64px] xl:gap-[8px] xl:bg-[#006FFF] xl:text-[#FFFFFF] xl:font-poppins xl:size-[18px] xl:font-normal
                lg:w-[350px] lg:h-[60px] lg:top-[450px] lg:left-[80px] lg:absolute lg:rounded-full 
                lg:p-[18px, 64px, 18px, 64px] lg:gap-[8px] lg:bg-[#006FFF] lg:text-[#FFFFFF] lg:font-poppins lg:size-[18px] lg:font-normal
                md:w-[250px] md:h-[60px] md:top-[450px] md:left-[10px] md:absolute md:rounded-full 
                md:p-[18px, 64px, 18px, 64px] md:gap-[8px] md:bg-[#006FFF] md:text-[#FFFFFF] md:font-poppins md:size-[18px] md:font-normal'
                >
                Send Message <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='ml-3' />
              </button>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
