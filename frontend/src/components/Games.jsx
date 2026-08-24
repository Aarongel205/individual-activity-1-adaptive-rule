import { products } from '../data/products.js'

const Games = () => {

  const getGamingProducts = products.filter(product => {
    return product.category === 'games'
  })

  const gamingProducts = getGamingProducts.map((product, index) => {
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
          border-amber-500
          rounded-lg
          overflow-hidden
          bg-white
          p-2
        '
        key={index}
      >
        <p className='text-sm sm:text-base font-medium truncate'>
          {product.name}
        </p>

        <p className='text-sm sm:text-base'>
          {product.price}$
        </p>
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
      {gamingProducts}
    </ul>
  )
}

export default Games