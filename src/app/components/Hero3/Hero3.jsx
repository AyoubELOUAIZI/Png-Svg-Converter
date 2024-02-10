import React from 'react'
import Image from 'next/image'

const Hero3 = ({imgUrl,title,desc}) => {
  return (
    <div className=" ">
    <div className="container mx-auto py-8 px-4 md:px-0 md:flex md:justify-center md:items-center">
        <div className="md:w-1/2 lg:w-1/3 md:mr-8">
            <h1 className="text-3xl font-bold text-pink-700 mb-4">{title}</h1>
            <p className="text-lg  mb-4">{desc}</p>
            <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
        Learn More
      </button>
        </div>
        <div className="md:w-1/2  mt-8 md:mt-0">
            <Image src={imgUrl} alt="Responsive Design" width={400} height={1000} className="w-full h-full object-cover"/>
        </div>
    </div>
</div>
  )
}

export default Hero3