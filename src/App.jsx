import { useEffect, useState } from 'react'
import { ChevronRight, ArrowDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link, Element, animateScroll as scroll } from 'react-scroll'

const AnimatedCounter = ({ end, duration }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime
    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      const percentage = Math.min(progress / duration, 1)
      setCount(Math.floor(end * percentage))
      if (percentage < 1) {
        requestAnimationFrame(animateCount)
      }
    }
    requestAnimationFrame(animateCount)
  }, [end, duration])

  return <span>{count}</span>
}

const App = () => {
  const scrollToBottom = () => {
    scroll.scrollToBottom()
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
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

      <main className="flex-grow flex flex-col justify-center items-center px-4 py-20 md:py-8">
          <section className="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-3xl w-full max-w-6xl h-[80vh] relative overflow-hidden my-16">
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
            <div className="absolute bottom-1 right-0 md:right-8 bg-white text-gray-800 p-4 md:p-6 rounded-t-xl max-w-xs z-20">
              <p className="mb-4 text-xs md:text-sm">Let&apos;s take a quick tour to help you explore our services and find the best solutions for your needs</p>
              <button className="bg-gray-200 text-gray-800 px-3 py-1 md:px-4 md:py-2 rounded-full flex items-center text-xs md:text-sm hover:bg-gray-300 transition duration-300">
                Get Started now <ChevronRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
              </button>
            </div>
            <div className="absolute bottom-0 left-0 md:left-8 text-white flex flex-col items-center bg-blue-600 rounded-t-xl p-2 md:p-4 z-20">
              <span className="text-xs md:text-sm mb-1 md:mb-2">Scroll down</span>
              <ArrowDown className="h-3 w-3 md:h-4 md:w-4" onClick={scrollToBottom} cursor="pointer" />
            </div>
          </section>

        <Element name="offering">
          <section className="w-full max-w-6xl mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">LIGHTBULB MOMENTS CONSULTING</h2>
            <p className="text-center mb-8 text-gray-600 text-sm md:text-base px-4">
              In each of us, there is a spark of inspiration waiting to be lit. At Lightbulb Moments Consulting, we are firm believers in improvement. It is something that is within our reach, and it begins with a decision to 'improve'.
            </p>
            <p className="text-center mb-8 text-gray-600 text-sm md:text-base px-4">
              We help you make a positive change through a simplified process, and then work with you for your success.
            </p>
            <p className="text-center mb-16 text-gray-600 text-sm md:text-base px-4">
              So that, when you step out into the world, everyone notices the change first, before you do !
            </p>

            <h3 className="text-xl md:text-2xl font-semibold text-center mb-8 text-gray-800 px-4">
              Success is important - whether you are leading self or your team.
            </h3>
            <p className="text-center mb-16 text-gray-600 text-sm md:text-base px-4">
              At Lightbulb Moments Consulting, we promise and deliver success beyond success.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16 px-4">
              <motion.div 
                className="bg-blue-600 text-white p-4 md:p-6 rounded-xl text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-2xl md:text-4xl font-bold mb-2">
                  <AnimatedCounter end={80} duration={2000} />+
                </div>
                <div className="text-sm md:text-base">Clients</div>
              </motion.div>
              <motion.div 
                className="bg-blue-600 text-white p-4 md:p-6 rounded-xl text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-2xl md:text-4xl font-bold mb-2">
                  <AnimatedCounter end={15} duration={2000} />+
                </div>
                <div className="text-sm md:text-base">Countries</div>
              </motion.div>
              <motion.div 
                className="bg-blue-600 text-white p-4 md:p-6 rounded-xl text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="text-2xl md:text-4xl font-bold mb-2">
                  <AnimatedCounter end={10} duration={2000} />+
                </div>
                <div className="text-sm md:text-base">Senior Consultants</div>
              </motion.div>
              <motion.div 
                className="bg-blue-600 text-white p-4 md:p-6 rounded-xl text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="text-2xl md:text-4xl font-bold mb-2">
                  <AnimatedCounter end={100} duration={2000} />%
                </div>
                <div className="text-sm md:text-base">Client-team referrals</div>
              </motion.div>
            </div>

            <div className="mb-16 px-4">
              <h3 className="text-xl md:text-2xl font-semibold text-center mb-4">What Would Success Look Like for You?</h3>
              <p className="text-center mb-8 text-gray-600 text-sm md:text-base">Share your vision, and let&apos;s explore how we can make it happen.</p>
              <form className="flex justify-center">
                <input 
                  type="text" 
                  placeholder="Enter Your Boldest Idea!" 
                  className="px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full md:w-auto"
                />
                <button 
                  type="submit" 
                  className="bg-blue-600 text-white px-4 md:px-6 py-2 rounded-r-full hover:bg-blue-700 transition duration-300 text-sm md:text-base"
                >
                  Submit
                </button>
              </form>
            </div>
          </section>
        </Element>

        <Element name="clients">
          <section className="w-full max-w-6xl mb-16 bg-blue-600 text-white p-6 md:p-8 rounded-xl">
            <h3 className="text-xl md:text-2xl font-semibold text-center mb-4">We help our clients strengthen their talent pool</h3>
            <div className="flex justify-center">
              <button className="bg-white text-blue-600 px-4 md:px-6 py-2 rounded-full hover:bg-gray-100 transition duration-300 text-sm md:text-base">
                Client Speaks
              </button>
            </div>
            <p className="text-center mt-4 text-sm md:text-base">Dark is not opposite of light, it is just the absence of light</p>
          </section>
        </Element>

        <footer className="w-full max-w-6xl text-center text-gray-600 mb-8 px-4">
          <p className="mb-4 text-sm md:text-base">
          &quot;Partner with us to turn your challenges into opportunities and your ideas into success. Let&apos;s build something extraordinary.&quot;
          </p>
          <div className="flex flex-col md:flex-row justify-between text-sm md:text-base">
            <div className="mb-4 md:mb-0">
              <h4 className="font-semibold mb-2">Lightbulb Moments</h4>
              <p>Some footer text here</p>
            </div>
            <div className="mb-4 md:mb-0">
              <h4 className="font-semibold mb-2">Quick Links</h4>
              <ul>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Contact</h4>
              <p>Email: info@lightbulbmoments.com</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App