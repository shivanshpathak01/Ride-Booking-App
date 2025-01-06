import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className='bg-cover bg-bottom bg-[url(https://images.unsplash.com/photo-1527603815363-e79385e0747e?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8  flex justify-between flex-col w-full'>
      {/* Previous image if the above image doesn't work */}
      {/* <div className='bg-cover bg-bottom bg-[url(https://images.unsplash.com/photo-1548357061-a82616fe2634?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhZmZpYyUyMGxpZ2h0cyUyMGFuZCUyMGNhYnxlbnwwfHwwfHx8MA%3D%3D)] h-screen pt-8  flex justify-between flex-col w-full bg-red-400'> */}
        <img className='w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber Logo" />
        <div className='bg-white pb-7 py-4 px-4'>
            <h2 className='text-3xl font-bold '>Get Started with Uber</h2>
            <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
