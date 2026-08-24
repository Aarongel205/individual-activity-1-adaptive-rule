import { useState } from 'react'
import Games from './components/Games'
import Sports from './components/Sports'
import { products } from './data/products'

function App() {
  const preferences = {
    games: 0,
    sports: 0,
    cooking: 1,
    appliances: 0,
  }

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
        <input className='border px-2 m-2' type='text'></input>
      </nav>
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
