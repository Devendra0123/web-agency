import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CallToAction from '@/components/CallToAction'
import ContactForm from '@/components/ContactForm';

const ContactUs = () => {
    return (
        <div className='w-screen flex flex-col items-center p-[20px]'>
            <Navbar />

            <div className='mt-[40px]'>
                <p className='text-4xl font-bold font-abrilFlatface tracking-wider text-center'>
                    Let's see if<br/> we're a good <br/>fit
                </p>

                <CallToAction />
            </div>
            
            <ContactForm />
            <Footer />
        </div>
    )
}

export default ContactUs