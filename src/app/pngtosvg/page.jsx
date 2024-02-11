import React from 'react'
import Hero3 from '../components/Hero3/Hero3'
import HeroPngToSvg from '../components/HeroPngToSvg/HeroPngToSvg'
const imgUrl1="https://res.cloudinary.com/dm9udoven/image/upload/v1707227422/svgtopng%20Site/pngtosvg_uvyfak.webp";
const imgUrl2="https://res.cloudinary.com/dm9udoven/image/upload/v1707226167/svgtopng%20Site/svgtopng2_u8vjww.webp";
const imgUrl3="https://res.cloudinary.com/dm9udoven/image/upload/v1707608333/svgtopng%20Site/mg1_ikgsul.png";
const title1="Seamless PNG to SVG Conversion";
const desc1="Unlock the potential of your PNG images with MyCONVERTER's intuitive PNG to SVG conversion feature. Effortlessly transform your raster graphics into scalable vector graphics with just a few simple steps. Our user-friendly interface and advanced conversion algorithms ensure a smooth and hassle-free experience, allowing you to create high-quality SVG images with ease.";
const title2="Exceptional Quality, Every Time";
const desc2="Experience unparalleled quality with MyCONVERTER's PNG to SVG conversion. Our platform utilizes advanced vectorization techniques to produce SVG images that retain the finest details and clarity of your PNG artwork. Whether you're converting logos, illustrations, or photographs, MyCONVERTER guarantees superior quality results that exceed expectations.";
const title3="Streamlined Workflow";
const desc3="Say goodbye to complex conversion processes. MyCONVERTER streamlines the PNG to SVG conversion, providing you with a straightforward solution that saves time and effort. With our efficient workflow, you can quickly convert PNG files to SVG images without compromising on quality, empowering you to unleash the full potential of your designs.";

export const metadata = {
    title: 'Convert PNG to SVG',
    description: "Convert your raster graphics in portable network graphics (PNG) format to scalable vector graphics (SVG) effortlessly. MyConverter offers a straightforward solution for transforming PNG images into high-quality SVG files, preserving details and clarity while ensuring scalability. Whether you're a designer, developer, or enthusiast, MyConverter simplifies the PNG to SVG conversion process, empowering you to create vector graphics with ease.",
  };
  

const page = () => {
    return (
        <div>
        <div className='xs:pt-10  lg:pt-0 flex justify-center items-center'>
            <HeroPngToSvg/>
        </div>
            <Hero3 imgUrl={imgUrl1} title={title1} desc={desc1}/>
            <Hero3 imgUrl={imgUrl3} title={title3} desc={desc3}/>
            <Hero3 imgUrl={imgUrl2} title={title2} desc={desc2}/>
        </div>
      )
}

export default page