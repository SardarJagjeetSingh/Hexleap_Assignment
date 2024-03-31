"use client"
import React, { useEffect, useState } from 'react'
import { BsFillSunFill } from 'react-icons/bs'
import { FaMoon } from 'react-icons/fa'
import { FiSun } from 'react-icons/fi'

const Theme = () => {
    const [darkMode, setdarkMode] = useState(true)

    useEffect(()=>{
        const theme = localStorage.getItem( "theme")
        if (theme=== "dark") setdarkMode(true)
    },[])

    useEffect(()=>{
        const theme = localStorage.getItem( "theme")
        if (darkMode){
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark")

        } 
        else{
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light")

        }
    },[darkMode])

  return (
    <div className='relative w-16 h-8 flex items-center dark:bg-gray-900 bg-blue-500 cursor-pointer rounded-full p-1' onClick={()=>setdarkMode(!darkMode)}><BsFillSunFill
    className=' text-yellow-400' size={18}/>
    <div className='absolute bg-white dark:bg-medium w-6 h-6 rounded-full shadow-md transform transition-transform duration-300' style={darkMode ? {left: '2px'} : {right:'2px'}}></div>
    <FaMoon className='ml-auto text-white' size={18}/></div>
  ) 
}

export default Theme
