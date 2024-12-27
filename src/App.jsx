
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/home/Header'
import Home from "./components/home/Home"
import Service from './components/Service/Service'
import Contact from './components/contact/Conatct'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Error from './Error/Error'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} /> {/* This will handle undefined routes */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
