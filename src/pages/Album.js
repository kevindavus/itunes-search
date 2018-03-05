import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../components/shared/PageWrapper";
import Header from "../components/shared/PageHeader";
import Cover from "../components/Album/Cover";
import Title from "../components/Album/Title";
import SongList from "../components/Album/List";
import Grid from "../components/Gallery/Grid";
import axios from "axios";
const readable = ms =>
  `${Math.floor(ms / 60000)}:${(((ms % 60000) / 1000).toFixed(0) < 10 ? "0" : "") + ((ms % 60000) / 1000).toFixed(0)}`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: []
    };
  }

  componentDidMount() {
    const url = this.state.id
      ? `https://itunes.apple.com/search?id=${this.state.id}&entity=song`
      : `https://itunes.apple.com/search?term=${this.props.match.params.artist}+${
          this.props.match.params.album
        }&entity=song`;
    axios
      .get(url, {})
      .then(response => {
        let songs = response.data.results.map(song => {
          console.log(song);
          return {
            cover: song.artworkUrl60,
            song: song.trackName,
            url: song.collectionViewUrl,
            time: readable(song.trackTimeMillis),
            album: this.props.match.params.album
          };
        });
        this.setState({ songs: songs, albumCover: songs[0].cover.replace("60x60bb", "600x600bb") });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const params = this.props.match.params;
    return (
      <Wrapper>
        <Header />
        <Cover img={this.state.albumCover}>
          <Title>{`${params.artist} - ${params.album}`}</Title>
        </Cover>
        <SongList songs={this.state.songs} />
      </Wrapper>
    );
  }
}

export default App;
