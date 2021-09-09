import React from 'react';
import '../../App.css';
import CardItem from '../CardItem';
import '../Cards.css';



export default function ralph () {
  return (
      <div className='cards'>
        <h1> Ralph Lauren Products </h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='images/polo1.jpg'
                text='Pole Bear Ralph Lauren shirt '
                label='$150'
                path='/nike'
              />
              <CardItem
                src='images/polo2.jpg'
                text='Pole Bear Ralph Lauren Hoody'
                label='$100'
                path='/nike'
              />
              <CardItem
                src='images/polo3.jpg'
                text='Pole Bear Ralph Lauren Hoody'
                label='$800'
                path='/nike'
              />
            </ul>
            <ul className='cards__items'>

              <CardItem
                src='images/polo4.jpg'
                text='Pole Bear Ralph Lauren Sweater'
                label='$100 '
                path='/nike'
              />

              <CardItem
                src='images/polo5.jpg'
                text='Pole Bear Ralph Lauren Sweater'
                label='$100'
                path='/nike'
              />
              <CardItem
                src='images/polo6.jpg'
                text='Pole Bear Ralph Lauren Hoody'
                label='$100'
                path='/nike'
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }
