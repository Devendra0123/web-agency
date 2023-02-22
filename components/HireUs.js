import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import FeatureTitle from './FeatureTitle'

const HireUs = () => {
    return (
        <div className='w-full flex flex-col items-center mt-[50px]'>
            <FeatureTitle
                title='Hire our elite web developers'
                subtitle='Our team has worked with so many brands and has been able to provide satisfaction to our clients' />

            <div className='p-[10px] md:p-0 rounded-xl md:rounded-none bg-yellow-200 mt-[30px] font-poppins text-lg flex flex-col items-center md:flex-row md:justify-center'>
                <div className='w-4/5 md:w-1/3 mb-[20px] md:mb-[0px] flex flex-col gap-[20px] font-medium text-xl'>
                    <p>
                        A beautiful looking website and a great user eperience is always the highest priority for us.
                    </p>
                    <Link href='/hire-us' className='bg-[#242C35] w-max px-[15px] py-[10px] text-white'>
                        Hire Us
                    </Link>
                </div>
                <Image src='/developer_image.png' width={320} height={320} className='rounded-xl shadow-xl' alt='delivery_image' />
            </div>
        </div>
    )
}

export default HireUs
