// import React from 'react'


// const Icon = () => {
//   return (
//     <div className='flex justify-evenly gap-3 mt-6 mb-4'>
//     <div>
//     <h2 className=' font-[700]text-[24px] font-semibold mb-4'>Icons</h2>
//     <p className='text-[16px] font-normal'>Air Force 1</p>
//     <p className='text-[16px] font-normal '>Huarache</p>
//     <p className='text-[16px] font-normal '>Air Max 90</p>
//     <p className='text-[16px] font-normal '>Air Max 95</p>
    

// </div>

// <div>
//     <h2 className='text-[20px]font-[500] mb-4 font-semibold'>Shoes</h2>
//     <p className='text-[16px] font-normal '>All Shoes</p>
//     <p className='text-[16px] font-normal'>Custom Shoes</p>
//     <p className='text-[16px] font-normal'>Jordan Shoes</p>
//     <p className='text-[16px] font-normal'>Running Shoes</p>
// </div>

// <div>
// <h2 className=' text-[20px]font-[500] mb-4 font font-semibold'>Clothing</h2>
// <p className='text-[16px] font-normal'>All Clothing</p>
// <p className=' text-[16px] font-normal'>Modest Wear</p>
// <p className=' text-[16px] font-normal'>Hoodies & Pullovers </p>
// <p className=' text-[16px] font-normal'>Shirts & Tops</p>
// </div>

// <div>
// <h2 className='text-[20px] mb-4 font-semibold'>Kids'</h2>
// <p className=' text-[16px] font-normal'>Infant & Toddlers Shoes</p>
// <p className='ext-[16px] font-normal'>Kids' Shoes</p>
// <p className=' text-[16px] font-normal'>Kids' Jordan Shoes</p>
// <p className=' text-[16px] font-normal '>Kids' Basketball Shoes</p>
//    </div>
//     </div>
//   )
// }

// export default Icon

import React from 'react'

const Icon = () => {
  return (
    <div className="flex flex-col md:flex-row justify-evenly gap-6 mt-6 mb-6 px-4 md:px-10">
      <div className="w-full md:w-auto">
        <h2 className="text-[24px] font-semibold mb-4">Icons</h2>
        <p className="text-[16px] font-normal">Air Force 1</p>
        <p className="text-[16px] font-normal">Huarache</p>
        <p className="text-[16px] font-normal">Air Max 90</p>
        <p className="text-[16px] font-normal">Air Max 95</p>
      </div>

      <div className="w-full md:w-auto">
        <h2 className="text-[20px] font-medium mb-4">Shoes</h2>
        <p className="text-[16px] font-normal">All Shoes</p>
        <p className="text-[16px] font-normal">Custom Shoes</p>
        <p className="text-[16px] font-normal">Jordan Shoes</p>
        <p className="text-[16px] font-normal">Running Shoes</p>
      </div>

      <div className="w-full md:w-auto">
        <h2 className="text-[20px] font-medium mb-4">Clothing</h2>
        <p className="text-[16px] font-normal">All Clothing</p>
        <p className="text-[16px] font-normal">Modest Wear</p>
        <p className="text-[16px] font-normal">Hoodies & Pullovers</p>
        <p className="text-[16px] font-normal">Shirts & Tops</p>
      </div>

      <div className="w-full md:w-auto">
        <h2 className="text-[20px] font-semibold mb-4">Kids'</h2>
        <p className="text-[16px] font-normal">Infant & Toddlers Shoes</p>
        <p className="text-[16px] font-normal">Kids' Shoes</p>
        <p className="text-[16px] font-normal">Kids' Jordan Shoes</p>
        <p className="text-[16px] font-normal">Kids' Basketball Shoes</p>
      </div>
    </div>
  )
}

export default Icon

