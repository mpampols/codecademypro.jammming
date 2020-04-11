import React from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResults } from "../SearchResults/SearchResults";
import { Playlist } from "../Playlist/Playlist";
import "../Playlist/Playlist.css";

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [
        { id: 0, name: "", artist: "", album: "" },
        { id: 0, name: "", artist: "", album: "" },
      ],
      playlistName: "",
      playlistTracks: [
        { id: 0, name: "", artist: "", album: "" },
        { id: 0, name: "", artist: "", album: "" },
      ],
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

  addTrack(track) {
    if (
      this.state.playlistTracks.find((savedTrack) => savedTrack.id === track.id)
    ) {
      return;
    }

    this.state.playlistTracks.push(track);
  }

  removeTrack(track) {
    this.state.playlistTracks.pop(track.id);
  }

  updatePlaylistName(name) {
    this.state.playlistName = name;
  }

  savePlaylist() {
    const trackURIs 
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span class="highlight">mmm</span>ing
        </h1>
        <div class="App">
          <SearchBar />
          <div class="App-playlist">
            <SearchResults
              onAdd={this.addTrack}
              searchResults={this.state.searchResults}
            />
            <Playlist
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
            />
          </div>
        </div>
      </div>
    );
  }
}
