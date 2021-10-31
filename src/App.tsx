import "./App.css";
import useAxios from "axios-hooks";
import noImage from "./images/no-image.jpg";

interface IPost {
  id: number;
  title: string;
  content: string;
  lat: string;
  long: string;
  image_url: string;
  created_at: string;
  updated_at: string;
}

function App() {
  const [{ data: posts, loading, error }] = useAxios(
    "http://localhost:3000/api/v1/posts"
  );

  return (
    <div className="App">
      {loading ? (
        <div>Loading Posts...</div>
      ) : error ? (
        <div>{error.message}</div>
      ) : (
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
              <tr>
                <td>{post.title}</td>
                <td>
                  <img
                    src={post.image_url}
                    style={{ maxWidth: 400 }}
                    onError={(event: any) => (event.target.src = noImage)}
                  />
                </td>
                <td>{post.content}</td>
                <td>{post.lat}</td>
                <td>{post.long}</td>
                <td>{post.created_at}</td>
                <td>{post.updated_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
