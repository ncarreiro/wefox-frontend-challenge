// REACT
import { useEffect, useState } from "react";

// AXIOS
import useAxios from "axios-hooks";

// INTERFACES
import IPost from "../types/Post";

// MATERIAL UI COMPONENTS
import Grid from "@mui/material/Grid";

// COMPONENTS
import Post from "./Post";

const PostsGrid = () => {
  const [{ data, loading, error }] = useAxios("/posts");
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => setPosts(data), [data]);

  if (loading) return <div data-testid="posts-table">Loading...</div>;
  if (error) return <div data-testid="posts-table">{error.message}</div>;

  const handleOnPostChange = (post: IPost) => {
    const newPosts = [...posts].map((newPost: IPost) => {
      if (newPost.id === post.id) return post;
      return newPost;
    });
    newPosts.length && setPosts(newPosts);
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      spacing={4}
      data-testid="posts-table"
      sx={{ my: 2 }}
    >
      {posts?.map((post: IPost) => (
        <Post
          {...post}
          key={post.id}
          onPostChange={(post: IPost) => handleOnPostChange(post)}
        />
      ))}
    </Grid>
  );
};

export default PostsGrid;
