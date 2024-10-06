const Header = ({ scrollToSection }) => {
  return (
    <header className="absolute top-0 left-0 right-0 py-4 px-8 z-20">
      <nav className="flex justify-end space-x-8 items-center">
        <button onClick={() => scrollToSection('about')} className="text-gray-800 hover:text-blue-600 cursor-pointer text-sm md:text-base">About Us</button>
        <button onClick={() => scrollToSection('offering')} className="text-gray-800 hover:text-blue-600 cursor-pointer text-sm md:text-base">Our Offering</button>
        <button onClick={() => scrollToSection('clients')} className="text-gray-800 hover:text-blue-600 cursor-pointer text-sm md:text-base">Client Speaks</button>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
          Client Login
        </button>
      </nav>
    </header>
  )
}

export default Header