import React, { useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
import ViewBox from "./ViewBox";
import { ScrollToTop } from "./ScrollToTop";
import ImageItem from "./ImageItem";

function ImageGrid({ album, handleSetAlbum }) {
  var imageCount = [...new Array(1)];

  if (album === 1) imageCount = [...new Array(140)];
  if (album === 2) imageCount = [...new Array(106)];
  if (album === 3) imageCount = [...new Array(134)];
  const [imagesShownArray, setImagesShownArray] = useState(
    Array(imageCount.length).fill(false)
  );

  const imageVisibilityChange = (index, isVisible) => {
    if (isVisible) {
      setImagesShownArray((currentImagesShownArray) => {
        currentImagesShownArray[index] = true;
        return [...currentImagesShownArray];
      });
    }
  };

  //Test
  const [activeImage, setActiveImage] = useState(-1);
  return (
    <div>
      <ScrollToTop handleSetAlbum={handleSetAlbum} />
      {activeImage === -1 ? (
        ""
      ) : (
        <ViewBox
          activeImage={activeImage}
          handleActiveImage={setActiveImage}
          album={album}
          imageCount={imageCount.length}
        />
      )}
      <div
        className={`grid grid-cols-2 gap-0 ${
          activeImage !== -1 ? "blur-sm" : ""
        }`}>
        {imageCount.map((el, i) => {
          return (
            <ReactVisibilitySensor
              key={i}
              offset={{ bottom: 0 }}
              partialVisibility={true}
              onChange={(isVisible) => imageVisibilityChange(i, isVisible)}>
              {(isVisible) => (
                <ImageItem
                  key={"grid" + (i + 1)}
                  numb={i + 1}
                  album={album}
                  show={imagesShownArray[i]}
                  handleActiveImage={setActiveImage}
                />
              )}
            </ReactVisibilitySensor>
          );
        })}
      </div>
    </div>
  );
}

export default ImageGrid;
