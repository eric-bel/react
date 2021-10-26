import axios from "axios";
import React, { useEffect, useState } from "react";
import Memo from "../../Memo/Memo";
import "./Dogs.module.css";

const Dogs = (props) => {
  let [dog, setDogImg] = useState({ images: "" });

  async function getRandomImg() {
    let res = await axios.get("https://dog.ceo/api/breeds/image/random");
    setDogImg({ images: res.data.message });
  }

  useEffect(() => {
    console.log("didMount");
    return () => console.log("didWillUnMount");
  }, []);

  return (
    <>
      <h2>Cutes</h2>
      <img src={dog.images} alt="dogImg"></img>
      <div>
        <button onClick={() => getRandomImg()}>Get random dog image</button>
      </div>
      <div>
        <Memo />
      </div>
    </>
  );
};

export default Dogs;
