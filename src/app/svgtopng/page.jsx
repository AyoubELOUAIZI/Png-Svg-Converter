import React from 'react'
import Hero from '../components/Hero2/Hero'
import Hero3 from '../components/Hero3/Hero3'

const page = () => {
  return (
    <div>
    <div className='flex justify-center items-center'>
        <Hero/>
    </div>
        <Hero3/>
    </div>
  )
}

export default page