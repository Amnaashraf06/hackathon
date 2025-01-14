// import React from 'react'
// import Link from 'next/link'
// import { FaTwitter } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { CiLocationOn } from "react-icons/ci";

// const Footer = () => {
//   return (
//     <div className="bg-black text-white py-10 px-8 gap-5">
//          <div className='flex gap-4'> 
//           <div>
//             <h3 className="text-sm font-semibold mb-4">FIND A STORE</h3>
//             <ul className="space-y-2 text-sm">
//               <li><Link href="#" className="hover:underline">Become Link Member</Link></li>
//               <li><Link href="#" className="hover:underline">Sign Up for Email</Link></li>
//               <li><Link href="#" className="hover:underline">Student Discounts</Link></li>
//             </ul>
//           </div>
  
         
//           <div>
//             <h3 className="text-sm font-semibold mb-4">GET HELP</h3>
//             <ul className="space-y-2 text-sm">
//               <li><Link href="#" className="hover:underline">Order Status</Link></li>
//               <li><Link href="#" className="hover:underline">Delivery</Link></li>
//               <li><Link href="#" className="hover:underline">Returns</Link></li>
//               <li><Link href="#" className="hover:underline">Payment Options</Link></li>
//               <li><Link href="#" className="hover:underline">Contact Us on Nike.com</Link></li>
//               <li><Link href="#" className="hover:underline">Contact Us on All Other Inquiries</Link></li>
//             </ul>
//           </div>
  
        
//           <div>
//             <h3 className="text-sm font-semibold mb-4">ABOUT NIKE</h3>
//             <ul className="space-y-2 text-sm">
//               <li><Link href="#" className="hover:underline">News</Link></li>
//               <li><Link href="#" className="hover:underline">Careers</Link></li>
//               <li><Link href="#" className="hover:underline">Investors</Link></li>
//               <li><Link href="#" className="hover:underline">Sustainability</Link></li>
//             </ul>
//           </div>
  
          
//           <div className="flex justify-start lg:justify-end items-start gap-4 pl-[700px]">
//             <FaTwitter className="text-lg cursor-pointer hover:text-gray-400" />
//             <FaFacebook className="text-lg cursor-pointer hover:text-gray-400" />
//             <FaYoutube className="text-lg cursor-pointer hover:text-gray-400" />
//             <FaInstagram className="text-lg cursor-pointer hover:text-gray-400" />
//           </div>
//         </div>
  
//         <div className="mt-8 flex flex-wrap justify-between items-center text-xs text-gray-400">
         
//           <div className="flex mb-4 md:mb-0 gap-2">
//           <CiLocationOn />
//             <p>India</p>
//             <p>© 2023 Nike, Inc. All Rights Reserved</p>
//           </div>
  
          
//           <div className="flex flex-wrap gap-4">
//             <Link href="#" className="hover:underline">Guides</Link>
//             <Link href="#" className="hover:underline">Terms of Sale</Link>
//             <Link href="#" className="hover:underline">Terms of Use</Link>
//             <Link href="#" className="hover:underline">Nike Privacy Policy</Link>
//           </div>
//         </div>
//       </div>
//   )
// }

// export default Footer



import React from 'react'
import Link from 'next/link'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="bg-black text-white py-10 px-8">
      {/* Main Content - Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* FIND A STORE */}
        <div>
          <h3 className="text-sm font-semibold mb-4">FIND A STORE</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:underline">Become Link Member</Link></li>
            <li><Link href="#" className="hover:underline">Sign Up for Email</Link></li>
            <li><Link href="#" className="hover:underline">Student Discounts</Link></li>
          </ul>
        </div>

        {/* GET HELP */}
        <div>
          <h3 className="text-sm font-semibold mb-4">GET HELP</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:underline">Order Status</Link></li>
            <li><Link href="#" className="hover:underline">Delivery</Link></li>
            <li><Link href="#" className="hover:underline">Returns</Link></li>
            <li><Link href="#" className="hover:underline">Payment Options</Link></li>
            <li><Link href="#" className="hover:underline">Contact Us on Nike.com</Link></li>
            <li><Link href="#" className="hover:underline">Contact Us on All Other Inquiries</Link></li>
          </ul>
        </div>

        {/* ABOUT NIKE */}
        <div>
          <h3 className="text-sm font-semibold mb-4">ABOUT NIKE</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:underline">News</Link></li>
            <li><Link href="#" className="hover:underline">Careers</Link></li>
            <li><Link href="#" className="hover:underline">Investors</Link></li>
            <li><Link href="#" className="hover:underline">Sustainability</Link></li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-start lg:justify-end items-start gap-4 mt-4 sm:mt-0">
          <FaTwitter className="text-lg cursor-pointer hover:text-gray-400" />
          <FaFacebook className="text-lg cursor-pointer hover:text-gray-400" />
          <FaYoutube className="text-lg cursor-pointer hover:text-gray-400" />
          <FaInstagram className="text-lg cursor-pointer hover:text-gray-400" />
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-8 flex flex-wrap justify-between items-center text-xs text-gray-400">
        {/* Location and Copyright */}
        <div className="flex mb-4 md:mb-0 gap-2">
          <CiLocationOn />
          <p>India</p>
          <p>© 2023 Nike, Inc. All Rights Reserved</p>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap gap-4">
          <Link href="#" className="hover:underline">Guides</Link>
          <Link href="#" className="hover:underline">Terms of Sale</Link>
          <Link href="#" className="hover:underline">Terms of Use</Link>
          <Link href="#" className="hover:underline">Nike Privacy Policy</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
