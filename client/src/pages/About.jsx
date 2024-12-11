import React from 'react'
import { Link } from 'react-router-dom';


export default function About() {
  return (
    <center>
    <div className='py-20 px-4 max-w-6xl mx-auto'>
      <h1 className='text-3xl font-bold mb-4 text-slate-800'>About Flamingo</h1>
      <p className='mb-4 text-slate-700'>Looking for a holiday spot, don't know where to go. That’s where Flamingo comes in.</p>
      <p className='mb-4 text-slate-700'>With Flamingo, explore the vast options of place to find leisure and also get exclusive offers on many spots.</p>
      <p className='mb-4 text-slate-700'>Also plan on moving to a new home. Find the only home for your family, only on Flamingo.</p>
      <div
        className='text-xs sm:text-sm text-blue-800 font-bold hover:underline'
      >
        <Link to={'/'}>Let's find the best place for you...</Link>
        
      </div>
    </div>
    </center>
    
  )
}
