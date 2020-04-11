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
        { id: 1, name: "", artist: "", album: "" },
      ],
      playlistName: "",
      playlistTracks: [
        { id: 0, name: "", artist: "", album: "" },
        { id: 1, name: "", artist: "", album: "" },
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

    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  removeTrack(track) {
    this.state.playlistTracks.pop(track.id);
  }

  updatePlaylistName(name) {
    this.setState({
      playlistName: name,
    });
  }

  savePlaylist() {
    const trackURIs = this.state.playlistTracks;
  }

  search(term) {
    console.log(term);
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults
              onAdd={this.addTrack}
              searchResults={this.state.searchResults}
            />
            <Playlist
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
            />
          </div>
        </div>
      </div>
    );
  }
}
