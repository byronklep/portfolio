import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" component={HomePage} />
      <Footer />
    </Router>
  )
}

export default App
