import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../components/album/PageWrapper';
import Header from '../components/shared/PageHeader';
import Cover from '../components/Album/Cover';
import Title from '../components/Album/Title';
import SongList from '../components/Album/List';
import Grid from '../components/Gallery/Grid';
import axios from 'axios';

const readable = ms =>
  `${Math.floor(ms / 60000)}:${(((ms % 60000) / 1000).toFixed(0) < 10 ? '0' : '') +
    ((ms % 60000) / 1000).toFixed(0)}`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: [],
    };
  }

  componentDidMount() {
    const url = this.props.location.state
      ? `https://itunes.apple.com/lookup?id=${this.props.location.state.id}&entity=song`
      : `https://itunes.apple.com/search?term=${this.props.match.params.artist}+${
        this.props.match.params.album
      }&entity=song`;
    axios.get(url, {}).then((response) => {
      const songs = response.data.results
        .map(song => ({
          cover: song.artworkUrl60,
          song: song.trackName,
          url: song.collectionViewUrl,
          time: readable(song.trackTimeMillis),
          album: song.collectionName,
          number: song.trackNumber,
          id: song.collectionId,
        }))
        .filter(song => song.album == this.props.match.params.album);
      this.setState({ songs, albumCover: songs[0].cover.replace('60x60bb', '300x300bb') });
    });
  }

  render() {
    const params = this.props.match.params;
    return (
      <div>
        <Header />
        <Wrapper>
          <Cover>
            <Title>{`${params.artist} - ${params.album}`}</Title>
            <img src={this.state.albumCover} alt={`${params.artist} - ${params.album}`} />
          </Cover>
          <SongList songs={this.state.songs} />
        </Wrapper>
      </div>
    );
  }
}

export default App;
