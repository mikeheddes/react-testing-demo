import React, { Component } from "react";
import PropTypes from "prop-types";

import { Wrapper, Label } from "./Other";

function withScreenWidth(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        width: window.innerWidth
      };
      this.handleResize = this.handleResize.bind(this);
      // Keep separate from state because a change should not cause a rerender
      this.updating = false;
    }

    componentDidMount() {
      window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.handleResize);
    }

    handleResize() {
      if (this.updating) return;
      this.updating = true;

      requestAnimationFrame(() => {
        this.setState({ width: window.innerWidth }, () => {
          this.updating = false;
        });
      });
    }

    render() {
      return <WrappedComponent width={this.state.width} {...this.props} />;
    }
  };
}

export const ScreenWidth = ({ width }) => (
  <Wrapper color="#855FEB">
    <Label>{width} px</Label>
  </Wrapper>
);

ScreenWidth.propTypes = {
  width: PropTypes.number.isRequired
};

export default withScreenWidth(ScreenWidth);
