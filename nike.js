import React from 'react';
import '../../App.css';
import CardItem from '../CardItem';
import '../Cards.css';



export default function nike () {
  return (
      <div className='cards'>
        <h1> Nike Products </h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='images/nike1.jpg'
                text='Nike Air Vapormax 2020 Flyknit'
                label='$150'
                path='/nike'
              />
              <CardItem
                src='images/nike2.jpg'
                text='Nike Air Max 2090'
                label='$100'
                path='/nike'
              />
              <CardItem
                src='images/nike3.jpg'
                text='GG Rhyton sneaker'
                label='$100'
                path='/nike'
              />
            </ul>
            <ul className='cards__items'>

              <CardItem
                src='images/nike4.jpg'
                text='Nike TC 7900 '
                label='$100 '
                path='/nike'
              />

              <CardItem
                src='images/nike5.jpg'
                text='Nike Air Max 95'
                label='$100'
                path='/nike'
              />
              <CardItem
                src='images/nike6.jpg'
                text='Nike Air Zoom Spiridon'
                label='$100'
                path='/nike'
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }
