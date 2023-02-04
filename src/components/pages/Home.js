import React, { useState, useEffect } from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Home() {
  const [utime, callssh] = useState(0);

  useEffect(() => {
    fetch('/sayhello')
      .then((res) => res.json())
      .then((data) => {
        callssh(data.utime);
      });
  }, []);
  return (
    <>
      <HeroSection />
      <p>{utime}</p>
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
