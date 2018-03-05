import React from "react";
import { Image, List } from "semantic-ui-react";
import SongLI from "./SongLI";

const SongList = props => (
  <List divided relaxed>
    {props.songs.map(song => (
      <List.Item key={`${song.song} - ${song.time}`}>
        <List.Content>
          <SongLI>
            <a href={song.url}>
              <List.Header> {`${song.song} - ${song.time}`} </List.Header>
            </a>
          </SongLI>
        </List.Content>
      </List.Item>
    ))}
  </List>
);

export default SongList;
