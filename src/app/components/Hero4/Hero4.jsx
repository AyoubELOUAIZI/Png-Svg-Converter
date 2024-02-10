import React from "react";
import Image from 'next/image'

const Hero4 = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 pt-4 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12 lg:pt-28">
      <div className=" lg:mt-0 lg:col-span-5 lg:flex">
          <Image
          width={700} height={1000}
            src="https://res.cloudinary.com/dm9udoven/image/upload/v1707605887/svgtopng%20Site/img3_hzzlxq.png"
            alt="hero image"
          />
        </div>
      
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-pink-500">
            Transform Your <br />
            Images with Ease
          </h1>

          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            This MyCONVERTER offers a seamless solution for converting images
            into various formats. Whether you need to convert PNG to SVG, JPEG
            to PNG, or any other format conversion, MyCONVERTER simplifies the
            process. With our intuitive interface and powerful conversion tools,
            you can effortlessly transform your images to meet your needs.
            Experience the convenience of image conversion with MyCONVERTER
            today.
          </p>
        </div>

       
      </div>
    </section>
  );
};

export default Hero4;
