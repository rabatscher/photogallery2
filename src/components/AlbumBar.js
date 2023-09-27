import React from "react";
import { BiArrowBack } from "react-icons/bi";
export default function AlbumBar({ handleSetAlbum, album }) {
  return (
    <div className="grid  grid-col-2 grid-flow-col auto-cols-min justify-self-stretch">
      <div className="grid content-center justify-center">
        <button
          onClick={() => handleSetAlbum(0)}
          type="button"
          className=" text-white border-white border-2 m-4  py-2 hover:bg-[#f6b284] hover:border-transparent hover:text-white aspect-square w-[8vw] max-w-[80px] h-[8vw] max-h-[80px] grid content-center justify-center">
          <div className="">
            <BiArrowBack className="h-6 w-6" aria-hidden="true" />
          </div>
        </button>
      </div>
      <div className=" text-[6vw]  grid content-center  w-[80vw] justify-center">
        <p className="font-honey">
          {album === 1 ? "Schloss Heidegg" : ""}
          {album === 2 ? "Schifflände" : ""}
          {album === 3 ? "Photobox" : ""}
        </p>
      </div>
    </div>
  );
}
