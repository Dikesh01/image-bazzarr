import axios from "axios";
import React, { useEffect, useState } from "react";

function SearchBar({setImages}) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    getApiData();
  }, []);

  async function getApiData() {
    // if(search){
    // let res = await axios.get(`https://api.unsplash.com/search/photos?client_id=4_xfULwnfGcJRmalJ51RIcRVMutAiN9nSxaxcgOe-Yg&query=${search || "forest"}`);
    let res = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        // client_id: "4_xfULwnfGcJRmalJ51RIcRVMutAiN9nSxaxcgOe-Yg",
        query: search || "night beach",
      },
      headers: {
        Authorization: "Client-ID 4_xfULwnfGcJRmalJ51RIcRVMutAiN9nSxaxcgOe-Yg",
      },
    });
    setImages(res.data.results);
    // console.log(res.data.results);
    // }
  }

  return (
    <div>
      <div className="headingClass">
        <h1 style={{ color: "rgb(106, 106, 128)",marginBottom:"20px" ,fontFamily: "'Kalam', cursive" }}>Image Bazzar...</h1>
        <input
          type="text"
          placeholder="Search here..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={getApiData}>Search</button>
      </div>

    </div>
  );
}

export default SearchBar;
