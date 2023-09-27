import React from "react";

function Login({ onChangePassword, password }) {
  return (
    <div className="grid place-content-center  w-full mt-12 m-0 p-0">
      <div className="text-center content-center justify-center flex items-center flex-col">
        <h2 className="text-6xl lg:text-8xl pb-12 font-honey">Bildergalerie</h2>
        <img
          src="logo_lg2.png"
          className="lg:w-[50vw] w-[75vw] animate-hover "
          alt="Hello"
        />
        <h1 className="text-6xl lg:text-8xl mt-12 font-honey">
          Jessica & Pascal
        </h1>
        <h2 className="text-3xl lg:text-4xl font-book mt-3">4. August 2023</h2>
        <input
          placeholder="Passwort"
          value={password}
          onChange={(e) => onChangePassword(e.target.value)}
          className=" bg-[#eedfd3] border-0 border-b-2 border-black text-black placeholder-black text-center text-[16px] block focus:border-0  md:w-1/2 w-4/5 p-2.5 mt-6"
        />
      </div>
    </div>
  );
}

export default Login;
