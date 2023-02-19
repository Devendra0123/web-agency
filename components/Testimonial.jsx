import { testimonials } from '@/utils/testimonial'
import Link from 'next/link'
import React, { useState } from 'react'

const Testimonial = () => {

    return (
        <div className='w-4/5 md:w-10/12 flex flex-col md:flex-row md:items-center gap-[20px] mt-[40px]'>
            {
                testimonials.map((item, index) => (
                    <div key={index} className='bg-[#242C35] p-[10px] text-white rounded-xl'>
                        <p className='font-poppins text-lg'>
                            {item.comment}
                        </p>
                        <div className='flex justify-between items-center pt-[10px]'>
                            <div className='flex'>
                                <p className='text-lg font-pacifico tracking-wider text-teal-400'>
                                    {item.companyOwner}|
                                </p>
                                <Link href={item.websiteLink} className='text-lg font-abrilFlatface text-yellow-200'>
                                    {item.companyName}
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Testimonial