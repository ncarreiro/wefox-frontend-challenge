// AXIOS
import useAxios from "axios-hooks";

// INTERFACES
import IPost from "../types/Post";

// COMPONENTS
import Post from "./Post";

const PostsTable = () => {
  const [{ data: posts, loading, error }] = useAxios("/posts");

  if (loading) return <div data-testid="posts-table">Loading...</div>;
  if (error) return <div data-testid="posts-table">{error.message}</div>;

  return (
    <table data-testid="posts-table">
      <thead>
        <th>ID</th>
        <th>Title</th>
        <th>Image</th>
        <th>Content</th>
        <th>Latitude</th>
        <th>Longitude</th>
        <th>Created At</th>
        <th>Updated At</th>
      </thead>
      <tbody>
        {posts.map((post: IPost) => (
          <Post key={post.id} {...post} />
        ))}
      </tbody>
    </table>
  );
};

export default PostsTable;
