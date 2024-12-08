import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoSearchOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Header = () => {
  return (
    <div>
      <header className=''>
    <div className="bg-gray-100 flex justify-between items-center pl-10 px-6 py-2 md:text-[11px] sm:text-[9px] text-[8px] font-medium text-gray-500">
      <Image src={require("../../../public/logo (1).png")} alt={''} width={24} height={24}/>
      
      <div className="flex md:gap-4 sm:gap-3 gap-2">
        <Link href="#" className="hover:text-gray-800">Find Link Store</Link>
        |
        <Link href="#" className="hover:text-gray-800">Help</Link>
        |
        <Link href="#" className="hover:text-gray-800">Join Us</Link>
        |
        <Link href="#" className="hover:text-gray-800">Sign In</Link>
      </div>
    </div>

    <div className="flex flex-wrap justify-between items-center px-6 py-4">
      <div className="flex items-center">
        <Image
          src={require("../../../public/logo (2).png")}
          alt="Nike Logo"
          className="md:w-[78px] sm:w-[60px] w-[30px]"
        />
      </div>
      <nav className="flex gap-4 md:gap-6 text-gray-700 font-medium pl-10 md:text-[16px] sm:text-[14px] text-[10px] ">
        <Link href="#" className="hover:text-black whitespace-nowrap">New & Featured</Link>
        <Link href="#" className="hover:text-black whitespace-nowrap">Men</Link>
        <Link href="#" className="hover:text-black whitespace-nowrap">Women</Link>
        <Link href="#" className="hover:text-black whitespace-nowrap">Kids</Link>
        <Link href="#" className="hover:text-black whitespace-nowrap">Sale</Link>
        <Link href="#" className="hover:text-black whitespace-nowrap">SNKRS</Link>
      </nav>
      <div className="flex items-center gap-4 mt-4 md:mt-0">
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-full pl-10 pr-10 py-2 text-sm focus:outline-none"/>
          <IoSearchOutline className="absolute left-3 top-2.5 text-gray-500" />
        </div>
        <IoMdHeartEmpty className="text-gray-700 md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px]  cursor-pointer hover:text-black" />
        <HiOutlineShoppingBag className="text-gray-700 md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] cursor-pointer hover:text-black" />
      </div>
    </div>
    <div className="block md:hidden px-6 mt-2">
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none w-full"
        />
        <IoSearchOutline className="absolute right-3 top-2.5 text-gray-500" />
      </div> 
    </div>
  </header>
    </div>
  )
}
export default Header