// import React from 'react'
// import Image from 'next/image'

// const Feature = () => {
//   return (
//     <div>
//       <div className='bg-gray-100'>
//         <h1 className='font-semibold mt-10 pb-5'>Featured</h1>
//       </div>
//       <div>
//         <Image className='mx-auto m-full'
//         src={require("../../public/imageboy.png")}
//         alt=''
//         width={1344}
//         height={977}/>
//       </div>
//       <div className='justify-center items-center text-center ' >
//         <h1 className='text-5xl font-semibold p-2 pt-10'>STEP INTO WHAT FEELS GOOD</h1>
//         <p className='pt-4'>Cause everyone should know the feeling of running in that perfect pair.</p>
//         <div className='flex justify-center gap-3 pt-5'>
//             <button className='rounded-3xl bg-black text-white p-2 pl-4 pr-4'>Find Your Shop</button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Feature

import React from 'react';
import Image from 'next/image';

const Feature = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className="bg-gray-100 py-10">
        <h1 className="font-semibold text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Featured
        </h1>
      </div>

      {/* Image Section */}
      <div className="px-4">
        <Image
          className="mx-auto"
          src={require('../../public/imageboy.png')}
          alt="Featured Image"
          width={1344}
          height={977}
          layout="responsive"
        />
      </div>

      {/* Text and Button Section */}
      <div className="text-center px-4 md:px-16 py-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold p-2">
          STEP INTO WHAT FEELS GOOD
        </h1>
        <p className="pt-4 text-lg sm:text-xl md:text-2xl">
          Cause everyone should know the feeling of running in that perfect pair.
        </p>

        {/* Button Section */}
        <div className="flex justify-center gap-3 pt-5">
          <button className="rounded-3xl bg-black text-white py-2 px-6 text-lg sm:text-xl md:text-2xl">
            Find Your Shop
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
