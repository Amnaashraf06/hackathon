import React from 'react'
import Image from 'next/image'

const Best = () => {
  return (
    <div>
      <h1 className=''>Best of Air Max</h1>
      <div>
      <ul>
  
      <li className='flex gap-4'>
    <div>
    <Image className=''
  src={require("../../public/Image (1).png")}
  alt=''
  width={441.36}
  height={441.36}
  />
  <div className='flex gap-56'>
  <ul>
  <li>Nike Air Max Pulse</li>
  <li>Women's Shoes</li>
  </ul>
  <ul>
  <li>₹ 13 995</li>
  </ul>
  </div>
  </div>
<div>
<Image
  src={require("../../public/Image (1).png")}
  alt=''
  width={441.36}
  height={441.36}
  />
  <div className='flex gap-56'>
    <ul>
  <li>Nike Air Max Pulse</li>
  <li>Men's Shoes</li>
  </ul>
  <ul>
  <li>₹ 13 995</li>
  </ul>
  </div>
</div>
<div>
<Image
  src={require("../../public/Image (2).png")}
  alt=''
  width={441.36}
  height={441.36}
  />
    <div className='flex gap-56'>
  <ul>
  <li>Nike Air Max 97 SE</li>
  <li>Men's Shoes</li>
  </ul>
  <ul>
  <li>₹ 16 995</li>
  </ul>
  </div>


</div>
  </li>
     </ul> 
      </div>
    </div>
  )
}

export default Best
