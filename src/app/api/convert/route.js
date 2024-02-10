import potrace from "potrace";
// Function to convert the uploaded image to SVG
import fs from "fs";
import { NextResponse } from "next/server";
function convertToSVG__(pngBuffer) {
  console.log('the convert function starts....😎');
  return new Promise((resolve, reject) => {
    // Configure Potrace options
    const options = {
      threshold: 128, // adjust this threshold based on your image
      turdSize: 2,
      turnPolicy: potrace.Potrace.TURNPOLICY_MINORITY,
      color: "black",
      background: "white",
    };

    // Create a Potrace instance
    const tracer = new potrace.Potrace(options);
    
    // Load PNG image into Potrace
    tracer.loadImage(pngBuffer);
    
    // Trace the image
    tracer.trace();

    // Get the SVG data
    const svgData = tracer.getSVG();
    
    resolve(svgData);
  });
}
async function convertToSVG(pngBuffer) {
  console.log('the convert function starts....😎');
  return new Promise((resolve, reject) => {
    // Configure Potrace options
    const options = {
      threshold: 128, // adjust this threshold based on your image
      turdSize: 2,
      turnPolicy: potrace.Potrace.TURNPOLICY_MINORITY,
      color: "black",
      background: "white",
    };

    // Create a Potrace instance with options
    const tracer = new potrace.Potrace(options);

    // Load the image into Potrace
    tracer.loadImage(pngBuffer);

    // Trace the image
    tracer.trace();

    // Get the SVG data
    const svgData = tracer.getSVG();

    resolve(svgData);
  });
}




async function convertImageToSvg_(uploadedImage) {
  return new Promise((resolve, reject) => {
    // Configure Potrace options
    const options = {
      threshold: 128, // adjust this threshold based on your image
      turdSize: 2,
      turnPolicy: potrace.Potrace.TURNPOLICY_MINORITY,
      color: "black",
      background: "white",
    };

    // Create a Potrace instance
    const tracer = new potrace.Potrace(options);

    // Read the uploaded image file
    fs.readFile(uploadedImage.path, (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      // Trace the image
      tracer.loadImage(data);
      tracer.trace();

      // Get the SVG data
      const svgData = tracer.getSVG();
      resolve(svgData);
    });
  });
}

export const config = {
  api: {
    bodyParser: {
      limit: "10mb", // Adjust based on your needs
    },
  },
};

export async function POST(req, res) {
  try {
    const formData = await req.formData();
    console.log("🚀 ~ POST ~ formData:", formData);
    // ------------------------------------------------------------//
    // const uploadedimage = formData.get("image");
    // console.log("🚀 ~ POST ~ uploadedimage:", uploadedimage);
    const file = formData.get("image");
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    console.log("🚀 ~ POST ~ buffer:", buffer);

    //this was the result in the console:
    /*🚀 ~ POST ~ formData: _FormData [FormData] {
        [Symbol(state)]: [ { name: 'image', value: [File] } ]
      }
      🚀 ~ POST ~ uploadedimage: File {
        size: 20992,
        type: 'image/png',
        name: 'image.png',
        lastModified: 1707499710951
      }*/

    // Call a function to convert the uploaded image SVG
    const svgData = await convertToSVG(buffer); //I should define this function using the library potrace for example
    console.log("🚀 ~ POST ~ svgData:", svgData)

    // Send the SVG back to the client side
    // res.status(200).json({ uploadedimage });
    return NextResponse.json(svgData, { status: 200 });
  } catch (error) {
    console.error("Error processing request of converting png to svg 😪😪😪:", error);
    return NextResponse.json({ message: "Internal Server Error" , error: error.message }, { status: 500 });
  }
}
