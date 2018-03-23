import React from 'react';
import axios from 'axios';
import Wrapper from '../components/shared/PageWrapper';
import Header from '../components/shared/PageHeader';
import Grid from '../components/Gallery/Grid';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
    };
  }
  componentDidMount() {
    axios
      .get(
        `https://itunes.apple.com/search?term=${this.props.match.params.artist}&entity=album`,
        {},
      )
      .then((response) => {
        const images = response.data.results.map(album => ({
          thumbnail: album.artworkUrl60,
          src: album.artworkUrl100.replace('100x100bb', '600x600bb'),
          alt: `${album.artistName} - ${album.collectionName}`,
          thumbnailWidth: 300,
          thumbnailHeight: 300,
          id: album.collectionId,
          artist: album.artistName,
          album: album.collectionName,
        }));
        this.setState({ images });
      });
  }

  render() {
    return (
      <div>
        <Header artist={this.props.match.params.artist} />
        <Wrapper>
          <Grid images={this.state.images} />
        </Wrapper>
      </div>
    );
  }
}

export default App;
