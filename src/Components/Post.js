import React from "react";

export const Post = (props) => {
  return (
    <div className="post">
      <h3>{props.name} posted:</h3>
      <p>Hello {props.post}</p>
      <button className="delete-button">Delete</button>
    </div>
  );
};
