import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className='w-screen flex flex-col items-center p-[20px]'>
            <Navbar />

            <div className='text-center mt-[40px]'>
                <p className='text-4xl font-bold font-abrilFlatface tracking-wider'>
                    Privacy Policy
                </p>
                <p className='text-2xl font-poppins mt-[10px]'>
                    Last updated : Feb 19, 2023
                </p>
            </div>

            <div className='w-full md:w-10/12 flex flex-col gap-[20px] mt-[30px] font-poppins text-lg'>
                <p>
                We value your privacy very highly. Please read this Privacy Policy carefully before using the www.reedonweb.com Website operated by Reedon Web, formed in Kathmandu, Nepal as this Privacy Policy contains important information regarding your privacy and how we may use the information we collect about you. 
                </p>

                <p>
                Your access to and use of the Website is conditional upon your acceptance of and compliance with this Privacy Policy. This Privacy Policy applies to everyone, including, but not limited to: visitors, users, and others, who wish to access or use the Website.
                </p>
            </div>

            <div className='w-full md:w-10/12 flex flex-col gap-[20px] mt-[30px] font-poppins text-lg'>
              <p className='font-bold text-xl'>
              What information we collect, where we get this information, how we use this information, what happens if we don't have it, and the legal basis for processing this information
              </p>

              <p>
              We collect and store any and all information that you enter on this Website. We collect and store the following information about you:
              </p>

              <ul>
                <li>
                  Name
                </li>
                <li>
                  Email Address
                </li>
                <li>
                  Mobile Number
                </li>
                <li>
                  Messages typed
                </li>
              </ul>
            </div>

            <div className='w-full md:w-10/12 flex flex-col gap-[20px] mt-[30px] font-poppins text-lg'>
              <p className='font-bold text-xl'>
              With whom we share your personal information
              </p>

              <p>
                We do not share your personal information to any third parties.
              </p>
            </div>
            <Footer />
    </div>
  )
}

export default page