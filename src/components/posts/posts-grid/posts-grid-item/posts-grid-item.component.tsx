import React from "react";
import { IPost } from "../../../../common/interfaces/post.interface";
import "./posts-grid-item.component.css";

const PostGridItem: React.FC<{ post: IPost }> = ({ post }: { post: IPost }) => {
  return (
    <div>
      <p>{post.id}</p>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </div>
  );
};

export default PostGridItem;
