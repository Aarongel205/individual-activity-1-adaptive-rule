import { useEffect, useState } from 'react'
import Games from './components/Games'
import Sports from './components/Sports'
import { products } from './data/products'
import Cooking from './components/Cooking'
import { Search } from 'lucide-react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [preferences, setPreferences] = useState(() => {
  const savedPreferences = localStorage.getItem('preferences');
    return savedPreferences
      ? JSON.parse(savedPreferences)
      : {
          games: 0,
          sports: 0,
          cooking: 0,
          appliances: 0,
        };
  });

  useEffect(() => {
    localStorage.setItem('preferences', JSON.stringify(preferences));
  }, [preferences]);

  const increasePreference = (category) => {
    setPreferences(prev => ({
      ...prev,
      [category]: prev[category] + 1
    }));
  };

  const handleSearch = () => {
    const searchTerm = searchQuery.toLowerCase().trim();

    const matchingProduct = products.find(product =>
      product.name.toLowerCase().includes(searchTerm)
    );

    if (matchingProduct) {
      increasePreference(matchingProduct.category);
    }
  };

  const filteredProducts = products.filter(product => {
    const matchProducts = searchQuery.trim() !== "" && product.name.toLowerCase().includes(searchQuery.toLowerCase());

    return matchProducts;
  })

  const allProducts = products.map((product, index) => {
    return(
      <li className='border h-50' key={index}>{product.name}</li>
    )
  });
  const renderRecommendation = () => {
        if (
      preferences.cooking >= 3 &&
      preferences.cooking > preferences.sports &&
      preferences.cooking > preferences.appliances &&
      preferences.cooking > preferences.games
    ) {
      return <Cooking />;
    } else if (
      preferences.sports >= 3 &&
      preferences.sports > preferences.cooking &&
      preferences.sports > preferences.appliances &&
      preferences.sports > preferences.games
    ) {
      return <Sports />;
    } else if (
      preferences.appliances >= 3 &&
      preferences.appliances > preferences.cooking &&
      preferences.appliances > preferences.sports &&
      preferences.appliances > preferences.games
    ) {
      return <Appliances />;
    } else if (
      preferences.games >= 3 &&
      preferences.games > preferences.cooking &&
      preferences.games > preferences.sports &&
      preferences.games > preferences.appliances
    ) {
      return <Games />;
    }
  }
  return(
    <>
      <nav className='w-full h-15 bg-red-700 flex items-center p-2'>
        <div className='flex flex-row p-2'>
          <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className='border p-0.5' type='text'></input>
          <Search className='ml-2 cursor-pointer' size={24}/>
        </div>
      </nav>
      <ul className='flex flex-col'>
        {filteredProducts.map((product, index) =>{
          return <li key={index}>{product.name}</li>
        })}
      </ul>
      <section className='w-full min-h-screen bg-blue-700 flex flex-col p-4'>
        <div className='w-full border h-60'>

        </div>
        {renderRecommendation()}
        <ul className='grid gap-2 grid-cols-3'>
          {allProducts}
        </ul>
      </section>
    </>
    
  )
}

export default App
