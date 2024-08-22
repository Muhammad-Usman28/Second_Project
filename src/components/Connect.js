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
      <div className='w-full h-[845px] top-[2850px] absolute'>
        <img src="images/img12.png" alt="" />

        <div className='w-[1050px] h-[690px] top-[77px] absolute left-[80px]'>
          <div className='w-[700px] h-[450px] left-[160px] rounded-[0px, 0px, 0px, 60px]'>
            <img src="images/img13.png" alt="" />
          </div>

          <div className='w-[570px] h-[690px] top-[-1px] absolute left-[480px] rounded-tl-[60px]
          bg-[#FFFFFF] shadow-[#929292] border border-[#F2F3F6]'>

            <div className="w-[510px] h-[610px] top-[40px] absolute left-[72px]">
              <h1 className='w-[300px] h-[80px] top-[40px] absolute left-[72px] 
              font-poppins font-semibold text-2xl'>
                Connect With Your <br />
                Next Great Hire Today!
              </h1>
            </div>

            <div className='w-[510px] h-[400px] top-[130px] left-[72px] absolute'>
              <label htmlFor="name" className='w-[95px] h-[20px] top-[30px] left-[75px] absolute
              font-poppins font-medium size-[18px]'>Your Name</label>
              <input 
                type="text" 
                value={name} 
                onChange={handleNameChange} 
                className='w-[350px] h-[40px] top-[60px] absolute left-[75px] rounded-sm
              bg-[#F2F3F6]' 
              />

              <label htmlFor="email" className='w-[95px] h-[20px] top-[110px] left-[77px] absolute
              font-poppins font-medium size-[18px]'>Email</label>
              <input 
                type="email" 
                value={email} 
                onChange={handleEmailChange} 
                className='w-[350px] h-[40px] top-[150px] absolute left-[75px] rounded-sm
              bg-[#F2F3F6]' 
              />

              <label htmlFor="message" className='w-[95px] h-[20px] top-[200px] left-[77px] absolute
              font-poppins font-medium size-[18px]'>Message</label>
              <textarea 
                value={message} 
                onChange={handleMessageChange} 
                className='w-[350px] h-[140px] top-[240px] absolute left-[75px] rounded-sm
              bg-[#F2F3F6]' 
              />

              <button 
                onClick={handleSubmit}
                className='w-[350px] h-[60px] top-[450px] left-[80px] absolute rounded-full 
                p-[18px, 64px, 18px, 64px] gap-[8px] bg-[#006FFF] text-[#FFFFFF] font-poppins size-[18px]
                font-normal'>
                Send Message <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='ml-3' />
              </button>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
