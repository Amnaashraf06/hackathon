import React from 'react'
import Image from 'next/image'

const Essential = () => {
  return (
    <div>
        <h1 className='font-semibold mb-4'>The Essentials</h1>
      <div>
        <ul className='flex gap-3 pl-4 pr-4'>
            <li>
        <Image src={require("../../public/cloth.png")}
        alt=''
        width={440}
        height={540}
        />
        </li>
        <li>
        <Image src={require("../../public/shoe.png")}
        alt=''
        width={440}
        height={540}
        />
        </li>
        <li>
        <Image src={require("../../public/bag.png")}
        alt=''
        width={440}
        height={540}
        />
        </li>
      </ul>
      </div>
    </div>
  )
}

export default Essential
