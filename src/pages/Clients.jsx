import React from 'react'
import { Element } from 'react-scroll'

const Clients = () => {
  return (
    <Element name="clients">
      <section className="w-full max-w-6xl mb-16 bg-blue-600 text-white p-6 md:p-8 rounded-xl">
        <h3 className="text-xl md:text-2xl font-semibold text-center mb-4">We help our clients strengthen their talent pool</h3>
        <div className="flex justify-center">
          <button className="bg-white text-blue-600 px-4 md:px-6 py-2 rounded-full hover:bg-gray-100 transition duration-300 text-sm md:text-base">
            Client Speaks
          </button>
        </div>
        <p className="text-center mt-4 text-sm md:text-base">Dark is not opposite of light. It is just the absence of light</p>
      </section>
    </Element>
  )
}

export default Clients