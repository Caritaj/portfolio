import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { menuItems } from "../constants";

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='z-10 text-gray-500 flex justify-between items-center max-w-[1240px] mx-auto h-24 px-4 text-lg'>

            <h1 className='w-full text-3xl font-bold primary-color ml-4'>R. Ccarita</h1>
            <ul className='hidden md:flex'>
                {
                    menuItems.map((item) => (
                        <li className='p-5' key={item.id}>
                            <a href={item.link}>{item.title}</a>
                        </li>
                    ))
                }
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            <div className={nav ? ' z-10 text-gray-300 fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#202121] ease-in-out duration-500'
                : 'fixed left-[-100%]'}>
                <h1 className='text-3xl primary-color-m-4'>R. Ccarita</h1>
                <ul className='p-8 text-2xl'>
                    {
                        menuItems.map((item) => (
                            <li key={item.id} className='p-2'>
                                <a href={item.link}>{item.title}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Navbar