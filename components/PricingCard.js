import React from 'react'
import {SiGooglemybusiness} from 'react-icons/si';
import {RiMoneyEuroCircleLine} from 'react-icons/ri';

const PricingCard = ({business,money}) => {
  return (
    <div className='pricing_card'>
        {/* Left Red mark */}
        <div className='left_mark'></div>

        {/* Right Red mark */}
        <div className='right_mark'></div>

        {/* Main Section */}
        <div className='pricing_card_text_section'>
          <div className='flex items-center gap-[10px] text-xl font-medium'>
            <SiGooglemybusiness />
            <p className='font-pacifico tracking-wider'>
                {business}
            </p>
          </div>

          <div className='flex items-center gap-[10px] text-xl'>
            <RiMoneyEuroCircleLine />
            <p className='f'>
                Rs. {money}
            </p>
          </div>
        </div>
    </div>
  )
}

export default PricingCard