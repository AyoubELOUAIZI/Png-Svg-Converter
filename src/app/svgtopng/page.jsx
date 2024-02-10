import React from 'react'
import Hero from '../components/Hero2/Hero'
import Hero3 from '../components/Hero3/Hero3'
const imgUrl1="https://res.cloudinary.com/dm9udoven/image/upload/v1707227111/svgtopng%20Site/svgtopng3_zbpjfj.webp";
const imgUrl2="https://res.cloudinary.com/dm9udoven/image/upload/v1707226087/svgtopng%20Site/PNTTOSVG_rx6roi.webp";
const imgUrl3="https://res.cloudinary.com/dm9udoven/image/upload/v1707608073/svgtopng%20Site/mg_m2pmeq.jpg";
const title1="Seamless SVG to PNG Conversion";
const title2="Exceptional Quality, Every Time";
const title3="Streamlined Workflow";
const desc1="Unlock the versatility of your SVG files with MyCONVERTER's intuitive SVG to PNG conversion feature. Effortlessly transform your scalable vector graphics into high-quality PNG images with just a few clicks. Our user-friendly interface and advanced conversion algorithms ensure a smooth and hassle-free experience, allowing you to produce stunning PNG images with ease.";
const desc2="Experience unparalleled quality with MyCONVERTER's SVG to PNG conversion. Our platform preserves the finest details and ensures crisp, clear PNG images that capture the essence of your SVG artwork. Whether you're converting logos, icons, or intricate illustrations, MyCONVERTER guarantees superior quality results that exceed expectations.";
const desc3="Say goodbye to complex conversion processes. MyCONVERTER streamlines the SVG to PNG conversion, providing you with a straightforward solution that saves time and effort. With our efficient workflow, you can quickly convert SVG files to PNG images without compromising on quality, empowering you to unleash the full potential of your designs.";
const page = () => {
  return (
    <div>
    <div className='xs:pt-10 lg:pt-0 flex justify-center items-center'>
        <Hero/>
    </div>
        <Hero3 imgUrl={imgUrl1} title={title1} desc={desc1}/>
        <Hero3 imgUrl={imgUrl3} title={title3} desc={desc3}/>
        <Hero3 imgUrl={imgUrl2} title={title2} desc={desc2}/>
    </div>
  )
}

export default page