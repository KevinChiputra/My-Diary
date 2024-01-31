import React from 'react'

export const Main = () => {
  return (
    <div className='bg-[#7B66FF] w-screen h-screen flex flex-col items-center justify-center'>
        
        <div className='flex justify-center items-center flex-col pb-6 gap-2'>
            <h1 className='text-4xl text-[#C5FFF8] font-poppins font-medium'>Welcome to My Diary</h1>
            <h2 className='text-2xl text-[#ffffff] font-poppins font-light'>Type about your story today</h2>
        </div>

        <div className='flex flex-col gap-4 w-[50%]'>
            <input type="date" className='p-4 rounded-md border-4 border-black text-xl'/>
            <input type="text" placeholder='Mood' className='p-4 rounded-md border-4 border-black text-xl'/>
            <textarea name="" id="" cols="30" rows="10" placeholder='Apa yang terjadi hari ini?' className='p-4 rounded-md border-4 border-black text-xl resize-none'></textarea>
        </div>
    </div>
  )
}
