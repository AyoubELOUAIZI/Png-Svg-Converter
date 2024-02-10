'use client'
import { useState } from 'react';

const convertPngToSvg = (file) => {
    console.log("file",file)
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
                const imageData = ctx.getImageData(0, 0, img.width, img.height).data;
                
                let svgPaths = '';
                for (let y = 0; y < img.height; y++) {
                    for (let x = 0; x < img.width; x++) {
                        const pixelIndex = (y * img.width + x) * 4;
                        const r = imageData[pixelIndex];
                        const g = imageData[pixelIndex + 1];
                        const b = imageData[pixelIndex + 2];
                        const a = imageData[pixelIndex + 3];
                        
                        if (a > 0) { // Skip transparent pixels
                            svgPaths += `<path fill="rgb(${r},${g},${b})" d="M${x} ${y}h1v1h-1z"/>`;
                        }
                    }
                }
                
                const svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="${img.width}" height="${img.height}">${svgPaths}</svg>`;
                resolve(svgString);
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    });
};


const downloadSvg = (svgString, fileName) => {
    const blob = new Blob([svgString], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};

const YourComponent = () => {
    const [svg, setSvg] = useState(null);
    console.log("🚀 ~ YourComponent ~ svg:", svg)

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            convertPngToSvg(file).then(svgString => {
                setSvg(svgString);
            }).catch(error => {
                console.error('Error converting PNG to SVG:', error);
            });
        }
    };

    const handleDownloadSvg = () => {
        if (svg) {
            downloadSvg(svg, 'image.svg');
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileUpload} />
            {svg && <div dangerouslySetInnerHTML={{ __html: svg }} />}
            {svg && <button onClick={handleDownloadSvg}>Download SVG</button>}
        </div>
    );
};

export default YourComponent;
