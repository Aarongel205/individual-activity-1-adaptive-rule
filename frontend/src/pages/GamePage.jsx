import React from 'react'
import Games from '../components/Games'
import { ArrowLeft } from 'lucide-react';

const GamePage = ({setOpenGames}) => {
  return (
    <div className='text-[#5A189A] bg-white min-h-screen w-full z-9999 fixed top-0 left-0 flex flex-col justify-center items-center'>
      <div className='w-full flex justify-start'>
        <ArrowLeft onClick={() => setOpenGames(false)} className='m-2 cursor-pointer'/>
      </div>
      <div className='text-black m-2'>
        <h1 className='text-8xl'>Gaming</h1>
      </div>

      <div>
        <Games/>
      </div>
    </div>
  )
}

export default GamePage
