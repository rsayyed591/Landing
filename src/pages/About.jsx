import React from 'react'
import { Element } from 'react-scroll'

const About = () => {
  return (
    <Element name="offering">
      <section className="w-full max-w-6xl mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">LIGHTBULB MOMENTS CONSULTING</h2>
        <p className="text-center mb-8 text-gray-600 text-sm md:text-base px-4">
          In one line, we help you transition to a higher level of success in your life. At Lightbulb Moments Consulting, we are firm believers in improvement. It is something that is within our reach, and it begins with a decision to 'improve'.
        </p>
        <p className="text-center mb-8 text-gray-600 text-sm md:text-base px-4">
          We help you make a decision through a validated process; and then work with you to your success.
        </p>
        <p className="text-center mb-16 text-gray-600 text-sm md:text-base px-4">
          So that, when you step out into the world, everyone notices the change first, before you do !
        </p>
      </section>
    </Element>
  )
}

export default About