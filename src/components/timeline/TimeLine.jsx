import React from "react";
import Share from "../share/Share";
import "./Timeline.css";
import Post from "../post/Post";
import { Posts } from "../../dummyData";

export default function Timeline() {
  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />
        {Posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}
