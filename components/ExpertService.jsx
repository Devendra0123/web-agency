import React from 'react'

const ExpertService = ({icon,title,description}) => {
  return (
    <div className='w-10/12 lg:w-3/12 border-2 shadow-3xl p-[10px] rounded-xl'>
        <div className='flex items-center gap-[10px] font-pacifico tracking-wider text-xl'>
           {icon}
           <p>
              {title}
           </p>
        </div>
        <p className='font-poppins text-lg'>
            {description}
        </p>
    </div>
  )
}

export default ExpertService