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
      xl:w-full xl:h-[845px] xl:top-[2850px] xl:absolute'>
        <img src="images/img12.png" alt="" />

        <div className='
        xl:w-[1050px] xl:h-[690px] xl:top-[77px] xl:absolute xl:left-[80px]'>
          <div className='
          xl:w-[700px] xl:h-[450px] xl:left-[160px] xl:rounded-[0px, 0px, 0px, 60px]'>
            <img src="images/img13.png" alt="" />
          </div>

          <div className='
          xl:w-[570px] xl:h-[690px] xl:top-[-1px] xl:absolute xl:left-[480px] xl:rounded-tl-[60px]
          xl:bg-[#FFFFFF] xl:shadow-[#929292] xl:border xl:border-[#F2F3F6]'>

            <div className="xl:w-[510px] xl:h-[610px] xl:top-[40px] xl:absolute xl:left-[72px]">
              <h1 className='
              xl:w-[300px] xl:h-[80px] xl:top-[40px] xl:absolute xl:left-[72px] 
              xl:font-poppins xl:font-semibold xl:text-2xl'>
                Connect With Your <br />
                Next Great Hire Today!
              </h1>
            </div>

            <div className='
            xl:w-[510px] xl:h-[400px] xl:top-[130px] xl:left-[72px] xl:absolute'>
              <label htmlFor="name" className='
              xl:w-[95px] xl:h-[20px] xl:top-[30px] xl:left-[75px] xl:absolute
              xl:font-poppins xl:font-medium xl:size-[18px]'>Your Name</label>
              <input 
                type="text" 
                value={name} 
                onChange={handleNameChange} 
                className='
                xl:w-[350px] xl:h-[40px] xl:top-[60px] xl:absolute xl:left-[75px] xl:rounded-sm
              xl:bg-[#F2F3F6]' 
              />

              <label htmlFor="email" className='
              xl:w-[95px] xl:h-[20px] xl:top-[110px] xl:left-[77px] xl:absolute xl:font-poppins xl:font-medium xl:size-[18px]'>Email</label>
              <input 
                type="email" 
                value={email} 
                onChange={handleEmailChange} 
                className='
                xl:w-[350px] xl:h-[40px] xl:top-[150px] xl:absolute xl:left-[75px] xl:rounded-sm
              xl:bg-[#F2F3F6]' 
              />

              <label htmlFor="message" className='
              xl:w-[95px] xl:h-[20px] xl:top-[200px] xl:left-[77px] xl:absolute
              xl:font-poppins xl:font-medium xl:size-[18px]'>Message</label>
              <textarea 
                value={message} 
                onChange={handleMessageChange} 
                className='
                xl:w-[350px] xl:h-[140px] xl:top-[240px] xl:absolute xl:left-[75px] xl:rounded-sm
              xl:bg-[#F2F3F6]' 
              />

              <button 
                onClick={handleSubmit}
                className='
                xl:w-[350px] xl:h-[60px] xl:top-[450px] xl:left-[80px] xl:absolute xl:rounded-full 
                xl:p-[18px, 64px, 18px, 64px] xl:gap-[8px] xl:bg-[#006FFF] xl:text-[#FFFFFF] xl:font-poppins xl:size-[18px] xl:font-normal'>
                Send Message <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='ml-3' />
              </button>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
