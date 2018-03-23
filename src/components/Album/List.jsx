import React from 'react';
import SongLI from './SongLI';
import TrackNumber from './TrackNumber';
import SongName from './SongName';
import SongTime from './SongTime';

const SongList = (props) => {
  const songs = props.songs.sort((a, b) => {
    if (a.id < b.id) {
      return -1;
    } else if (a.id > b.id) {
      return 1;
    }
    if (a.number < b.number) {
      return -1;
    }
    return 1;
  });

  return (
    <div>
      <SongLI href="" key="titles">
        <TrackNumber />
        <SongName>TITLE</SongName>
        <SongTime>TIME</SongTime>
      </SongLI>
      {songs.map(song => (
        <SongLI href={song.url} key={`${song.song} - ${song.time}`}>
          <TrackNumber> {song.number}</TrackNumber>
          <SongName>{song.song}</SongName>
          <SongTime>{song.time}</SongTime>
        </SongLI>
      ))}
    </div>
  );
};

export default SongList;
