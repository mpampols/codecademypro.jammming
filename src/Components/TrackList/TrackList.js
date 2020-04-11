import React from "react";
import { Track } from "../Track/Track";
import "./TrackList.css";

export class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        {this.props.tracks.map(function (track) {
          return (
            <Track
              key={track.id}
              onAdd={track.onAdd}
              onRemove={track.onRemove}
              isRemoval={track.isRemoval}
            />
          );
        })}
      </div>
    );
  }
}
