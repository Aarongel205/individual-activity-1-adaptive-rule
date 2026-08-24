import React from 'react'
import { products } from '../data/products.js';

const Sports = () => {
    const styles = 'w-30 h-50 shrink-0 border'

    const getSportsProduct = products.filter(product => {
      return product.category === 'sports';
    });

    const sportsProducts = getSportsProduct.map((product, index) => {
      return(
        <li className='border w-100' key={index}>{product.name}</li>
      )
    });
  return (
    <ul className='flex flex-row gap-2 overflow-x-auto w-full h-50 m-2'>
      {sportsProducts}
    </ul>
  )
}

export default Sports
