'use client'
import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import Image from 'next/image'
import Potrace from 'potrace';
import { saveAs } from 'file-saver';

const DragFilePngToSvg = forwardRef((props, ref) => {
    const iconUrl="https://res.cloudinary.com/dm9udoven/image/upload/v1707164619/svgtopng%20Site/image-upload_g8vfcr.svg"
    const [etrState, setEtrState] = useState('');
    const [svgDataUrl, setSvgDataUrl] = useState(''); // State to hold the PNG data URL

    useEffect(() => {
        const dropzone = document.getElementById('dropzone');

        // Event handlers
        const handleDragOver = e => {
            e.preventDefault();
            dropzone.classList.add('border-indigo-600');
        };

        const handleDragLeave = e => {
            e.preventDefault();
            dropzone.classList.remove('border-indigo-600');
        };

        const handleDrop = e => {
            e.preventDefault();
            dropzone.classList.remove('border-indigo-600');
            const file = e.dataTransfer.files[0];
            displayPreview(file);
        };

        // Setup event listeners
        dropzone.addEventListener('dragover', handleDragOver);
        dropzone.addEventListener('dragleave', handleDragLeave);
        dropzone.addEventListener('drop', handleDrop);

        const input = document.getElementById('file-upload');
        input.addEventListener('change', e => {
            const file = e.target.files[0];
            displayPreview(file);
        });

        // Cleanup
        return () => {
            dropzone.removeEventListener('dragover', handleDragOver);
            dropzone.removeEventListener('dragleave', handleDragLeave);
            dropzone.removeEventListener('drop', handleDrop);
        };
    }, []);

    useImperativeHandle(ref, () => ({
        convertPngToSvg,
        handleDownloadSvgImage 
    }));

    function displayPreview(file) {
            var reader = new FileReader();
            reader.onload = (e) => {
                if (file.type === 'image/png' || file.type === 'image/jpeg') {
                    props.setShowConvert(true);
                } else {
                    alert("Please provide a PNG or JPG image to convert to an SVG image format.\nYour image is not PNG or JPG 😫.");
                    return;
                }
                
                var preview = document.getElementById('preview');
                preview.src = e.target.result;
                setEtrState(e.target.result);              
            };
            reader.readAsDataURL(file);
    }
    
    function convertPngToSvg() {
        convertPngToSvgImage(etrState, (svgDataUrl) => {
                setSvgDataUrl(svgDataUrl); // Store the SVG data URL after conversion
            });
    }

    function handleDownloadSvgImage() {
    if (svgDataUrl) { 
        createDownloadLink(svgDataUrl);
    } else {
        alert("SVG data is not available for download.");
    }
}


    function createDownloadLink(pngDataUrl) {
        let downloadLink = document.createElement('a');
        downloadLink.href = pngDataUrl;
        downloadLink.download = 'converted-image.svg';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }

    function convertPngToSvgImage(pngDataUrl, callback) {
        console.log('convertPng to SVG image url is stared...')
        // Potrace settings can be adjusted as needed
        const potraceSettings = {
            turnPolicy: Potrace.TURNPOLICY_MAJORITY,
            turdSize: 2,
            alphaMax: 1,
            optCurve: true,
            optTolerance: 0.2,
            threshold: Potrace.THRESHOLD_AUTO, // Can adjust or use Potrace.THRESHOLD_AUTO for automatic
            blackOnWhite: true, // Depending on your image, you might want to invert this
        };
    
        // Create a Potrace instance with your settings
        const potrace = new Potrace(potraceSettings);
    
        // Load the image from the data URL
        potrace.loadUrl(pngDataUrl, function(err) {
            if (err) {
                console.error('Potrace loadUrl error:', err);
                return;
            }
    
            // Once the image is loaded, process it to SVG
            potrace.process(function(err) {
                if (err) {
                    console.error('Potrace process error:', err);
                    return;
                }
    
                // Get the SVG as a string
                const svg = potrace.getSVG();
                console.log('SVG:', svg);
    
                // Here, you can use the callback to pass the SVG data URL or directly set state
                // For example, converting SVG string to Data URL:
                const svgDataUrl = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
                callback(svgDataUrl);
            });
        });
    }

    return (
        <div className="md:w-[400px] relative border-2  border-pink-300 border-dashed rounded-lg p-6" id="dropzone">
            <input type="file" className="absolute inset-0 w-full h-full opacity-0 z-50" id="file-upload" name="file-upload" />
            <div className="text-center">
                <Image className="mx-auto h-12 w-12" src={iconUrl} alt="" width={40} height={100} />
                <h3 className="mt-2 text-sm font-medium text-gray-900">
                    <label htmlFor="file-upload" className="relative cursor-pointer">
                        <span>Drag and drop</span>
                        <span className="text-pink-600"> or browse</span>
                        <span> to upload</span>
                    </label>
                </h3>
                <p className="mt-1 text-xs text-gray-500">
                    PNG JPG image up to 10MB
                </p>
            </div>
            <img src={iconUrl} className="mt-4 mx-auto max-h-40" id="preview" alt="Uploaded image preview" />
        </div>
    );
});

DragFilePngToSvg.displayName = 'DragFilePngToSvg';
export default DragFilePngToSvg;
