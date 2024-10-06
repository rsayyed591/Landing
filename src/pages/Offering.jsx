import React from 'react'
import { motion } from 'framer-motion'
import AnimatedCounter from '../components/AnimatedCounter'

const Offering = () => {
  return (
    <section className="w-full max-w-6xl mb-16">
      <h3 className="text-xl md:text-2xl font-semibold text-center mb-8 text-gray-800 px-4">
        Success is important - whether you are leading self or your team.
      </h3>
      <p className="text-center mb-16 text-gray-600 text-sm md:text-base px-4">
        At Lightbulb Moments Consulting, we practise and preach Success beyond success.
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
          <div className="text-2xl md:text-4xl font-bold mb-2">100%</div>
          <div className="text-sm md:text-base">Our clients have been referrals</div>
        </motion.div>
      </div>

      <div className="mb-16 px-4 py-16 bg-blue-50 rounded-3xl relative overflow-hidden">
        <div className="absolute left-0 top-0 w-1/3">
          <img 
            src="/placeholder.svg?height=300&width=300" 
            alt="Abstract metallic shape" 
            className="w-full h-full object-cover object-left opacity-50"
          />
        </div>
        <div className="relative z-10">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-800">What Would Success Look Like for You?</h3>
          <p className="text-center mb-8 text-gray-600 text-lg md:text-xl">Share your vision, and let's explore how we can make it happen.</p>
          <form className="flex justify-center">
            <input 
              type="text" 
              placeholder="Enter Your Boldest Idea!" 
              className="px-6 py-3 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full md:w-96 text-lg"
            />
            <button 
              type="submit" 
              className="bg-black text-white px-8 py-3 rounded-r-full hover:bg-gray-800 transition duration-300 text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Offering