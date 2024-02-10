import React from 'react'
import Hero3 from '../components/Hero3/Hero3'
import HeroPngToSvg from '../components/HeroPngToSvg/HeroPngToSvg'
import YourComponent from '../components/HeroPngToSvg/YourComponent';
const imgUrl1="https://res.cloudinary.com/dm9udoven/image/upload/v1707227422/svgtopng%20Site/pngtosvg_uvyfak.webp";
const imgUrl2="https://res.cloudinary.com/dm9udoven/image/upload/v1707226167/svgtopng%20Site/svgtopng2_u8vjww.webp";

const page = () => {
    return (
        <div>
        <div className='flex justify-center items-center'>
            <HeroPngToSvg/>
            <YourComponent/>
        </div>
            <Hero3 imgUrl={imgUrl1}/>
            <Hero3 imgUrl={imgUrl2}/>
        </div>
      )
}

export default page