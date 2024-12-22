import React from "react";

function DisplayImages({ originalImage, maskImage }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Image Preview</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="text-center">
          <h4 className="text-md font-medium mb-2 text-gray-600">Original Image</h4>
          <img
            src={originalImage}
            alt="Original"
            className="border rounded max-w-full h-auto shadow"
          />
        </div>
        <div className="text-center">
          <h4 className="text-md font-medium mb-2 text-gray-600">Mask Image</h4>
          <img
            src={maskImage}
            alt="Mask"
            className="border rounded max-w-full h-auto shadow"
          />
        </div>
      </div>
    </div>
  );
}

export default DisplayImages;
