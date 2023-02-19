import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { BsInstagram } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { ImLinkedin } from 'react-icons/im';

const Footer = () => {
    return (
        <div className='mt-[40px] flex flex-col items-center'>
            <div className='flex items-center gap-[10px]'>
                <Image src='/logo.png' width={70} height={70} alt='logo' />
                <p className='text-green-400 font-poppins text-2xl'>Reedon Web</p>
            </div>

            <div className='flex gap-[20px] items-center mt-[20px]'>
                <Link href='https://www.facebook.com/reedonweb'>
                    <FaFacebook />
                </Link>

                <Link href=''>
                    <BsInstagram />
                </Link>

                <Link href='https://www.linkedin.com/company/reedon-web/'>
                    <ImLinkedin />
                </Link>

            </div>

            <div className='mt-[30px] flex items-center gap-[30px] font-poppins'>
                <Link href='/privacy-policy'>
                    Privacy Policy
                </Link>

                <Link href='/privacy-policy'>
                    Terms of service
                </Link>
            </div>

            <p className='mt-[30px] font-poppins text-center'>
                © 2023 Reedon web LLC. All right reserved.
            </p>
        </div>
    )
}

export default Footer