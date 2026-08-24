import React from 'react'
import Appliances from '../components/Appliances'

const AppliancesPage = () => {
  return (
    <div className='text-[#E0AAFF] bg-white min-h-screen w-full z-9999 fixed top-0 left-0 flex flex-col justify-center items-center'>
      <div className='text-black m-2'>
        <h1 className='text-8xl'>Appliances</h1>
      </div>

      <div>
        <Appliances/>
      </div>
    </div>
  )
}

export default AppliancesPage
