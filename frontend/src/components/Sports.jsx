import React from 'react'
import { products } from '../data/products.js'

const Sports = () => {

  const getSportsProduct = products.filter(product => {
    return product.category === 'sports'
  })

  const sportsProducts = getSportsProduct.map((product, index) => {
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
          border
          rounded-lg
          overflow-hidden
          bg-white
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
          src={product.imageUrl}
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
      {sportsProducts}
    </ul>
  )
}

export default Sports