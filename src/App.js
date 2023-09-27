import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Albums from "./components/Albums";
import AlbumBar from "./components/AlbumBar";
import ImageGrid from "./components/ImageGrid";

export default function App() {
  const [login, setLogin] = useState(false);
  const [password, setPassword] = useState("");
  const [album, setAlbum] = useState(0);

  function onChangePassword(password) {
    setPassword(password);
    if (password === "Hochzeit2023") setLogin(!login);
  }

  function handleSetAlbum(id) {
    setAlbum(id);
  }

  return (
    <div className="w-full">
      {login || (
        <Login onChangePassword={onChangePassword} password={password} />
      )}

      {login && (
        <div className="overflow-hidden">
          {album === 0 ? (
            <Albums onSetAlbum={handleSetAlbum} />
          ) : (
            <div>
              <AlbumBar handleSetAlbum={handleSetAlbum} album={album} />
              <ImageGrid album={album} handleSetAlbum={handleSetAlbum} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
