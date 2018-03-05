import React, { Component } from "react";
import styled from "styled-components";

const Thumbnail = styled("img")`
  width: 200px;
  height: 200px;
  margin 5px;
  position: relative;
  box-sizing: border-box;
  box-shadow: 3px 3px 2px 0px rgba(68,68,68, 0.4);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.05);
    
    &:after {
      opacity: 0;
    }
  }
`;

class Image extends Component {
  render() {
    return <Thumbnail src={this.props.src} alt={this.props.alt} />;
  }
}

export default Image;
