import React from 'react'
import { ArrowLeft } from 'lucide-react';
import Appliances from '../components/Appliances'

const AppliancesPage = ({setOpenAppliances}) => {
  return (
    <div className='text-[#5A189A] bg-white min-h-screen w-full z-9999 fixed top-0 left-0 flex flex-col justify-between items-center'>
      <div className='w-full flex justify-start'>
        <ArrowLeft onClick={() => setOpenAppliances(false)} className='m-2 cursor-pointer'/>
      </div>
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
