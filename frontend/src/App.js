import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ProjectsPage from './pages/ProjectsPage'
import ServicesPage from './pages/ServicesPage'
import Header from './components/Header'
import Footer from './components/Footer'
import ProjectPage from './pages/ProjectPage'

function App() {
  return (
    <Router>
      <Header />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/projects/:id" component={ProjectPage} exact />
      <Route path="/projects" component={ProjectsPage} exact />
      <Route path="/services" component={ServicesPage} />
      <Route path="/" component={HomePage} exact />
      <Footer />
    </Router>
  )
}

export default App
