import React, { useRef, useState } from "react";
import CanvasDraw from "react-canvas-draw";

function CanvasDrawComponent({ originalImage, setMaskImage }) {
  const canvasRef = useRef(null);
  const [brushSize, setBrushSize] = useState(5);

  const handleExport = () => {
    if(canvasRef.current) {
      // Access the drawing canvas layer
      const canvasDrawInstance = canvasRef.current;
      const drawingCanvas = canvasDrawInstance.canvas.drawing; // The stroke layer
      const backgroundCanvas = canvasDrawInstance.canvas.grid; // The background layer

      // Ensure bith the canvases are valid
      if(drawingCanvas && backgroundCanvas){
        const exportCanvas = document.createElement("canvas");
        const exportContext = exportCanvas.getContext("2d");

        exportCanvas.width = drawingCanvas.width;
        exportCanvas.height = drawingCanvas.height;

        // Fill the background with black
        exportContext.fillStyle = "#000000";
        exportContext.fillRect(0, 0, exportCanvas.width, exportCanvas.height);

        // Draw the strokes layer on top
        exportContext.drawImage(drawingCanvas, 0, 0);

        // Export the final image
        const maskDataUrl = exportCanvas.toDataURL("image/png");

        if(maskDataUrl){
            setMaskImage(maskDataUrl);
        }else{
            alert("Failed to generate mask image.")
        }
      } else {
        alert("Canvas is not initialized")
      }
    } else {
        alert("Canvas reference is invalid.");
    }
  };

  const handleClear = () => {
    canvasRef.current.clear();
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6 w-full max-w-4xl">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Draw Mask</h3>
      <CanvasDraw
        ref={canvasRef}
        imgSrc={originalImage}
        brushRadius={brushSize}
        lazyRadius={0}
        canvasWidth={600}
        canvasHeight={400}
        hideGrid={true}
        backgroundColor="#000000"
        brushColor="#FFFFFF"
        className="border rounded shadow-md"
      />
      <div className="flex items-center gap-4 mt-4">
        <label htmlFor="brushSize" className="text-gray-700">
          Brush Size:
        </label>
        <input
          type="range"
          id="brushSize"
          min="1"
          max="50"
          value={brushSize}
          onChange={(e) => setBrushSize(Number(e.target.value))}
          className="w-full"
        />
      </div>
      <div className="flex gap-4 mt-4">
        <button
          onClick={handleExport}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 shadow"
        >
          Save Mask
        </button>
        <button
          onClick={handleClear}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 shadow"
        >
          Clear Canvas
        </button>
      </div>
    </div>
  );
}

export default CanvasDrawComponent;
