import Image from 'next/image'
import React from 'react'
import { FiClock } from 'react-icons/fi';
import {CiMail} from 'react-icons/ci';
import {TbPhoneCall} from 'react-icons/tb';

const CallToAction = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='flex items-center gap-[10px] mt-[30px]'>
                <Image src='/logo.png' width={70} height={70} alt='logo' />
                <p className='text-green-400 font-poppins text-2xl'>Reedon Web</p>
            </div>

            <div className='w-full flex flex-col lg:flex-row lg:justify-center items-center mt-[40px] gap-[30px]'>
                {/* Left  */}
                <div className='w-11/12 lg:w-2/6 flex flex-col gap-[10px] shadow-2xl'>
                    <div className='flex flex-col items-center gap-[8px]'>
                        <Image src='/profile_pic.png' width={100} height={100} className='rounded-full bg-yellow-300' alt='profile_pic' />
                        <p className='font-poppins text-gray-300 font-bold text-lg text-center'>
                            Devendra Chaudhary
                        </p>
                        <p className='font-bold text-2xl'>
                            Website Making Call
                        </p>
                    </div>

                    <div className='flex justify-center items-center gap-[10px] font-bold'>
                        <FiClock />
                        <p>
                            10 - 20 min
                        </p>
                    </div>

                    <div className='bg-[#242C35] text-white p-[10px] rounded-xl font-poppins flex flex-col items-center gap-[20px] text-xl'>
                        <p className='text-center'>
                            Quick 10-20 minute call to learn more about working with us.
                        </p>

                        <p className='text-center'>
                            In this call we will briefly cover:
                        </p>

                        <ul className='flex flex-col'>
                            <li>
                                1.  Business goals
                            </li>
                            <li>
                                2. Our services
                            </li>
                            <li>
                                3. Pricing
                            </li>
                        </ul>

                        <p className='text-center'>
                            If we both feel that we are a good fit to work together after this call, we will make plans to kickoff your website.
                        </p>
                    </div>
                </div>

                {/* Right */}
                <div className='w-11/12 lg:w-2/6 p-[10px] flex flex-col items-center border-2 bg-[#242C35] text-white rounded-xl shadow-2xl'>
                    <Image src='/telephone.png' width={120} height={120} className='bg-white rounded-full p-[20px]' alt='telephone' />
                    <div className='font-pacifico text-xl p-[15px]'>
                        <div className='flex items-center gap-[10px]'>
                            <CiMail />
                            <p className='font-poppins font-bold'>
                                reedon.web@gmail.com
                            </p>
                        </div>

                        <div className='flex items-center gap-[10px]'>
                            <TbPhoneCall />
                            <p>
                                9807717694
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CallToAction