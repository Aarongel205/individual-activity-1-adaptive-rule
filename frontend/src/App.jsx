import { useEffect, useState } from 'react'
import Games from './components/Games'
import Sports from './components/Sports'
import { products } from './data/products'

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
    if(preferences.games >= 3){
      return <Games/>
    }else{
      return <Sports/>
    }
  }
  return(
    <>
      <nav className='w-full h-10 bg-red-700'>
        <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className='border px-2 m-2' type='text'></input>
        <button onClick={handleSearch}>Search</button>
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
