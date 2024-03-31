import React from 'react'
import AllCard from './components/Cards/AllCard'
import Navigation from './components/Navigation/Navigation'
import Ticket from './components/Ticket/Ticket'

const page = () => {
  return (
    <div className='h-[250vh] w-full bg-[#292B32] dark:bg-gray-200 max-[620px]:h-full max-[620px]:w-[100%]'>
        <Navigation/>
        <AllCard />
        <Ticket/>
    </div>
  )
}

export default page
