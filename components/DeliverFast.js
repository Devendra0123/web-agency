import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import FeatureTitle from './FeatureTitle'

const DeliverFast = () => {
    return (
        <div className='w-full flex flex-col items-center mt-[40px]'>
            <FeatureTitle
                title='Deliver your project with speed and precision'
                subtitle='Our team of developers is dedicated to not only providing high-quality solutions, but also delivering projects with lightning-fast speed.' />

            <div className='p-[10px] md:p-0 rounded-xl md:rounded-none w-full md:w-11/12 bg-yellow-200 mt-[30px] font-poppins text-lg flex flex-col items-center md:flex-row md:justify-center'>
                <div className='w-4/5 md:w-1/3 mb-[20px] md:mb-[0px] font-medium text-xl flex flex-col gap-[20px]'>
                    <p>
                        We understand the importance of meeting tight deadlines and strive to deliver every project on time, every time.
                    </p>
                    <Link href='/hire-us' className='bg-[#242C35] w-max px-[15px] py-[10px] text-white'>
                        Hire Us
                    </Link>
                </div>
                <Image src='/deliver_project.png' width={320} height={320} className='rounded-xl shadow-xl' alt='delivery_image' />
            </div>
        </div>
    )
}

export default DeliverFast