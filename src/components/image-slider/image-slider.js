import React from "react";
import "./image-slider.css";
import SimpleImageSlider from "react-simple-image-slider";

class ImageSlider extends React.Component {
  render() {
    const images = [
      { url: "images/1.jpg" },
      { url: "images/2.jpg" },
      { url: "images/3.jpg" },
      { url: "images/4.jpg" },
      { url: "images/5.jpg" },
      { url: "images/6.jpg" },
      { url: "images/7.jpg" }
    ];

    return (
      <div className="slide-show">
        <SimpleImageSlider width={696} height={330} images={images} />
      </div>
    );
  }
}

export default ImageSlider;
