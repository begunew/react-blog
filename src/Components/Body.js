import React from "react";
import { Post } from "./Post";
import { Write } from "./Write";

const postArr = { post: ["friends!", "world!"] };

export const Body = (post) => {
  return (
    <section className="content-body">
      <div>
        <Post name="Bilguun" post={postArr.post[0]} />
      </div>
      <div>
        <Post name="Rush" post={postArr.post[1]} />
      </div>
      <div>
        <Write />
      </div>
      <br />
    </section>
  );
};
