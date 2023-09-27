import React from "react";

function AlbumItem({ source, text, onSetAlbum, id }) {
  return (
    <div
      className="relative group transition duration-500 cursor-pointer"
      onClick={() => onSetAlbum(id)}>
      {/* WRAPPER HOVER AND TEXT */}
      <div className="absolute inset-0 z-10 flex transition duration-200 ease-in hover:opacity-0">
        <div className="absolute inset-0 bg-[#000000] opacity-70"></div>
        <div className="absolute inset-4  border-2 border-white opacity-100"></div>
        <div className="mx-auto text-white z-10 self-center uppercase tracking-widest text-sm group-hover:scale-150 group-hover:-translate-y-35 ease-in-out duration-200 font-book text-[4vw]">
          {text}
        </div>
      </div>
      {/* IMAGE */}
      <div className=" border-0 overflow-hidden ">
        <img
          src={source}
          alt="123"
          className="scale-110 group-hover:scale-100 transition duration-100 ease-in w-screen object-center object-cover h-[33.333vh] lg:mx-auto "
        />
      </div>
    </div>
  );
}

export default AlbumItem;
