import React from 'react'
import { useState } from 'react'
import { products } from '../data/products.js'

const Cooking = () => {
    const styles = 'w-30 h-50 shrink-0 border border-amber-500'

    const getCookingProducts = products.filter(product => {
      return product.category === 'cooking';
    });

    const cookingProducts = getCookingProducts.map((product, index) => {
        return(
            <li className='border' key={index}>{product.name}</li>
        )
    });
  return (
    <ul className='w-full flex flex-row gap-2 overflow-x-auto h-50'>
      {cookingProducts}
    </ul>
  )
}

export default Cooking
