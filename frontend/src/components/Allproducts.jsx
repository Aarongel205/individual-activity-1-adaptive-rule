import React from 'react'
import { products } from '../data/products'

const Allproducts = () => {
    const allProducts = products.map((product, index) => {
        return (
          <li
            className='border-5 border-[#5A189A] rounded-lg overflow-hidden bg-[#5A189A] text-white flex-shrink-0 w-48 sm:w-52 md:w-56 lg:w-60'
            key={index}
          >
            <img
              className='w-full h-40 sm:h-48 md:h-52 lg:h-56 object-cover'
              src={product.imageUrl}
              alt={product.name}
            />
    
            <div className='p-2 sm:p-3'>
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
    <div className='gap-2 overflow-x-auto max-w-full md:w-300'>
        <ul className='flex gap-2 flex-row'>
            {allProducts}
        </ul>
    </div>
  )
}

export default Allproducts