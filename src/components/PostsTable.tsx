// AXIOS
import useAxios from "axios-hooks";

// INTERFACES
import IPost from "../types/Post";

// COMPONENTS
import Post from "./Post";

const PostsTable = () => {
  const [{ data: posts, loading, error }] = useAxios("/posts");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <table>
      <thead>
        <td>Title</td>
        <td>Image</td>
        <td>Content</td>
        <td>Latitude</td>
        <td>Longitude</td>
        <td>Created At</td>
        <td>Updated At</td>
      </thead>
      <tbody>
        {posts.map((post: IPost) => (
          <Post {...post} />
        ))}
      </tbody>
    </table>
  );
};

export default PostsTable;
