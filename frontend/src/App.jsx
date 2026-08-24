import { useEffect, useState } from 'react'
import Games from './components/Games'
import Sports from './components/Sports'
import Cooking from './components/Cooking'
import Appliances from './components/Appliances'

import SportsPage from './pages/SportsPage'
import AppliancesPage from './pages/AppliancesPage'
import Allproducts from './components/Allproducts'

import { products } from './data/products'
import { Search } from 'lucide-react'

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openSports, setOpenSports] = useState(false);
  const [openGames, setOpenGames] = useState(false);
  const [openCooking, setOpenCooking] = useState(false);
  const [openAppliances, setOpenAppliances] = useState(false);

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

    // Search category directly
    if (searchTerm === 'sports') {
      increasePreference('sports')
      setOpenSports(true)
      return
    }

    if (searchTerm === 'games' || searchTerm === 'gaming') {
      increasePreference('games')
      setOpenGames(true)
      return
    }

    if (searchTerm === 'cooking') {
      increasePreference('cooking')
      setOpenCooking(true)
      return
    }

    if (searchTerm === 'appliances' || searchTerm === 'appliance') {
      increasePreference('appliances')
      setOpenAppliances(true)
      return
    }

    // Search for a specific product
    const matchingProduct = products.find(product =>
      product.name.toLowerCase().includes(searchTerm)
    )

    if (matchingProduct) {
      // Increase preference
      increasePreference(matchingProduct.category)

      // Open modal based on product category
      if (matchingProduct.category === 'sports') {
        setOpenSports(true)
      }

      if (matchingProduct.category === 'games') {
        setOpenGames(true)
      }

      if (matchingProduct.category === 'cooking') {
        setOpenCooking(true)
      }

      if (matchingProduct.category === 'appliances') {
        setOpenAppliances(true)
      }
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
        className='border-5 border-[#5A189A] rounded-lg overflow-hidden bg-[#5A189A] text-white'
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

    return <Allproducts/>;
  }

  return (
    <>
   
  
      {openSports && <SportsPage setOpenSports={setOpenSports}/>}
      {openGames && <GamePage setOpenGames={setOpenGames} />}
      {openCooking && <CookingPage setOpenCooking={setOpenCooking} />}
      {openAppliances && <AppliancesPage setOpenAppliances={setOpenAppliances}/>}
      {/* Navbar */}
      <nav className='w-full min-h-15 bg-[#5A189A] flex items-center px-3 sm:px-5'>
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
      <section className='w-full min-h-screen bg-white p-3 sm:p-4 md:p-6'>
        
        {/* Banner */}
        <div className='relative w-full max-w-7xl mx-auto min-h-40 sm:min-h-52 md:min-h-60 bg-[#5A189A] rounded-lg mb-4 sm:mb-6 overflow-hidden'>
          <div className='relative z-10 p-4 sm:p-6 md:p-8 max-w-3xl'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-bold'>
              E-commerce
            </h1>

            <p className='mt-2 text-sm sm:text-base md:text-lg text-white max-w-2xl'>
              A simple e-commerce website where users can browse products, search for items, view product details, and easily manage their shopping cart.
            </p>
          </div>

          <div className='absolute right-0 bottom-0 opacity-10 translate-x-6 translate-y-6 sm:translate-x-8 sm:translate-y-8 md:translate-x-10 md:translate-y-10'>
            <svg className='w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-72 lg:h-72' viewBox='0 0 24 24' fill='currentColor'>
              <path d="M7 4H3v2h2l2.6 11.4A2 2 0 0 0 9.55 19H18v-2H9.55a.5.5 0 0 1-.49-.39L8.8 16H18a2 2 0 0 0 1.9-1.37L22 8H7.42L7 6h1V4H7zm2.1 6h10.22l-1.31 4H10.01l-.91-4zM10 21a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm8 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
            </svg>
          </div>
        </div>

        {/* Recommendation */}
        <div className='w-full flex flex-col  max-w-7xl mx-auto mb-4 sm:mb-6 justify-center items-center'>
          <div className='flex w-full justify-start m-2'>
            <h1>Recommendations</h1>
          </div>
          {renderRecommendation()}
        </div>

        {/* Products */}
        <div className='flex w-full justify-start m-2'>
            <h1>All Products</h1>
        </div>
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