import React from "react";
import "./Track.css";

export class Track extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      artist: "",
      album: "",
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack() {
    this.props.onAdd(this.props.track);
  }

  removeTrack() {
    this.props.playlistTracks.removeTrack();
  }

  renderAction() {
    if (this.props.isRemoval) {
      return (
        <button className="Track-action" onClick={this.removeTrack}>
          -
        </button>
      );
    } else {
      return (
        <button className="Track-action" onClick={this.addTrack}>
          +
        </button>
      );
    }
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.name}</h3>
          <p>
            {this.props.artist}|{this.props.album}
          </p>
        </div>
        <button className="Track-action"></button>
      </div>
    );
  }
}
