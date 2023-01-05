import React from "react";
import { IPost } from "../../../common/interfaces/post.interface";
import PostGridItem from "./posts-grid-item/posts-grid-item.component";
import "./posts-grid.component.tsx";

interface PostsGridProps {
  posts: IPost[];
}
const PostGrid: React.FC<PostsGridProps> = ({ posts }: PostsGridProps) => {
  return (
    <div className="posts-grid">
      {posts.map((post) => (
        <div key={post.id}>
          <PostGridItem post={post} />
        </div>
      ))}
    </div>
  );
};

export default PostGrid;
