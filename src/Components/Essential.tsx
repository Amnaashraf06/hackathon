// import React from 'react'
// import Image from 'next/image'

// const Essential = () => {
//   return (
//     <div>
//         <h1 className='font-semibold mb-4'>The Essentials</h1>
//       <div>
//         <ul className='flex gap-3 pl-4 pr-4'>
//             <li>
//         <Image src={require("../../public/cloth.png")}
//         alt=''
//         width={440}
//         height={540}
//         />
//         </li>
//         <li>
//         <Image src={require("../../public/shoe.png")}
//         alt=''
//         width={440}
//         height={540}
//         />
//         </li>
//         <li>
//         <Image src={require("../../public/bag.png")}
//         alt=''
//         width={440}
//         height={540}
//         />
//         </li>
//       </ul>
//       </div>
//     </div>
//   )
// }
// export default Essential

import React from 'react';
import Image from 'next/image';

const Essential = () => {
  return (
    <div className="py-8 px-4 md:px-10 lg:px-16 bg-gray-50">
      {/* Section Title */}
      <h1 className="text-2xl md:text-3xl font-semibold text-center mb-8">
        The Essentials
      </h1>

      {/* Images Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Item 1 */}
        <div className="flex justify-center">
          <Image
            src={require('../../public/cloth.png')}
            alt="Cloth"
            width={440}
            height={540}
            className="object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Item 2 */}
        <div className="flex justify-center">
          <Image
            src={require('../../public/shoe.png')}
            alt="Shoe"
            width={440}
            height={540}
            className="object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Item 3 */}
        <div className="flex justify-center">
          <Image
            src={require('../../public/bag.png')}
            alt="Bag"
            width={440}
            height={540}
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Essential;
