import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home'
import About from './pages/about/about'
import Contact from './pages/contact/contact'
import Header from './components/Navbar/header'
import Footer from './components/footer/footer'
import DataAnalytics from './pages/data_analytics/data_analytics';
import FrontEnd from './pages/front-end/front-end';
import './App.css'


function App() {
// created routes for the different pages

  return (
    <Router>
      <Header />
      {/* Wrap Route elements in a Routes component */}
      <main className='container'>
      <Routes>
        {/* Define routes using the Route component to render different page components at different paths */}
        {/* Define a default route that will render the Home component */}
        <Route path="/" element={<Home />} />
        <Route path="/dataanalytic" element={<DataAnalytics />} />
        <Route path="/frontend" element={<FrontEnd />} />
        <Route path="/about" element={<About />} />
        {/* Define a route that will have descendant routes */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App
