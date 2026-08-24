import React from 'react'
import Cooking from '../components/Cooking'

const CookingPage = () => {
  return (
    <div className='text-[#E0AAFF] bg-white min-h-screen w-full z-9999 fixed top-0 left-0 flex flex-col justify-center items-center'>
      <div className='text-black m-2'>
        <h1 className='text-8xl'>Cooking</h1>
      </div>

      <div>
        <Cooking/>
      </div>
    </div>
  )
}

export default CookingPage
