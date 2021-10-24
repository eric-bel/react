import React from "react";
import ReactDOM from "react-dom";
// import RenderImage from "./components/RenderImage/RenderImage";
import RenderImages from "./components/RenderImage/RenderImages";
import Text from "./components/RenderImage/Text";
import "./index.css";

class App extends React.Component {
  render() {
    return (
      <>
        <RenderImages name = "User"/>
        <Text />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
