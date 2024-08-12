import React from "react";
import Share from "../share/Share";
import "./Timeline.css";
import Post from "../post/Post";

export default function Timeline() {
  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
