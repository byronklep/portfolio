import Banner from './components/Banner'
import SimpleSlider from './components/SimpleSlider'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Services from './components/Services'
import Banner2 from './components/Banner2'
import Test from './components/Test'
import ProjGridHome from './components/ProjGridHome'

const Home = () => {
  return (
    <>
      <Banner />
      <SimpleSlider />
      <Services />
      <Banner2 />
      {/* <Projects /> */}
      <ProjGridHome />
      <Test />
      <Contact />
    </>
  )
}

export default Home
