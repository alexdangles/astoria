import React, { useState, useEffect } from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Home() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/sayhello')
      .then((res) => res.json())
      .then((data) => {
        setCurrentTime(data.time);
      });
  }, []);
  return (
    <>
      <HeroSection />
      <p>The current time is {currentTime}.</p>
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
