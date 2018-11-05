import React, { Component } from "react";

import { Wrapper, Label } from "./Other";

function withScreenWidth(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.throttle("resize", "optimizedResize");
      this.state = {
        width: window.innerWidth
      };
    }

    componentDidMount() {
      window.addEventListener("optimizedResize", this.handleResize);
    }

    componentWillUnmount() {
      window.removeEventListener("optimizedResize", this.handleResize);
    }

    throttle(type, name, obj) {
      obj = obj || window;
      var running = false;
      var func = function() {
        if (running) {
          return;
        }
        running = true;
        requestAnimationFrame(function() {
          obj.dispatchEvent(new CustomEvent(name));
          running = false;
        });
      };
      obj.addEventListener(type, func);
    }

    handleResize = () => {
      this.setState({
        width: window.innerWidth
      });
    };

    render() {
      return <WrappedComponent width={this.state.width} {...this.props} />;
    }
  };
}

const ScreenWidth = ({ width }) => (
  <Wrapper color="#855FEB">
    <Label>{width} px</Label>
  </Wrapper>
);

export { ScreenWidth };

export default withScreenWidth(ScreenWidth);
