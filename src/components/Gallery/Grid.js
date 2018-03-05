import React, { Component } from "react";
import { Link } from "react-router-dom";
import Image from "./Image";
import styled from "styled-components";

const PhotoGrid = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 200px;
  grid-auto-flow: row;
`;
// Component for gallery
class Grid extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PhotoGrid refs="gallery-container" className="container-fluid gallery-container">
        {this.props.images.map(image => {
          return (
            <Link
              key={image.id}
              to={{
                pathname: `/Album/${image.artist}/${image.album}`,
                state: {
                  id: image.id,
                  albumCover: image.thumbnail
                }
              }}
            >
              <Image src={image.src} alt={image.alt} />
            </Link>
          );
        })}
      </PhotoGrid>
    );
  }
}

export default Grid;
