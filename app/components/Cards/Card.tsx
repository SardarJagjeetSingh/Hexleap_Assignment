import Image from 'next/image'
import React from 'react'
import img from '@/public/images/1-image.png'
import { title } from 'process';

interface  Props {
  image: string;
  title: string;
  kaam: string;
  sports: string;
}

const Card = ({image,title,kaam,sports}:Props) => {
  return (
      <div className='h-full w-[19%] bg-[#3B3E47] p-2 dark:bg-white dark:shadow-md max-[620px]:w-[100%] max-[620px]:h-[55vh] max-[620px]:mb-5'>
        <Image src={image} alt="Profile" width={100} height={100} className='w-[100%] h-[78%] object-cover'/>
        <h1 className='text-white text-xl text-start font-semibold tracking-tight pt-2 dark:text-dark'>{title}</h1>
        <div className='h-[13%] w-[100%] my-2 p-2 bg-[#292B32] rounded-lg flex items-center justify-between text-start dark:bg-[#F7F7F8] dark:shadow-md'>
          <div>
              <h1 className='text-gray-400 text-sm'>Total Events</h1>
              <p className='text-white text-lg dark:text-dark'>{kaam} Events</p>
          </div>
          <div>
              <h1 className='text-gray-400 text-sm'>Sports</h1>
              <p className='text-white text-lg dark:text-dark'>{sports}</p>
          </div>
        </div>
      </div> 
  )
}

export default Card
