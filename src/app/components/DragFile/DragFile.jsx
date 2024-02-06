'use client'
import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import Image from 'next/image'

const DragFile = forwardRef((props, ref) => {
    const iconUrl="https://res.cloudinary.com/dm9udoven/image/upload/v1707164619/svgtopng%20Site/image-upload_g8vfcr.svg"
    const [etrState, setEtrState] = useState('');
    const [fileState, setFileState] = useState(null);
    const [pngDataUrl, setPngDataUrl] = useState(''); // State to hold the PNG data URL

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
        convertSvgToPng,
        handleDownloadPngImage // Expose the download PNG function
    }));

    function displayPreview(file) {
        if (file && file instanceof Blob) { // Check if file is a Blob (File objects inherit from Blob)
            var reader = new FileReader();
            reader.onload = (e) => {
                  // Assuming you want to show the convert button only for SVG files
                  if (file.type === 'image/svg+xml') {
                    props.setShowConvert(true);
                }else{
                    alert("Please provide a SVG image to convert to a PNG image format.\n your image is not SVG 😫.");
                    return;
                }
                var preview = document.getElementById('preview');
                preview.src = e.target.result;
                setEtrState(e.target.result);
                setFileState(file);
              
            };
            reader.readAsDataURL(file);
        } else {
            console.error('The provided file is not valid:', file);
        }
    }
    
    function convertSvgToPng() {
            convertSvgToPngImage(etrState, (pngDataUrl) => {
                setPngDataUrl(pngDataUrl); // Store the PNG data URL after conversion
            });
    }

    function handleDownloadPngImage() {
        if (pngDataUrl) { // Ensure there's a PNG data URL to download
            createDownloadLink(pngDataUrl);
            preview.src = iconUrl;
        }
    }

    function convertSvgToPngImage(svgDataUrl, callback) {
        let img = new window.Image();
        img.onload = () => {
            let canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;

            let ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);

            canvas.toBlob((blob) => {
                let url = URL.createObjectURL(blob);
                callback(url); // Pass the PNG data URL to the callback
            }, 'image/png');
        };
        img.src = svgDataUrl;
    }

    function createDownloadLink(pngDataUrl) {
        let downloadLink = document.createElement('a');
        downloadLink.href = pngDataUrl;
        downloadLink.download = 'converted-image.png';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
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
                    SVG image up to 10MB
                </p>
            </div>
            <img src={iconUrl} className="mt-4 mx-auto max-h-40" id="preview" alt="Uploaded image preview" />
        </div>
    );
});

DragFile.displayName = 'DragFile';
export default DragFile;
