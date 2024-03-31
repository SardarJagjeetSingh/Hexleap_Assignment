import Image from 'next/image'
import React from 'react'

interface Props{
    desc: string,
    image: string,
    title: string
}

const AdvertiseCard = ({desc,title,image}:Props) => {
  return (
    <div className='h-full w-[19%] bg-[#3B3E47] p-2 dark:bg-white dark:shadow-md max-[620px]:w-full max-[620px]:h-[65vh]'>
        <Image src={image} alt="Profile" width={100} height={80} className='w-[100%] object-cover'/>
        <h1 className='text-white text-xl text-start pt-2 font-semibold tracking-tight dark:text-dark'>{title}</h1>
        <div className='h-[20%] w-[100%] my-2 p-2 '>
              <p className='text-gray-50 text-sm text-left h-6 dark:text-dark'>
                {desc}
              </p>
        </div>
      </div> 
  )
}

export default AdvertiseCard
