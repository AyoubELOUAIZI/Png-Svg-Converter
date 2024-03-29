"use client";
import React, { useRef, useState } from "react";
import DragFile from "../DragFile/DragFile";

const Hero = () => {
  const dragFileRef = useRef(null);
  const [showDownload, setshowDownload] = useState(false);
  const [showConvert, setShowConvert] = useState(false);

  const handleConvertToPng = () => {
    dragFileRef.current.convertSvgToPng();
    setShowConvert(false);
    setshowDownload(true);
  };

  const handleDownloadPng = () => {
    dragFileRef.current.handleDownloadPngImage();
    setshowDownload(false);
  };

  return (
    <section className="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Drag or Drop Your SVG Image</span>
            <span className="block text-pink-600 xl:inline"> to Convert</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Transforming your SVG images into PNG format is as easy as
            drag-and-drop.Our user-friendly interface ensures a smooth and
            intuitive experience, allowing you to convert SVG to PNG
            effortlessly.
          </p>
          {/* <!-- Button Section --> */}
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            {showConvert && (
              <button
                className="rounded-md shadow"
                onClick={handleConvertToPng}
              >
                <span className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10">
                  Convert to png image
                </span>
              </button>
            )}
            {showDownload && (
              <button
                className="mt-3 sm:mt-0 sm:ml-3"
                onClick={handleDownloadPng}
              >
                <span className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                  Download png image
                </span>
              </button>
            )}
          </div>
          {/* <!-- End of Button Section --> */}
        </div>

        {/* <!--   Image Section     --> */}
        <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
          {/* <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt=""/> */}
          <div className="flex justify-center items-center  lg:w-full lg:h-full">
            <DragFile ref={dragFileRef} setShowConvert={setShowConvert} />
          </div>
        </div>
        {/* <!--   End of Image Section     --> */}
      </div>
    </section>
  );
};

export default Hero;
