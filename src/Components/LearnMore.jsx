import React from 'react'

const LearnMore = () => {
  return (
    <div className='py-6 max-w-5xl mx-auto flex gap-4 items-center flex-wrap sm:flex-nowrap px-2'>
        <img src="image.jpg" alt="image" className='md:w-[500px] sm:w-[400px] w-full' />
        <div className='max-w-2xl space-y-4'>
            <h1 className='md:text-5xl sm:text-3xl text-5xl font-bold text-[#202020]'>Start Organizing Your Life Today</h1>
            <p className='md:text-lg sm:text-sm text-lg font-medium text-[#202020]'>Join us now and transform your productivity with our intuitive to-do list platform!</p>
            <div className='flex gap-3'>
                <button className='md:p-4 md:px-6 sm:p-2 sm:px-4 p-4 px-6 bg-[#FF3E54] text-white'>Sign Up</button>
                <button className='md:p-4 md:px-6 sm:p-2 sm:px-4 p-4 px-6 border border-[#FF3E54] text-[#000000]'>Learn More</button>
            </div>
        </div>
    </div>
  )
}

export default LearnMore