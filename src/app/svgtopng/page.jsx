import React from 'react'
import Hero from '../components/Hero2/Hero'
import Hero3 from '../components/Hero3/Hero3'
const imgUrl1="https://res.cloudinary.com/dm9udoven/image/upload/v1707227111/svgtopng%20Site/svgtopng3_zbpjfj.webp";
const imgUrl2="https://res.cloudinary.com/dm9udoven/image/upload/v1707226087/svgtopng%20Site/PNTTOSVG_rx6roi.webp";
const page = () => {
  return (
    <div>
    <div className='sm:pt-14 lg:pt-0 flex justify-center items-center'>
        <Hero/>
    </div>
        <Hero3 imgUrl={imgUrl1}/>
        <Hero3 imgUrl={imgUrl2}/>
    </div>
  )
}

export default page