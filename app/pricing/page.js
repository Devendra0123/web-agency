import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import PricingCard from '@/components/PricingCard'
import { pricingData } from '@/utils/pricing'
import React from 'react'

const Pricing = () => {
    return (
        <div className='w-screen flex flex-col items-center p-[20px]'>
            <Navbar />

            <div className='text-center mt-[40px]'>
                <p className='text-4xl font-bold font-abrilFlatface tracking-wider'>
                    Pricing
                </p>
                <p className='text-2xl font-poppins mt-[10px]'>
                    We offer our services at a reasonable price.<br/> We really care about the growth of an individual business.
                </p>
            </div>

            <div className='w-full md:w-10/12 flex flex-col items-center md:flex-row md:justify-center md:flex-wrap gap-[20px] mt-[30px]'>
          {
            pricingData.map((item, index) => (
              <PricingCard key={index} business={item.business} money={item.price} />
            ))
          }
        </div>
            <Footer />
        </div>
    )
}

export default Pricing