import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out my epic travel destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden white sands at Hyams Beach'
              label='Beaches'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Stand upon the old squares of Montreal'
              label='City'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Snowboard across the snowy mountain peaks'
              label='Sports'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience crystal clear blue waters and glaciers'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Australian Outback on a guided camel tour'
              label='Wild'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
