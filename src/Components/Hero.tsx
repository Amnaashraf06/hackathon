import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='justify-center items-center text-center '>
      <div className='bg-gray-100'>
        <h1 className='font-semibold'>Hello Nike App</h1>
        <p className='text-gray-400'>Download the app to access everything Nike. Get Your Great</p>
      </div>
      <div>
        <Image className='mx-auto m-full'
        src={require("../../public/Image.png")}
        alt=''
        width={1344}
        height={977}/>
      </div>
      <div >
        <h1 className='p-2 pt-10'>First Look</h1>
        <h1 className='text-5xl font-semibold p-2'>Nike Air Max Pulse</h1>
        <p className='pt-4'>Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse</p>
        <span>—designed to push you past your limits and help you go to the max.</span>
        <div className='flex justify-center gap-3 pt-5'>
            <button className='rounded-3xl bg-black text-white p-2 pl-4 pr-4'>Notify Me</button>
            <button className='rounded-3xl bg-black text-white p-2 pl-4 pr-4'>Shop Air Max</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
