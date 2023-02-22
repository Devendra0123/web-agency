import Image from 'next/image'
import React, { useRef, useState } from 'react'
import {BsPlayCircle} from 'react-icons/bs';
import {BsPauseCircle} from 'react-icons/bs';

const Video = () => {

    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = ()=>{
        if (isPlaying) {
            videoRef?.current?.pause();
            setIsPlaying(false);
          } else {
            videoRef?.current?.play();
            setIsPlaying(true);
          }
    }
  return (
    <div className='relative flex justify-center relative mt-[30px]'>
    <video ref={videoRef} src='/intro_video.mp4' className='w-full h-[12rem] md:h-[25rem] rounded-xl mt-[30px]'>
    </video>
    <div onClick={handlePlayPause} className='cursor-pointer absolute bottom-[8%] md:bottom-[9%] left-[48%] md:left-[50%] transform translate-x-[-50%] flex items-center gap-[5px] bg-white p-[10px] py-[5px] md:px-[30px] md:py-[15px] rounded-xl'>
          <Image src='/logo.png' width={30} height={30} alt='logo' />
          <p className='text-green-400 font-poppins md:text-xl'>Reedon Web</p>
      </div>
      <div onClick={handlePlayPause} className='absolute top-[2%] md:top-[2%] right-[7%] text-4xl text-teal-400 bg-white p-[10px] rounded-full cursor-pointer hover:bg-blue-600 hover:text-white'>
        {
            isPlaying ? <BsPauseCircle /> : <BsPlayCircle />
        }
      </div>
  </div>
  )
}

export default Video
