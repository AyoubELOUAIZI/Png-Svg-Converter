"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'

const DragFile = () => {

    useEffect(() => {
        var dropzone = document.getElementById('dropzone');

    dropzone.addEventListener('dragover', e => {
        e.preventDefault();
        dropzone.classList.add('border-indigo-600');
    });

    dropzone.addEventListener('dragleave', e => {
        e.preventDefault();
        dropzone.classList.remove('border-indigo-600');
    });

    dropzone.addEventListener('drop', e => {
        e.preventDefault();
        dropzone.classList.remove('border-indigo-600');
        var file = e.dataTransfer.files[0];
        displayPreview(file);
    });

    var input = document.getElementById('file-upload');

    input.addEventListener('change', e => {
        var file = e.target.files[0];
        displayPreview(file);
    });
}, [])

    function displayPreview(file) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            var preview = document.getElementById('preview');
            preview.src = reader.result;
            preview.classList.remove('hidden');
        };
    }

  return (
    <div class="bg-slate-400 md:w-[400px] relative border-2 border-gray-300 border-dashed rounded-lg p-6" id="dropzone">
    <input type="file" class="absolute inset-0 w-full h-full opacity-0 z-50" />
    <div class="text-center">
        <Image class="mx-auto h-12 w-12" width={40} height={100} src="https://res.cloudinary.com/dm9udoven/image/upload/v1707164619/svgtopng%20Site/image-upload_g8vfcr.svg" alt=""/>

        <h3 class="mt-2 text-sm font-medium text-gray-900">
            <label for="file-upload" class="relative cursor-pointer">
                <span>Drag and drop</span>
                <span class="text-indigo-600"> or browse</span>
                <span>to upload</span>
                <input id="file-upload" name="file-upload" type="file" class="sr-only"/>
            </label>
        </h3>
        <p class="mt-1 text-xs text-gray-500">
            PNG, JPG, GIF up to 10MB
        </p>
    </div>

    <Image src="" class="mt-4 mx-auto max-h-40 hidden" id="preview"/>
</div>

  )
}

export default DragFile