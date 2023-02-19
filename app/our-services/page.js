import ExpertService from '@/components/ExpertService'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { services } from '@/utils/services'
import React from 'react'

const OurServices = () => {
    return (
        <div className='w-screen flex flex-col items-center p-[20px]'>
            <Navbar />

            <div className='text-center mt-[40px]'>
               <p className='text-4xl font-bold font-abrilFlatface tracking-wider'>
                 Our Services
               </p>

               <div className='lg:w-11/12 flex flex-col md:flex-row md:flex-wrap md:justify-center items-center gap-[20px] mt-[30px]'>
                    {
                        services.map((item, index) => (
                            <ExpertService key={index} icon={item.icon} title={item.title} description={item.description} />
                        ))
                    }
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default OurServices