import React, {useState} from "react";
import ImageUpload from "./components/ImageUpload";
import CanvasDrawComponent from "./components/CanvasDraw";
import DisplayImages from "./components/DisplayImages";

function App() {
  const [originalImage, setOriginalImage] = useState(null);
  const [maskImage, setMaskImage] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-blue-200 flex flex-col items-center p-6">
      <header className="w-full text-center mb-6">
        <h1 className="text-5xl font-bold text-blue-800 mb-2">Maskify</h1>
        <p className="text-lg text-gray-600">Create and export masks with ease</p>
      </header>
      <ImageUpload setOriginalImage={setOriginalImage} />
      {originalImage && (
        <CanvasDrawComponent
          originalImage={originalImage}
          setMaskImage={setMaskImage}
        />
      )}
      {maskImage && (
        <DisplayImages originalImage={originalImage} maskImage={maskImage} />
      )}
    </div>
  );
}

export default App;