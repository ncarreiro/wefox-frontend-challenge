// REACT
import { useEffect, useState } from "react";

// AXIOS
import useAxios from "axios-hooks";

// INTERFACES
import IPost from "../types/Post";

// MATERIAL UI COMPONENTS
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// COMPONENTS
import PostCard from "./PostCard";
import AddPostCard from "./AddPostCard";

const PostsGrid = () => {
  const [{ data, loading, error }] = useAxios("/posts");
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => setPosts(data), [data]);

  if (loading)
    return (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ my: 2 }}
        data-testid="posts-table"
      >
        <Typography
          variant="h4"
          align="center"
          component="div"
          className="app__title"
        >
          Loading...
        </Typography>
      </Grid>
    );

  if (error)
    return (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ my: 2 }}
        data-testid="posts-table"
      >
        <Typography
          variant="h4"
          align="center"
          component="div"
          fontWeight="700"
          className="app__title"
        >
          {error.message}
        </Typography>
      </Grid>
    );

  const handleOnPostChange = (post: IPost) => {
    const newPosts =
      [...posts].map((newPost: IPost) =>
        newPost.id === post.id ? post : newPost
      ) || [];
    setPosts(newPosts);
  };

  const handleOnPostDelete = (id: number) => {
    const newPosts = [...posts].filter((oldPost) => oldPost.id !== id) || [];
    setPosts(newPosts);
  };

  const handleOnPostAdd = (newPost: IPost) => {
    setPosts([...posts, newPost]);
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
      <AddPostCard onPostAdd={(post: IPost) => handleOnPostAdd(post)} />
      {posts?.map((post: IPost) => (
        <PostCard
          {...post}
          key={post.id}
          onPostChange={(post: IPost) => handleOnPostChange(post)}
          onPostDelete={(id: number) => handleOnPostDelete(id)}
        />
      ))}
    </Grid>
  );
};

export default PostsGrid;
