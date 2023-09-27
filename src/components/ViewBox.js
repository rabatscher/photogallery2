import React, { useEffect } from "react";

import ViewBoxItem from "./ViewBoxItem";
import { AiOutlineClose, AiOutlineCloudDownload } from "react-icons/ai";

function ViewBox({ activeImage, handleActiveImage, album, style, imageCount }) {
  useEffect(() => {
    return () => {
      const element = document.getElementById("#schlossheidegg_014.jpg");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen z-40 grid place-content-center `}>
      {/* <div className="absolute inset-0 z-30 flex"> */}
      {/* <div className="fixed bottom-2 left-2 z-40">
        <a
          href={`#schlossheidegg_${
            activeImage < 10
              ? "00" + (activeImage + 1)
              : "0" + (activeImage + 1)
          }.jpg`}
          className="
         hover:bg-[#f6b284] hover:ring-[#f6b284] inline-flex items-center p-3 text-white transition-opacity focus:outline-none hover:ring-2 focus:ring-offset-2">
          <AiOutlineClose className="h-8 w-8" aria-hidden="true" />
        </a>
      </div> */}
      <div className="fixed bottom-[3vh] z-50 right-[48%]">
        <p className="text-xs text-white">
          {activeImage} | {imageCount}
        </p>
      </div>
      <div className="fixed top-2 right-2 z-40">
        <button
          onClick={() => handleActiveImage(-1)}
          className="
         hover:bg-[#f6b284] hover:ring-[#f6b284] inline-flex items-center p-3 text-white transition-opacity focus:outline-none hover:ring-2 focus:ring-offset-2">
          <AiOutlineClose className="h-8 w-8" aria-hidden="true" />
        </button>
      </div>

      <div className="fixed bottom-2 right-2 z-40">
        <a
          href={`images/${
            { 1: "Schlossheidegg_", 2: "Schifflaende_", 3: "Photobox_" }[album]
          }${activeImage}.jpg`}
          download={`${
            { 1: "Schlossheidegg_", 2: "Schifflaende_", 3: "Photobox_" }[album]
          }${activeImage}.jpg`}
          className="
         hover:bg-[#f6b284] hover:ring-[#f6b284] inline-flex items-center p-3 text-white transition-opacity focus:outline-none hover:ring-2 focus:ring-offset-2">
          <AiOutlineCloudDownload className="h-8 w-8" aria-hidden="true" />
        </a>
      </div>
      <div
        className="absolute inset-0 bg-[#000000] opacity-70 "
        onClick={() => handleActiveImage(-1)}></div>

      {/* </div> */}
      <div className="flex absoulte text-white z-50 inline-0 max-w-[100vw] max-h-[80vh] place-content-center gap-8 ">
        <ViewBoxItem
          key={"view" + activeImage}
          activeImage={activeImage}
          handleActiveImage={handleActiveImage}
          imageCount={imageCount}
          album={album}
        />
      </div>
    </div>
  );
}

export default ViewBox;
