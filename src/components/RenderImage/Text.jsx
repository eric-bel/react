import React from "react";

class Text extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState(() => ({
      count: this.state.count + 1,
    }));
  };

  decrement = () => {
    this.setState(() => ({
      count: this.state.count - 1,
    }));
  };

  reset = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <div>
        <h2> Current {this.state.count}</h2>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}

export default Text;