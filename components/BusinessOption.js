import Link from 'next/link'
import React, { useState } from 'react'

const BusinessOption = () => {

  const [showBusinessOption, setShowBusinessOption] = useState(false)

  return (
    <div className='flex flex-col md:flex-row items-center gap-[20px] mt-[30px] font-poppins text-lg font-medium'>
      <p>
        What is your business?
      </p>
      <div onMouseEnter={() => setShowBusinessOption(true)} onMouseLeave={() => setShowBusinessOption(false)} className='relative'>
        <button className='bg-blue-600 px-[15px] py-[10px] text-white'>
          Business Options
        </button>
        {
          showBusinessOption && (
            <ul className='absolute top-[45px] left-[0px] bg-[#242C35] transition ease-in-out delay-150 shadow-2xl z-10 text-white'>
              <Link href='/business/e-commerce'>
                <li className='py-[10px] px-[20px]'>
                  E-commerce
                </li>
              </Link>

              <Link href='/business/education'>
                <li className='py-[10px] p-[20px] pr-[70px]'>
                  Education
                </li>
              </Link>

              <Link href='/business/news-portal'>
                <li className='py-[10px] px-[20px]'>
                  News Portal
                </li>
              </Link>

              <Link href='/business/blog'>
                <li className='py-[10px] pl-[20px] pr-[70px]'>
                  Blog
                </li>
              </Link>

            </ul>

          )
        }
      </div>
    </div>
  )
}

export default BusinessOption