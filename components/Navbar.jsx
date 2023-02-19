'use client'
import Image from 'next/image';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    
  useEffect(() => {
    const handleClick = (event) => {
      if (!event.target.closest("ul")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [isOpen]);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <div className='w-full md:w-9/12 relative flex justify-between items-center'>
            {/*  Logo    */}
            <Link href='/' className='flex items-center gap-[10px]'>
                <Image src='/logo.png' width={70} height={70} alt='logo' />
                <p className='text-green-400 font-poppins text-2xl'>Reedon Web</p>
            </Link>

            {/*  NavItems  */}
            <div className='hidden md:block bg-yellow-200 py-[10px] px-[10px] flex justify-between font-poppins font-bold text-lg'>
                <Link href='/hire-us' className='p-[10px] hover:bg-[#242C35] hover:text-white'>
                    Hire
                </Link>

                <Link href='/our-services' className='p-[10px] hover:bg-[#242C35] hover:text-white'>
                    Services
                </Link>

                <Link href='/pricing' className='p-[10px] hover:bg-[#242C35] hover:text-white'>
                    Pricing
                </Link>

                <Link href='/contact-us' className='p-[10px] hover:bg-[#242C35] hover:text-white'>
                    Contact
                </Link>
            </div>

            {/* Hamburger Menu */}
            <div className='md:hidden'>
                {/* Hamburger Menu Icon */}
                <div onClick={toggleOpen} className='p-[20px] rounded-full border-2'>
                    <svg width='28' height='28' fill='orange' clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11 16.745c0-.414.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75zm-9-5c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75s-.336.75-.75.75h-18.5c-.414 0-.75-.336-.75-.75zm4-5c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75z" fillRule="nonzero" /></svg>
                </div>
                {isOpen && (
                    <ul className='w-3/5 absolute top-[80px] right-[20px] bg-[#242C35] flex flex-col items-center p-[20px] text-white font-poppins font-medium transform transition duration-500 ease-out z-50 rounded-xl shadow-2xl'>
                        <li className="p-4 border-t border-b border-gray-200 hover:bg-gray-100 hover:text-orange-500">
                            <Link href='/hire-us'>
                                Hire
                            </Link>
                        </li>
                        <li className="p-4 border-b border-gray-200 hover:bg-gray-100 hover:text-orange-500">
                            <Link href='/our-services'>
                                Services
                            </Link>
                        </li>
                        <li className="p-4 border-b border-gray-200 hover:bg-gray-100 hover:text-orange-500">
                            <Link href='/pricing'>
                                Pricing
                            </Link>
                        </li>
                        <li className="p-4 border-b border-gray-200 hover:bg-gray-100 hover:text-orange-500">
                            <Link href='/contact-us'>
                                Contact
                            </Link>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    )
}

export default Navbar