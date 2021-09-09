import React from 'react';
import '../../App.css';
import CardItem from '../CardItem';
import '../Cards.css';





export default function gucci() {
  return (<h1 className='gucci'>Gucci</h1>,


    <div className='cards'>
      <h1> CheckOut our Gucci Products </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/gucci1.jpg'
              text='Disney x Gucci Donald Duck'
              label='$850'
              path='/services'
            />
            <CardItem
              src='images/gucci2.jpg'
              text='think/thank print Rhyton sneaker'
              label='$800'
              path='/products'
            />
            <CardItem
              src='images/gucci3.jpg'
              text='GG Rhyton sneaker'
              label='$800'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>

            <CardItem
              src='images/gucci4.jpg'
              text='GG Rhyton sneaker'
              label='$900 '
              path='/services'
            />

            <CardItem
              src='images/gucci5.jpg'
              text='Rhyton sneaker with mouth print'
              label='$900'
              path='/products'
            />
            <CardItem
              src='images/gucci6.jpg'
              text='Rhyton Gucci print leather sneaker'
              label='$900 USD'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
