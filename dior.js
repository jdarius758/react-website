import React from 'react';
import '../../App.css';
import CardItem from '../CardItem';
import '../Cards.css';


export default function dior()  {
  return (<h1 className='dior'> Dior   </h1>,

  <div className='cards'>
    <h1> CheckOut our Dior Products </h1>
    <div className='cards__container'>
      <div className='cards__wrapper'>
        <ul className='cards__items'>
          <CardItem
            src='images/dior3.jpg'
            text='Dior Leather White High '
            label='$350'
            path='/services'
          />
          <CardItem
            src='images/dior4.jpg'
            text='Dior B22 '
            label='$400'
            path='/products'
          />
          <CardItem
            src='images/dior5.jpg'
            text='Dior CD1 '
            label='$600'
            path='/services'
          />
        </ul>
        <ul className='cards__items'>

          <CardItem
            src='images/dior6.jpg'
            text='DIOR Sneaker B24'
            label='$600 '
            path='/services'
          />

          <CardItem
            src='images/dior7.jpg'
            text='Air Dior Jordan 1 OG High'
            label='$700'
            path='/products'
          />
          <CardItem
            src='images/dior8.jpg'
            text='Dior x Shawn Stussy'
            label='$700 USD'
            path='/sign-up'
          />
        </ul>
      </div>
    </div>
  </div>
);
}
