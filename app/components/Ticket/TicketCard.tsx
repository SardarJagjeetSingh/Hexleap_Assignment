import Image from 'next/image'
import React from 'react'

interface Props{
  image: string,
  title: string,
  date: string,
  place: string,
  button:string,
}

const TicketCard = ({image, title, date, place,button}:Props) => {
  return (
    <div className='h-[90vh] w-[80%] mx-auto my-0 bg-[#3B3E47] dark:bg-white dark:shadow-lg max-[620px]:w-full max-[620px]:h-[70vh]'>
              <Image src={image} alt='Ticket Image' height={500} width={500} objectFit="cover" />
              <h1 className='text-white text-xl font-bold mb-2 -mt-4 md:text-xl dark:text-dark max-[620px]:text-xl'>{title}</h1>
              <h2 className='text-white text-lg font-light mb-2 dark:text-dark max-[620px]:text-sm'>{date}</h2>
              <p className='text-white text-lg font-medium mb-2 dark:text-dark max-[620px]:text-sm'>{place}</p>
              <button className='bg-black text-white px-7 py-2 max-[620px]:mt-[1vh]'>{button}</button>
            </div>
  )
}

export default TicketCard
