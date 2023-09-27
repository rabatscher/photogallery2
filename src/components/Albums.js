import React from "react";
import AlbumItem from "./AlbumItem";

export default function Albums({ onSetAlbum }) {
  return (
    // WRAPPER
    <div className="flex flex-col grow gap-0 w-full h-screen">
      <AlbumItem
        text="Schloss Heidegg"
        source="albums/album_001.jpg"
        id={1}
        onSetAlbum={onSetAlbum}
      />
      <AlbumItem
        text="Schifflände"
        source="albums/album_002.jpg"
        id={2}
        onSetAlbum={onSetAlbum}
      />
      <AlbumItem
        text="Photobox"
        source="albums/album_003.jpg"
        id={3}
        onSetAlbum={onSetAlbum}
      />
    </div>
  );
}
