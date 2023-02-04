import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>Timbuktu</h1>
      <p>Testing for Alex</p>
      <div className='hero-btns'>
        <Button
          to='/sign-up'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Hi there
        </Button>
        <Button
          to='/login'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          See videos <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
