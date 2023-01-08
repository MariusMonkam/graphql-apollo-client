import Paper from "@mui/material/Paper";
import React from "react";
import { IPost } from "../../../common/interfaces/post.interface";
import PostGridItem from "./posts-grid-item/posts-grid-item.component";
import "./posts-grid.component.tsx";

interface PostsGridProps {
  posts: IPost[];
}
const PostGrid: React.FC<PostsGridProps> = ({ posts }: PostsGridProps) => {
  return (
    <Paper elevation={3}>
      {posts.map((post) => (
        <div key={post.id}>
          <PostGridItem post={post} />
        </div>
      ))}
    </Paper>
  );
};

export default PostGrid;
