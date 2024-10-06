import { animateScroll as scroll } from 'react-scroll'
import Header from './pages/Header'
import Hero from './pages/Hero'
import About from './pages/About'
import Offering from './pages/Offering'
import Clients from './pages/Clients'
import Footer from './pages/Footer'

const App = () => {
  const scrollToBottom = () => {
    scroll.scrollToBottom()
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col justify-center items-center px-4 py-20 mt-20 md:py-8">
        <Hero scrollToBottom={scrollToBottom} />
        <About />
        <Offering />
        <Clients />
        <Footer />
      </main>
    </div>
  )
}

export default App