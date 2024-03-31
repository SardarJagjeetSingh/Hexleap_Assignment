"use client"
import React from 'react'
import TicketCard from './TicketCard'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import card1 from '@/public/images/Card1.png';
import card2 from '@/public/images/Card2.png';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};


const Ticket = () => {
  return (
    <div className='h-[140vh] w-[100%] max-[620px]:w-100% max-[620px]:h-[150vh]'>
      <div className='h-full w-[90%] text-center mx-auto my-0 flex flex-col bg-gradient-to-r from-[#18282A] to-[#221A2C] max-[620px]:w-100% max-[620px]:h-[120vh] max-[620px]:m-[3vh] max-[620px]:mx-auto'>
        <div className=' h-full dark:bg-gradient-to-r from-[#F9F8FF] to-[#F3F9FF]'>
          <div className='py-16 max-[620px]:h-[45vh] max-[620px]:mx-auto'>
            <h1 className='text-5xl text-white text-center font-bold dark:text-dark max-[620px]:text-[38px] max-[620px]:leading-snug'>Collection Spotlight</h1>
            <p className='text-sm text-white text-center mt-4 dark:text-dark max-[620px]:text-0.5rem max-[620px]:mt-8'>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable <br />
              experience. Grab yours today!</p>
          </div>
          <div className='h-[85vh] w-[75%] mx-auto max-[620px]:h-[100vh] max-[620px]:w-100%' >
            <Carousel
              additionalTransfrom={0}
              arrows={true}
              autoPlay={true}
              autoPlaySpeed={4000}
              centerMode={false}
              infinite
              responsive={responsive}
              itemClass='item'
              showDots={false}
            >
              <TicketCard
                image='/images/Card1.png'
                title='Las Vegas Aviators'
                date='Oct 15 |Sun| 4:30 PM'
                place='Las Vegas Ballpark, Las Vegas, Nevada'
                button='Take Flight Collection' />

              <TicketCard
                image='/images/Card2.png'
                title='Sacramento River Cats'
                date='Oct 15 |Sun| 4:30 PM'
                place='Sutter Health Park, Sacramento, California'
                button='Orange Collection' />

              <TicketCard
                image='/images/Card1.png'
                title='Las Vegas Aviators'
                date='Oct 15 |Sun| 4:30 PM'
                place='Las Vegas Ballpark, Las Vegas, Nevada'
                button='Take Flight Collection' />


            </Carousel>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Ticket
