import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'

const LandingPage = () => {
  return (
    <div className='flex flex-col justify-between items-center pl-4 pt-8'>
      <h1>Imagine If</h1>
      <h1 className=' text-transparent bg-clip-text bg-gradient-to-r from-[#8456EC] to-[#E87BF8] pt-4'>Snapchat</h1>
      <h1>had events.</h1>
      <p className=' font-light pt-4'>Easily host and share events with your friends across any social media.</p>
      <div className='pt-24'>
        <Card />
      </div>
      <Link to="/create">
        <div class="flex space-x-2 justify-center pt-12">
          <button type="button" class="inline-block px-6 py-2.5 bg-gradient-to-r from-[#8456EC] to-[#E87BF8] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Create My Event</button>
        </div>
      </Link>
    </div>
  )
}

export default LandingPage