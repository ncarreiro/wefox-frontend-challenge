// AXIOS
import useAxios from "axios-hooks";

// COMPONENTS
import PostsTable from "./components/PostsTable";

// STYLING
import "./App.css";

function App() {
  const [{ data: posts, loading, error }] = useAxios("/posts");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div className="App">
      <PostsTable />
    </div>
  );
}

export default App;
