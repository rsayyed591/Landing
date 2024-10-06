import Header from './pages/Header'
import Hero from './pages/Hero'
import About from './pages/About'
import Offering from './pages/Offering'
import Clients from './pages/Clients'
import Footer from './pages/Footer'

const App = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-grow flex flex-col justify-center items-center px-4 py-20 mt-20 md:py-8">
        <Header scrollToSection={scrollToSection} />
        <Hero scrollToSection={scrollToSection} />
      </div>
      <main className="flex-grow flex flex-col items-center w-full">
        <div className="w-full max-w-6xl px-4 py-20 md:py-8">
          <section id="about">
            <About />
          </section>
          <section id="offering">
            <Offering />
          </section>
          <section id="clients">
            <Clients />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App