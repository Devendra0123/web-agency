'use client'

import EmphasisedFeature from '../components/EmphasisedFeature'
import Navbar from '../components/Navbar'
import DeliverFast from '@/components/DeliverFast'
import BusinessOption from '@/components/BusinessOption'
import PricingCard from '@/components/PricingCard'
import HireUs from '@/components/HireUs'
import { pricingData } from '@/utils/pricing'
import Testimonial from '@/components/Testimonial'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {

  return (
    <div className='w-screen flex flex-col items-center p-[20px]'>
      <Navbar />

      {/* Hero Section */}
      <div className='w-full mt-[40px] flex flex-col items-center'>
        <p className='text-4xl font-bold font-abrilFlatface tracking-wider text-center'>
          Let's skyrocket your business
        </p>
        <p className='text-2xl font-pacifico text-teal-400'>
          # Go Online
        </p>

        {/* Business Option  */}
        <BusinessOption />

        {/* Video */}
        <div className='flex justify-center relative mt-[10px]'>
          <video controls className='w-full h-[12rem] md:h-[25rem] rounded-xl mt-[30px]'>
            <source src='/intro_video.mp4' />
          </video>
        </div>

        {/* Emphasized Feature */}
        <div className='flex justify-between items-center mt-[30px] md:gap-[30px]'>
          <EmphasisedFeature text='Best Design' />
          <EmphasisedFeature text='User Experience' />
          <EmphasisedFeature text='Follow up' />
        </div>

        {/* Features */}

        <HireUs />

        {/* Pricing Card */}
        <p className='mt-[40px] text-center text-4xl font-bold font-abrilFlatface tracking-wider'>
          Our Pricing
        </p>
        <p className='mb-[30px] text-center font-poppins text-xl'>
          We provide our services at reasonable price.
        </p>
        <div className='w-full md:w-10/12 flex flex-col items-center md:flex-row md:justify-center md:flex-wrap gap-[20px]'>
          {
            pricingData.map((item, index) => (
              <PricingCard key={index} business={item.business} money={item.price} />
            ))
          }
        </div>

        <DeliverFast />
        {/*  Testimonials  */}
        <p className='text-3xl font-bold font-abrilFlatface tracking-wider text-center mt-[40px]'>
          What other's say about us
        </p>
        <Testimonial />

        {/* Contact Form */}
        <p className='text-3xl font-bold font-abrilFlatface tracking-wider text-center mt-[40px]'>
          Contact Us
        </p>
        <ContactForm />
      </div>

      <Footer />
    </div>
  )
}
