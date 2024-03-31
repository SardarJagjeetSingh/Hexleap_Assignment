import React from 'react'
import Card from './Card'
import AdvertiseCard from './AdvertiseCard'

const AllCard = () => {
  return (
      <div className='flex flex-col justify-center items-center '>
        <div className='h-[70vh] w-[100%] max-[620px]:w-100% max-[620px]:h-full'>
          <div className='h-full w-[80%] text-center mx-auto my-0 flex justify-between max-[620px]:flex-col max-[620px]:mb-[5vh]'>
            <Card
              image='/images/star-2.webp'
              title='Sacramento River Cats'
              kaam='48'
              sports='Cricket' />

            <Card
              image='/images/star-1.webp'
              title='Las Vegas Aviators'
              kaam='28'
              sports='baseball' />

            <Card
              image='/images/star-3.webp'
              title='New Jersey Devils'
              kaam='50'
              sports='ice hockey' />

            <Card
              image='/images/star-1.webp'
              title='Las Vegas Aviators'
              kaam='48'
              sports='baseball' />

            <AdvertiseCard
              image='/images/banner.png'
              title='Advertisement title'
              desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ' />
          </div>
        </div>
        <button className='border-none m-12 px-6 text-xl py-2 rounded-lg mx-auto bg-[#2C9CF0] text-white hover:bg-[#56a5ff] max-[620px]:mt-2'>See More</button>
      </div>
  )
}

export default AllCard
