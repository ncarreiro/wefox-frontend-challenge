// AXIOS
import useAxios from "axios-hooks";

// INTERFACES
import IPost from "../types/Post";

// MATERIAL UI COMPONENTS
import Grid from "@mui/material/Grid";

// COMPONENTS
import Post from "./Post";

const PostsGrid = () => {
  const [{ data: posts, loading, error }] = useAxios("/posts");

  if (loading) return <div data-testid="posts-table">Loading...</div>;
  if (error) return <div data-testid="posts-table">{error.message}</div>;

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      spacing={2}
      data-testid="posts-table"
      sx={{ my: 2 }}
    >
      {posts.map((post: IPost) => (
        <Post key={post.id} {...post} />
      ))}
    </Grid>
  );
};

export default PostsGrid;
