'use client'

import Image from 'next/image'
import React, { useState, useRef, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { CiMail } from 'react-icons/ci';
import { TbPhoneCall } from 'react-icons/tb';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [clientInfo, setClientInfo] = useState('')
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const mailMessage = `
    <p>Client Name: <span>${name}</span></p>
    <p>contact: <span>${number}</span></p>
    <p>Email: <span>${email}</span></p>
    <p>message: <span>${message}</span></p>
 `
    setClientInfo(mailMessage)
  }, [name, email, message, number])

  const sendMessage = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await emailjs.sendForm(process.env.NEXT_PUBLIC_MAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_MAILJS_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_MAILJS_PUBLIC_KEY);
      toast.success('message sent successfully!');
      setIsLoading(false)
      setName('');
      setMessage('');
      setEmail('');
      setNumber('')
    }
    catch (error) {
      toast.error(`Something went wrong. Resend!!`);
      setIsLoading(false)
    }
  }
  return (
    <div className='w-full flex flex-col lg:flex-row lg:justify-center items-center mt-[40px]'>
      <Toaster />
      <div className='w-11/12 lg:w-2/6 p-[10px] flex flex-col items-center border-2 border-teal-400 rounded-xl'>
        <Image src='/telephone.png' width={120} height={120} alt='telephone' />
        <div className='font-pacifico text-[#242C35] text-xl p-[15px]'>
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

      <div className='w-11/12 lg:w-2/6 font-poppins mt-[30px] p-[15px] bg-[#242C35] text-white'>
        <p className='text-center text-lg'>
          Feel free to contact us. We will get back to you as soon as we can.
        </p>

        <form onSubmit={sendMessage} className='flex flex-col gap-[15px] mt-[20px]'>
          <label className='flex flex-col'>
            Name
            <input type='text' onChange={(e) => setName(e.target.value)} value={name} className='outline-none p-[10px] text-black' />
          </label>

          <label className='flex flex-col'>
            Email
            <input type='email' onChange={(e) => setEmail(e.target.value)} value={email} className='outline-none p-[10px] text-black' />
          </label>

          <label className='flex flex-col'>
            Mobile Number
            <input type='number' onChange={(e) => setNumber(e.target.value)} value={number} className='outline-none p-[10px] text-black' />
          </label>

          <label className='flex flex-col'>
            Message
            <textarea onChange={(e) => setMessage(e.target.value)} value={message} className='outline-none p-[10px] text-black' />
          </label>

          <button type='submit' disabled={isLoading} className='w-max bg-yellow-400 text-[#242C35] font-bold relative left-[100%] transform translate-x-[-100%] px-[20px] py-[10px]'>
            {isLoading ? 'Wait...' : 'S E N D'}
          </button>
        </form>

        {/*  For EMAIL JS  */}
        <form ref={form} onSubmit={sendMessage} className='hidden'>

          <input type="text" name="user_name" readOnly value={name} />

          <input type="email" name="user_email" readOnly value={process.env.NEXT_PUBLIC_REEDON_WEB_MAIL} />

          <textarea name="message" readOnly value={`${clientInfo}`} className='hidden' />
        </form>
      </div>
    </div>
  )
}

export default ContactForm