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
  const [{ data: posts, loading, error }, refetch] = useAxios(
    "http://localhost:3000/api/v1/posts"
  );

  return (
    <div className="App">
      {loading ? (
        <div>Loading Posts...</div>
      ) : error ? (
        <div>{error.message}</div>
      ) : (
        posts.map((post: IPost) => (
          <div style={{ margin: 20 }}>
            <div>{post.title}</div>
            <img
              src={post.image_url}
              style={{ maxWidth: 400 }}
              onError={(event: any) => (event.target.src = noImage)}
            />
            <div>{post.content}</div>
            <div>{post.lat}</div>
            <div>{post.long}</div>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
