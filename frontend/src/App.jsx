import { useEffect, useState } from 'react'
import Games from './components/Games'
import Sports from './components/Sports'
import Cooking from './components/Cooking'
import { products } from './data/products'
import { Search } from 'lucide-react'

function App() {
  const [searchQuery, setSearchQuery] = useState('')

  const [preferences, setPreferences] = useState(() => {
    const savedPreferences = localStorage.getItem('preferences')

    return savedPreferences
      ? JSON.parse(savedPreferences)
      : {
          games: 0,
          sports: 0,
          cooking: 0,
          appliances: 0,
        }
  })

  useEffect(() => {
    localStorage.setItem('preferences', JSON.stringify(preferences))
  }, [preferences])

  const increasePreference = (category) => {
    setPreferences(prev => ({
      ...prev,
      [category]: prev[category] + 1
    }))
  }

  const handleSearch = () => {
    const searchTerm = searchQuery.toLowerCase().trim()

    const matchingProduct = products.find(product =>
      product.name.toLowerCase().includes(searchTerm)
    )

    if (matchingProduct) {
      increasePreference(matchingProduct.category)
    }
  }

  const filteredProducts = products.filter(product => {
    return (
      searchQuery.trim() !== '' &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })

  const allProducts = products.map((product, index) => {
    return (
      <li
        className='border rounded-lg overflow-hidden bg-white'
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

  const renderRecommendation = () => {
    if (
      preferences.cooking >= 3 &&
      preferences.cooking > preferences.sports &&
      preferences.cooking > preferences.appliances &&
      preferences.cooking > preferences.games
    ) {
      return <Cooking />
    } else if (
      preferences.sports >= 3 &&
      preferences.sports > preferences.cooking &&
      preferences.sports > preferences.appliances &&
      preferences.sports > preferences.games
    ) {
      return <Sports />
    } else if (
      preferences.appliances >= 3 &&
      preferences.appliances > preferences.cooking &&
      preferences.appliances > preferences.sports &&
      preferences.appliances > preferences.games
    ) {
      return <Appliances />
    } else if (
      preferences.games >= 3 &&
      preferences.games > preferences.cooking &&
      preferences.games > preferences.sports &&
      preferences.games > preferences.appliances
    ) {
      return <Games />
    }

    return null
  }

  return (
    <>
      {/* Navbar */}
      <nav className='w-full min-h-15 bg-red-700 flex items-center px-3 sm:px-5'>
        <div className='w-full max-w-3xl mx-auto flex items-center gap-2'>
          
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='flex-1 min-w-0 border bg-white p-2 rounded-md outline-none text-sm sm:text-base'
            type='text'
            placeholder='Search products...'
          />

          <button
            onClick={handleSearch}
            className='shrink-0 border bg-white cursor-pointer flex justify-center items-center p-2 rounded-md hover:bg-gray-100'
          >
            <Search size={20} />
          </button>

        </div>
      </nav>

      {/* Search Results */}
      {filteredProducts.length > 0 && (
        <ul className='w-full max-w-3xl mx-auto p-3 sm:p-4'>
          {filteredProducts.map((product, index) => (
            <li
              className='p-2 border-b text-sm sm:text-base'
              key={index}
            >
              {product.name}
            </li>
          ))}
        </ul>
      )}

      {/* Main Section */}
      <section className='w-full min-h-screen bg-blue-700 p-3 sm:p-4 md:p-6'>
        
        {/* Banner */}
        <div className='w-full max-w-7xl mx-auto h-40 sm:h-52 md:h-60 border rounded-lg mb-4 sm:mb-6'>
        </div>

        {/* Recommendation */}
        <div className='w-full max-w-7xl mx-auto mb-4 sm:mb-6'>
          {renderRecommendation()}
        </div>

        {/* Products */}
        <ul className='
          w-full
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-3
          sm:gap-4
          max-h-[70vh]
          overflow-y-auto
          p-1
        '>
          {allProducts}
        </ul>

      </section>
    </>
  )
}

export default App