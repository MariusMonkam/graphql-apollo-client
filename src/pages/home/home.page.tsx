import React from "react";
import PostGrid from "../../components/posts/posts-grid/posts-grid.component";
import { useGetPosts } from "../../hooks/posts/useGetPosts";

import "./home.page.css";

const Home: React.FC = () => {
  // const posts: IPost[] = [
  //   {
  //     id: "1",
  //     title: "Post One",
  //     body: "Body of post one",
  //   },
  // ];

  const posts = useGetPosts();
  return (
    <div className="home">
      <PostGrid posts={posts || []} />
    </div>
  );
};

export default Home;
