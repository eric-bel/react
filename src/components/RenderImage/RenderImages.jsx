import React, { useState } from "react";
import "./RenderImage.module.css";

let walliLinks = {
  imgFirst:
    "https://images.unsplash.com/photo-1589254065186-6dddccb78952?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
  imgSecond:
    "https://images.unsplash.com/photo-1589254066213-a0c9dc853511?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  imgThird:
    "https://images.unsplash.com/photo-1589254066007-898d52d910d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
};

const RenderImages = (props) => {
  const [walli, changeImg] = useState(walliLinks);

  return (
    <>
      <h2>Hello {props.name}</h2>
      <img src={walli.imgFirst} alt="walli1"></img>
      <div>
        <button
          onClick={() =>
            changeImg({
              imgFirst: walli.imgSecond,
              imgSecond: walli.imgThird,
              imgThird: walli.imgFirst,
            })
          }
        >
          Change image, {props.name}
        </button>
        <hr />
      </div>
    </>
  );
};

export default RenderImages;
