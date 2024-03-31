import React from 'react'
import { FiSun } from 'react-icons/fi'
import Theme from '../ThemeToggle/Theme'

const Navigation = () => {
    return (
        <div className='h-[15vh] w-[100%] '>
            <div className=' h-full w-[80%] flex justify-between items-center mx-auto my-0'>
                <div className=' text-white font-medium text-3xl dark:text-dark'>Sports</div>
                <Theme/>
            </div>
        </div>
    )
}

export default Navigation
