import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './Components/Loader';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (

    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Home />
          <Services />
          <About />
          <Portfolio />
          <Contact />
        </>
      )}
    </>
  )
}

export default App