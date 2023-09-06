import React from "react";

const ShowImage = ({ images }) => {
  console.log(images);

  return (
    <div>
      <div className="imageClass">
        {images &&
          images.map((item, index) => (
            <div key={index}>
              <img src={item.urls.thumb} alt="img load.." />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ShowImage;
