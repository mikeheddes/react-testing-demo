import React, { Component } from "react";

class Counter extends Component {
  state = { value: 0 };

  handleIncreaseCount = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    const { value } = this.state;
    return <div>
      <button onClick={this.handleIncreaseCount}>Increase counter</button>
      <p>{value}</p>
    </div>;
  }
}

export default Counter;
