import React from 'react'
import Sports from '../components/Sports'

const SportsPage = ({setOpenSports}) => {
  return (
    <div className='text-[#5A189A] bg-white min-h-screen w-full z-9999 fixed top-0 left-0 flex flex-col justify-center items-center'>
      <div className='w-full flex justify-start'>
        <ArrowLeft onClick={() => setOpenSports(false)} className='m-2 cursor-pointer'/>
      </div>
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
