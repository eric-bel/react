import React from "react";
import "./RenderImage.module.css";

class RenderImage extends React.Component {
  image = [
    "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80",
  ];
  links = [
    "https://images.unsplash.com/photo-1589254066007-898d52d910d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1589254066213-a0c9dc853511?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1589254065186-6dddccb78952?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
  ];
  constructor(props) {
    super(props);
    this.state = {
      img1: this.links[0],
      img2: this.links[1],
      img3: this.links[2],
    };
  }

  anotherImg = () => {
    this.setState((state) => ({
      img1: (state.img1 = this.image[0]),
      img2: (state.img1 = this.image[0]),
      img3: (state.img1 = this.image[0]),
    }));
  };

  render() {
    return (
      <>
        <img src={this.state.img1} alt="walli1"></img>
        <img src={this.state.img2} alt="walli2"></img>
        <img src={this.state.img3} alt="walli3"></img>
        <div>
          <button onClick={this.anotherImg}>Show a bad robot</button>
        </div>
      </>
    );
  }
}

export default RenderImage;
