import CallToAction from '@/components/CallToAction'
import ExpertService from '@/components/ExpertService'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { expertService } from '@/utils/expertService'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HireUs = () => {
    return (
        <div className='w-screen flex flex-col items-center p-[20px]'>
            <Navbar />
            {/* Hero Section */}
            <div className='flex flex-col items-center gap-[20px] text-center mt-[40px]'>
                <p className='text-4xl font-bold font-abrilFlatface tracking-wider'>
                    Let our team handle your website
                </p>

                <p className='text-2xl font-poppins mt-[10px]'>
                    We hope to be your lifelong partner<br /> on your journey to success.
                </p>

                <Link href='/contact-us' className='bg-teal-400 px-[20px] py-[10px] text-white font-poppins text-2xl'>
                    Contact Us
                </Link>
            </div>

            {/* Our Service */}
            <div className='mt-[30px] flex flex-col md:flex-row justify-center items-center gap-[20px] p-[10px] md:p-0 rounded-xl md:rounded-none w-full md:w-11/12 bg-yellow-200'>
                <div className='w-4/5 md:w-1/3'>
                    <p className='text-2xl font-bold font-abrilFlatface tracking-wider'>
                        Our Services
                    </p>
                    <p className='text-2xl font-poppins mt-[10px]'>
                        We provide all the services, from building website to hosting it in the internet.
                    </p>
                </div>
                <div>
                    <Image src='/service.png' width={320} height={320} alt='service' />
                </div>
            </div>

            {/* Expert Service */}
            <div className='mt-[40px] w-full flex flex-col items-center md:w-11/12'>
                <p className='text-4xl font-bold font-abrilFlatface tracking-wider text-center'>
                    One expert team<br /> that does it all
                </p>
                <div className='lg:w-11/12 flex flex-col lg:flex-row lg:justify-center items-center gap-[20px] mt-[30px]'>
                    {
                        expertService.map((item, index) => (
                            <ExpertService key={index} icon={item.icon} title={item.title} description={item.description} />
                        ))
                    }
                </div>
            </div>

            {/* Let's see if we are good fit */}
            <div className='mt-[40px]'>
                <p className='text-4xl font-bold font-abrilFlatface tracking-wider text-center'>
                    Let's see if<br/> we're a good <br/>fit
                </p>

                <CallToAction />
            </div>

            <Footer />
        </div>
    )
}

export default HireUs