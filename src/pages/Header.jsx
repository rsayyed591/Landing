import React from 'react'
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <header className="py-4 px-4 md:px-8 fixed w-full bg-white z-10">
      <nav className="flex justify-end space-x-4 md:space-x-12 items-center">
        <Link to="about" smooth={true} duration={500} className="text-gray-800 hover:text-blue-600 cursor-pointer text-sm md:text-base">About Us</Link>
        <Link to="offering" smooth={true} duration={500} className="text-gray-800 hover:text-blue-600 cursor-pointer text-sm md:text-base">Our Offering</Link>
        <Link to="clients" smooth={true} duration={500} className="text-gray-800 hover:text-blue-600 cursor-pointer text-sm md:text-base">Client Speaks</Link>
        <button className="bg-blue-600 text-white px-4 py-1 md:px-6 md:py-2 rounded-full hover:bg-blue-700 transition duration-300 text-sm md:text-base">
          Client Login
        </button>
      </nav>
    </header>
  )
}

export default Header