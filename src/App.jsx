import BackgroundDecor from './components/BackgroundDecor.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Portfolio from './components/Portfolio.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Footer, { FloatingContact } from './components/Footer.jsx'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:end-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-gold-400 focus:px-5 focus:py-3 focus:font-bold focus:text-night-950"
      >
        تخطَّ إلى المحتوى
      </a>

      <BackgroundDecor />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <FloatingContact />
    </div>
  )
}