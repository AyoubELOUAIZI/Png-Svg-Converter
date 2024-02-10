import React from "react";
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4  mx-auto lg:gap-8 xl:gap-0 lg:py-2 lg:grid-cols-12 lg:pt-2">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-pink-500">
            Unleash the Power of <br />
            Scalable Vector Graphics (SVG)
          </h1>

          <p className="max-w-2xl  font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            At MyCONVERTER, we prioritize delivering exceptional quality in
            every SVG conversion. Our cutting-edge technology ensures that the
            resulting SVG images are pixel-perfect and retain the highest level
            of detail. Whether you&apos;re converting complex artwork or
            intricate designs, MyCONVERTER guarantees superior SVG quality that
            exceeds expectations. Experience the precision and clarity of SVG
            images like never before with MyCONVERTER.
          </p>
        </div>

        <div className=" lg:mt-0 lg:col-span-5 lg:flex">
          <Image
           width={600} height={1000}
            src="https://res.cloudinary.com/dm9udoven/image/upload/v1707606446/svgtopng%20Site/img4_cbgtkg.png"
            alt="hero image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
