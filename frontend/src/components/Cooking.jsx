import React from 'react'
import { products } from '../data/products.js'
import hero from '../assets/hero.png'

const Cooking = () => {

  const getCookingProducts = products.filter(product => {
    return product.category === 'cooking'
  })

  const cookingProducts = getCookingProducts.map((product, index) => {
    return (
      <li
        className='
          shrink-0
          w-32
          sm:w-36
          md:w-40
          lg:w-44
          h-48
          sm:h-52
          md:h-56
          border-5
          border-[#5A189A] 
          rounded-lg
          overflow-hidden
          bg-[#5A189A] 
        '
        key={index}
      >
        <img
          className='
            w-full
            h-28
            sm:h-32
            md:h-36
            object-cover
          '
          src={hero}
          alt={product.name}
        />

        <div className='p-2'>
          <p className='text-sm sm:text-base font-medium truncate'>
            {product.name}
          </p>

          <p className='text-sm sm:text-base'>
            {product.price}$
          </p>
        </div>
      </li>
    )
  })

  return (
    <ul
      className='
        w-full
        flex
        flex-row
        gap-2
        sm:gap-3
        overflow-x-auto
        overflow-y-hidden
        p-1
        mb-4
      '
    >
      {cookingProducts}
    </ul>
  )
}

export default Cooking