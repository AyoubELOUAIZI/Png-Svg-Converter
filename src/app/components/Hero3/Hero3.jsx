import React from 'react'
import Image from 'next/image'

const Hero3 = ({imgUrl}) => {
  return (
    <div className=" ">
    <div className="container mx-auto py-8 px-4 md:px-0 md:flex md:justify-center md:items-center">
        <div className="md:w-1/2 lg:w-1/3 md:mr-8">
            <h1 className="text-3xl font-bold mb-4">Responsive Design</h1>
            <p className="text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper euismod
                massa eget dapibus. Sed in leo vel justo blandit faucibus id nec sapien.</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
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