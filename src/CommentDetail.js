import React from "react";
import faker from "faker";

const CommentDetail = props => {
  //console.log(props);
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.avatar} />
      </a>
      <div className="content"></div>
      <a href="/" className="author">
        {props.author}
      </a>
      <div className="metadata">
        <span className="date">{props.TimeAgo}</span>
      </div>
      <div className="text">{props.Text}</div>
    </div>
  );
};

export default CommentDetail;
