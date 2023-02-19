import React from 'react'

const FeatureTitle = ({title,subtitle}) => {
  return (
    <div className='w-4/5 md:w-2/4'>
        <p className='text-center text-4xl font-bold font-abrilFlatface tracking-wider'>
            {title}
        </p>
        <p className='font-poppins text-center p-[10px] text-xl'>
            {subtitle}
        </p>
    </div>
  )
}

export default FeatureTitle