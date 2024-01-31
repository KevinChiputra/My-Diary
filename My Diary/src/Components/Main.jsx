import React from 'react'

export const Main = () => {

    const submit = (e) =>{
        const formEle = document.querySelector('form')
        e.preventDefault()

        
        console.log("berhasil")
        const formData = new FormData(formEle)
        fetch("https://script.google.com/macros/s/AKfycbxjX6Ch_uJkdfDNVs6isoceBmKM_5qlAdrief-Cis4ga0bsqVWpa3Z8A8pOQyIwcp5r/exec", {
            method: "POST",
            body: formData
        })
    }

  return (
    <div className='bg-[#7B66FF] w-screen h-screen flex flex-col items-center justify-center'>
        
        <div className='flex justify-center items-center flex-col pb-6 gap-2'>
            <h1 className='text-4xl text-[#C5FFF8] font-poppins font-medium'>Welcome to My Diary</h1>
            <h2 className='text-2xl text-[#ffffff] font-poppins font-light'>Type about your story today</h2>
        </div>

        <form className='flex flex-col gap-4 w-[50%] items-center' onSubmit={submit} id='form'>
            <input type="date" className='p-4 rounded-md border-4 border-black text-xl w-full' name='Tanggal'/>
            <input type="text" placeholder='Mood' className='p-4 rounded-md border-4 border-black text-xl w-full' name='Mood'/>
            <textarea name="Message" id="" cols="30" rows="10" placeholder='Apa yang terjadi hari ini?' className='p-4 rounded-md border-4 border-black text-xl resize-none w-full'></textarea>
            <input className='w-[30%] h-10 bg-[#5FBDFF] font-poppins rounded-md font-medium text-white' type='submit'/>
        </form>
    </div>
  )
}
