import { ChevronRight, ArrowDown } from 'lucide-react'

const Hero = ({ scrollToSection }) => {
  return (
      <section className="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-3xl w-full max-w-6xl h-[80vh] relative overflow-hidden mb-16">
        <div className="absolute left-0 top-0 w-1/2 h-full">
          <img 
            src="/placeholder.svg?height=600&width=600" 
            alt="Abstract metallic shape" 
            className="w-full h-full object-cover object-left"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
          <h2 className="text-4xl md:text-6xl font-normal text-center mb-4 leading-tight italic px-4">
            New thinking,<br />break through results
          </h2>
        </div>
        <div className="absolute bottom-0 right-0 md:right-8 bg-white text-gray-800 p-4 md:p-6 rounded-t-xl max-w-xs z-20">
          <p className="mb-4 text-xs md:text-sm">Let's take a quick tour to help you explore our services and find the best solutions for your needs</p>
          <button className="bg-gray-200 text-gray-800 px-3 py-1 md:px-4 md:py-2 rounded-full flex items-center text-xs md:text-sm hover:bg-gray-300 transition duration-300">
            Get Started now <ChevronRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
          </button>
        </div>
        <div className="absolute bottom-0 left-0 md:left-8 text-white flex flex-col items-center bg-blue-600 rounded-t-xl p-2 md:p-4 z-20">
          <span className="text-xs md:text-sm mb-1 md:mb-2">Scroll down</span>
          <ArrowDown 
          className="h-3 w-3 md:h-4 md:w-4 cursor-pointer" 
          onClick={() => scrollToSection('about')}
        />
        </div>
      </section>
  )
}


export default Hero
