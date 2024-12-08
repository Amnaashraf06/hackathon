import React from 'react'
import Image from 'next/image'

const Miss = () => {
  return (
    <div>
        <h1 className='font-semibold mt-7 pl-7 mb-4'>Don't Miss</h1>
   <div>
   <Image className='mx-auto m-full'
        src={require("../../public/men.png")}
        alt=''
        width={1440}
        height={700}/>
   </div>
   <div className='justify-center items-center text-center ' >
        <h1 className='text-5xl font-semibold p-2 pt-10'>FLIGHT ESSENTIALS</h1>
        <p className='pt-4'>Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
        <div className='flex justify-center gap-3 pt-5'>
            <button className='rounded-3xl bg-black text-white p-2 pl-4 pr-4 mb-5'>Shop</button>
        </div>
      </div>
    </div>
  )
}

export default Miss
