"use client";
import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";

const DragFilePngToSvg = forwardRef((props, ref) => {
  const iconUrl =
    "https://res.cloudinary.com/dm9udoven/image/upload/v1707164619/svgtopng%20Site/image-upload_g8vfcr.svg";
  const [etrState, setEtrState] = useState(null);
  const [svgDataUrl, setSvgDataUrl] = useState(""); // State to hold the PNG data URL
  const [svg, setSvg] = useState(null);

  useEffect(() => {
    const dropzone = document.getElementById("dropzone");

    // Event handlers
    const handleDragOver = (e) => {
      e.preventDefault();
      dropzone.classList.add("border-indigo-600");
    };

    const handleDragLeave = (e) => {
      e.preventDefault();
      dropzone.classList.remove("border-indigo-600");
    };

    const handleDrop = (e) => {
      e.preventDefault();
      dropzone.classList.remove("border-indigo-600");
      const file = e.dataTransfer.files[0];
      displayPreview(file);
    };

    // Setup event listeners
    dropzone.addEventListener("dragover", handleDragOver);
    dropzone.addEventListener("dragleave", handleDragLeave);
    dropzone.addEventListener("drop", handleDrop);

    const input = document.getElementById("file-upload");
    input.addEventListener("change", (e) => {
      const file = e.target.files[0];
      displayPreview(file);
    });

    // Cleanup
    return () => {
      dropzone.removeEventListener("dragover", handleDragOver);
      dropzone.removeEventListener("dragleave", handleDragLeave);
      dropzone.removeEventListener("drop", handleDrop);
    };
  }, []);

  useImperativeHandle(ref, () => ({
    convertPngToSvg,
    handleDownloadSvgImage,
  }));

  function displayPreview(file) {
    var reader = new FileReader();
    reader.onload = (e) => {
      if (file.type === "image/png" || file.type === "image/jpeg") {
        props.setShowConvert(true);
      } else {
        alert(
          "Please provide a PNG or JPG image to convert to an SVG image format.\nYour image is not PNG or JPG 😫."
        );
        return;
      }

      var preview = document.getElementById("preview");
      preview.src = e.target.result;
      console.log("🚀 ~ displayPreview ~ e.target.result:", e.target.result);
      // setEtrState(e.target.result);
      setEtrState(file);
    };
    reader.readAsDataURL(file);
  }

  const convertPngToSvg = (event) => {

        if (!etrState) {
      console.error("No image selected for conversion.");
      return;
    }

    // const file = event.target.files[0];
    if (etrState) {
        convertPngToSvg2(etrState).then(svgString => {
            setSvg(svgString);
        }).catch(error => {
            console.error('Error converting PNG to SVG:', error);
        });
    }
};
  
const convertPngToSvg2 = (file) => {
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

  const handleDownloadSvgImage = () => {
    if (svg) {
        downloadSvg(svg, 'image.svg');
    }
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

  
  return (
    <div
      className="md:w-[400px] relative border-2  border-pink-300 border-dashed rounded-lg p-6"
      id="dropzone"
    >
      <input
        type="file"
        className="absolute inset-0 w-full h-full opacity-0 z-50"
        id="file-upload"
        name="file-upload"
      />
      <div className="text-center">
        <img
          className="mx-auto h-12 w-12"
          src={iconUrl}
          alt=""
          width={40}
          height={100}
        />
        <h3 className="mt-2 text-sm font-medium text-gray-900">
          <label htmlFor="file-upload" className="relative cursor-pointer">
            <span>Drag and drop</span>
            <span className="text-pink-600"> or browse</span>
            <span> to upload</span>
          </label>
        </h3>
        <p className="mt-1 text-xs text-gray-500">PNG JPG image up to 10MB</p>
      </div>
      <img
        src={iconUrl}
        className="mt-4 mx-auto max-h-40"
        id="preview"
        alt="Uploaded image preview"
      />
    </div>
  );
});

DragFilePngToSvg.displayName = "DragFilePngToSvg";
export default DragFilePngToSvg;
