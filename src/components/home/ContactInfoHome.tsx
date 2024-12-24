'use client';


import React, { useEffect, useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

function ContactInfoHome() {
    const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full  py-4">
        <h1 className='text-4xl font-bold text-center w-full'>Have any query? Contact with us...</h1>
        <div className='flex items-center justify-between w-full  p-4 md:flex-row flex-col gap-5 md:gap-0'>

       

        <div className='flex flex-col gap-2 md:w-[23%]'>
            <p className='text-lg'>Email: 
                <span className='text-blue-500'>
                    {' '}
                    <a href='mailto:dummy@gmail.com'>dummy@gmail.com</a>
                </span>
            </p>
            <p className='text-lg'>Phone: 
                <span className='text-blue-500'>
                    {' '}
                    <a href='tel:+1234567890'>+1234567890</a>
                </span>
            </p>
            <p className='text-lg'>Address: 
                <span className='text-blue-500 text-base'>
                    {' '}
                    <a href='https://www.google.com/maps/place/123+Main+St,+New+York,+NY+10001,+USA'>123 Main St, New York, N0001, USA</a>
                </span>
            </p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58938.68792786298!2d88.44093112896608!3d22.591517446156573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02754a79bf63bf%3A0xbbbcc2e3c00e3980!2sNew%20Town%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1735029258788!5m2!1sen!2sin" width="250" height="150" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='bg-green-400 md:w-3/5 h-full flex flex-col gap-4 p-4 rounded-md items-center'>
        <div className='flex w-full gap-4 items-center '>

            <Input placeholder='Enter your email'className=' bg-white text-black border border-black shadow-md shadow-black' />
            <Input placeholder='Enter your name' className=' bg-white text-black border border-black shadow-md shadow-black'/>
        </div>
            <Input placeholder='Enter your message' className='w-[90%] h-[10rem] overflow-scroll bg-white text-black border border-black shadow-md shadow-black' />
            <Button className='bg-blue-500 text-white p-2 rounded-md w-24 border border-black shadow-md shadow-black' size={"lg"}>Send</Button>
        </div>
        </div>
    </div>
  )
}

export default ContactInfoHome