import React from "react";

function ImageItem({ album, show, handleActiveImage, numb }) {
  return (
    <div
      className={`relative aspect-video group transition duration-500 overflow-hidden cursor-pointer ${
        show ? "" : "opacity-0"
      }`}
      onClick={() => handleActiveImage(numb)}>
      <div className="absolute inset-0 z-10 flex transition duration-200 ease-in group-hover:opacity-0">
        <div className="absolute inset-0 bg-[#000000] opacity-50"></div>
        <div className="absolute inset-3  border-2 border-white opacity-100"></div>
      </div>
      <div className="transition scale-110 group-hover:scale-100 duration-100 ease-in">
        <img
          src={`/thumbs/${
            { 1: "Schlossheidegg_", 2: "Schifflaende_", 3: "Photobox_" }[album]
          }${numb}.jpg`}
          alt={album}
          className=""
        />
      </div>
    </div>
  );
}

export default ImageItem;
