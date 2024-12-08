import React from 'react'
import Image from 'next/image'

const Gear = () => {
  return (
    <div>
    <p className='font-semibold pl-10'>Gear Up</p>


    <div>
        <ul className='flex gap-2 ml-[550px] '>
        <li className='gap-10 pt-4'><h1>Shop Men's</h1></li>
        <button className="p-2 bg-gray-100 rounded-full flex items-center justify-center ml-2 space-x-2">
                ←
              </button>
              <button className="p-2 bg-gray-300 rounded-full flex items-center justify-center ml-2">
                →
              </button>
    
    <li className='pl-20 mt-3 space-x-2'>Shop women's</li>
    <button className="p-2 bg-gray-100 rounded-full flex items-center justify-center ml-2 space-x-2">
                ←
              </button>
              <button className="p-2 bg-gray-300 rounded-full flex items-center justify-center ml-2">
                →
              </button>
    </ul>
     
      <ul className='flex gap-9 ml-20'>

          <li>
              <Image
              src={require("../../public/boy.png")}
              alt=''
              width={300}
              height={300}/>
              <div className='flex'>
              <h1 className='font-semibold'>Nike Dri-FIT ADV TechKnit Ultra</h1>
              <h2 className='font-semibold'>₹ 3 895</h2></div>
              <p>Men's Short-Sleeve Running Top</p>
          </li>

          <li>
              <Image
              src={require("../../public/boy (1).png")}
              alt=''
              width={300}
              height={300}/>
              <div className='flex'>
              <h1 className='font-semibold'>Nike Dri-FIT Challenger</h1>
               <h2 className='font-semibold'>₹ 2 495</h2></div>
              <p>Men's 18cm (approx.) 2-in-1 Versatile Shorts</p>
          </li>

          <li>
              <Image
              src={require("../../public/boy (2).png")}
              alt=''
              width={300}
              height={300}/>
              <div className='flex'>
              <h1 className='font-semibold'>Nike Dri-FIT ADV Run Division</h1>
              <h2 className='font-semibold'>₹ 5 295</h2></div>
              <p className="">$Women's Long-Sleeve Running Top</p>
              </li>

              <li>
              <Image
              src={require("../../public/boy (3).png")}
              alt=''
              width={300}
              height={300}/>
              <div className='flex'>
              <h1 className='font-semibold'>Nike Fast</h1>
              <h1 className='font-semibold'>₹ 3 795</h1></div>
              <p>Women's Mid-Rise 7/8 Running Leggings with Pockets</p>
          </li>
            
      </ul>
    </div>
  </div>
  )
}

export default Gear

