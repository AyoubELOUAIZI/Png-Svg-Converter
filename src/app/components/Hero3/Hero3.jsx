import React from 'react'

const Hero3 = () => {
  return (
    <div class=" ">
    <div class="container mx-auto py-8 px-4 md:px-0 md:flex md:justify-center md:items-center">
        <div class="md:w-1/2 lg:w-1/3 md:mr-8">
            <h1 class="text-3xl font-bold mb-4">Responsive Design</h1>
            <p class="text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper euismod
                massa eget dapibus. Sed in leo vel justo blandit faucibus id nec sapien.</p>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Learn More
      </button>
        </div>
        <div class="md:w-1/2  mt-8 md:mt-0">
            <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f" alt="Responsive Design" class="w-full h-full object-cover"/>
        </div>
    </div>
</div>
  )
}

export default Hero3