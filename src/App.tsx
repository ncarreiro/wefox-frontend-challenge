import "./App.css";
import Axios from "axios";
import useAxios, { configure } from "axios-hooks";
import noImage from "./images/no-image.jpg";

const axios = Axios.create({
  baseURL: "http://localhost:3000/api/v1",
});

configure({ axios });

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
  const [{ data: posts, loading, error }] = useAxios("/posts");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
