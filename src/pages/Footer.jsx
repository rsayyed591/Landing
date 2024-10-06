import React from 'react'
import { Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="w-full max-w-6xl text-center text-gray-600 mb-8 px-4">
      <p className="mb-4 text-sm md:text-base">
        "Partner with us to turn your challenges into opportunities and your ideas into success. Let's build something extraordinary."
      </p>
      <div className="flex flex-col md:flex-row justify-between text-sm md:text-base">
        <div className="mb-4 md:mb-0">
          <h4 className="font-semibold mb-2">LightBulb Moments</h4>
          <p>In our firm, we treat every conversation as a potential lightbulb moment. If you are looking for something on personal / professional development for self or for your firm, and you need a sounding board, do call us on +91 9987589084. As they say, I took the road less travelled and that made all the difference.</p>
        </div>
        <div className="mb-4 md:mb-0">
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Our Offerings</li>
            <li>Clients Speaks</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p>Mob: + 91 99875 89084</p>
          <p>Email: kg@lightbulb-moments.com</p>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-block mt-2">
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer