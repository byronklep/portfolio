import Banner from './components/Banner'
import SimpleSlider from './components/SimpleSlider'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Services from './components/Services'

const Home = () => {
  return (
    <>
      <Banner />
      <SimpleSlider />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  )
}

export default Home
