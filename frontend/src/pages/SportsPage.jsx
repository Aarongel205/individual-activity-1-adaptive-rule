import React from 'react'
import Sports from '../components/Sports'

const SportsPage = () => {
  return (
    <div className='text-[#E0AAFF] bg-white min-h-screen w-full z-9999 fixed top-0 left-0 flex flex-col justify-center items-center'>
      <div className='text-black m-2'>
        <h1 className='text-8xl'>Sports</h1>
      </div>

      <div>
        <Sports/>
      </div>
    </div>
  )
}

export default SportsPage
