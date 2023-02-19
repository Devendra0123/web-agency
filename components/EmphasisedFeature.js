import React, { useState } from 'react'

const EmphasisedFeature = ({text}) => {

    const [rating, setRating] = useState(5);

    const handleClick = (value) => {
        setRating(value);
    };

    return (
        <div className='flex flex-col items-center'>
            {/* Five Star */}
            <div>
                {[1, 2, 3, 4, 5].map((value) => (
                    <span
                        key={value}
                        onClick={() => handleClick(value)}
                        style={{ color: value <= rating ? 'green' : 'gray' }}
                    >
                        ★
                    </span>
                ))}
            </div>

            <p className='font-pacifico text-gray-500 text-xl text-center'>
                # {text}
            </p>
        </div>
    )
}

export default EmphasisedFeature