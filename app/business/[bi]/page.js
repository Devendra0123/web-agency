import CallToAction from '@/components/CallToAction'
import ExpertService from '@/components/ExpertService'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import PricingCard from '@/components/PricingCard'
import { expertService } from '@/utils/expertService'
import { pricingData } from '@/utils/pricing'
import React from 'react'

const page = ({params}) => {

    const price = pricingData.find((item)=> item.business.toLowerCase() === params.bi.toLowerCase());
  
    return (
        <div className='w-screen flex flex-col items-center p-[20px]'>
            <Navbar />

            <div className='mt-[40px] w-full flex flex-col items-center md:w-11/12'>
                <p className='capitalize text-4xl font-bold font-abrilFlatface tracking-wider text-center'>
                    {params.bi}
                </p>
                <p className='mt-[30px] font-bold text-xl font-poppins text-center'>
                    We take your business to <br/> <span className='text-2xl font-pacifico text-teal-400 tracking-wider'>Online world</span>
                </p>
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
             {/* Pricing  */}
            <div className='flex flex-col items-center gap-[10px] text-center mt-[40px]'>
                <p className='text-4xl font-bold font-abrilFlatface tracking-wider'>
                    Pricing
                </p>
                <p className='text-2xl font-poppins'>
                    We offer our services at a reasonable price.<br/> We really care about the growth of an individual business.
                </p>

                <PricingCard business={price?.business} money={price?.price} />
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

export default page