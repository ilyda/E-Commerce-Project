import React from 'react'

const Title = ({ text1, text2 }) => {
    return (
        <div className='flex gap-2 items-center mb-3 w-3/4 m-auto flex-col my-10'>
            <h2 className='text-[#252B42] md:text-2xl text-lg font-bold'>{text1} </h2>
            <p className='text-sm text-[#737373]'>{text2}</p>
        </div>
    )
}

export default Title
