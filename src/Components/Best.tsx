// import React from 'react'
// import Image from 'next/image'

// const Best = () => {
//   return (
//     <div>
//       <h1 className=''>Best of Air Max</h1>
//       <div>
//       <ul>
  
//       <li className='flex gap-4'>
//     <div>
//     <Image className=''
//   src={require("../../public/Image (1).png")}
//   alt=''
//   width={441.36}
//   height={441.36}
//   />
//   <div className='flex gap-56'>
//   <ul>
//   <li>Nike Air Max Pulse</li>
//   <li>Women's Shoes</li>
//   </ul>
//   <ul>
//   <li>₹ 13 995</li>
//   </ul>
//   </div>
//   </div>
// <div>
// <Image
//   src={require("../../public/Image (1).png")}
//   alt=''
//   width={441.36}
//   height={441.36}
//   />
//   <div className='flex gap-56'>
//     <ul>
//   <li>Nike Air Max Pulse</li>
//   <li>Men's Shoes</li>
//   </ul>
//   <ul>
//   <li>₹ 13 995</li>
//   </ul>
//   </div>
// </div>
// <div>
// <Image
//   src={require("../../public/Image (2).png")}
//   alt=''
//   width={441.36}
//   height={441.36}
//   />
//     <div className='flex gap-56'>
//   <ul>
//   <li>Nike Air Max 97 SE</li>
//   <li>Men's Shoes</li>
//   </ul>
//   <ul>
//   <li>₹ 16 995</li>
//   </ul>
//   </div>


// </div>
//   </li>
//      </ul> 
//       </div>
//     </div>
//   )
// }
// export default Best

import React from 'react';
import Image from 'next/image';

const Best = () => {
  // Product data
  const products = [
    {
      id: 1,
      image: '/Image (1).png',
      name: 'Nike Air Max Pulse',
      category: "Women's Shoes",
      price: '₹ 13 995',
    },
    {
      id: 2,
      image: '/Image (1).png',
      name: 'Nike Air Max Pulse',
      category: "Men's Shoes",
      price: '₹ 13 995',
    },
    {
      id: 3,
      image: '/Image (2).png',
      name: 'Nike Air Max 97 SE',
      category: "Men's Shoes",
      price: '₹ 16 995',
    },
  ];

  return (
    <div className="py-8 px-4 md:px-10 lg:px-16 bg-gray-50">
      {/* Section Title */}
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-12">
        Best of Air Max
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            {/* Product Image */}
            <Image
              src={product.image}
              alt={product.name}
              width={441}
              height={441}
              className="object-cover w-full"
            />

            {/* Product Details */}
            <div className="p-4 flex flex-col justify-between">
              <div>
                <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                  {product.name}
                </h2>
                <p className="text-gray-600">{product.category}</p>
              </div>
              <p className="text-lg md:text-xl font-bold mt-4 text-gray-900">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Best;


