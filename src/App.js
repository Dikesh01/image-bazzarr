import { useState } from "react";
import SearchBar from "./Components/SearchBar";
import ShowImage from "./Components/ShowImage";

function App() {
  const [images, setImages] = useState([]);
  return (
    <div className="App">
      <SearchBar setImages={setImages} />
      <ShowImage images={images} />
    </div>
  );
}

export default App;
