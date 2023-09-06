import { useState } from "react";
import Home from "./Components/SearchBar";
import ShowImage from "./Components/ShowImage";

function App() {
  const [images, setImages] = useState([]);
  return (
    <div className="App">
      <Home setImages={setImages} />
      <ShowImage images={images} />
    </div>
  );
}

export default App;
