// MATERIAL UI COMPONENTS
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// COMPONENTS
import PostsGrid from "./components/PostsGrid";

// STYLING
import "./App.scss";

function App() {
  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ py: 2 }}>
      <Grid item xs={12} sx={{ my: 2 }}>
        <Typography
          variant="h4"
          align="center"
          component="div"
          fontWeight="700"
          className="app__title"
        >
          Wefox <span className="app__title--secondary">Frontend</span>{" "}
          Challenge
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <PostsGrid />
      </Grid>
    </Grid>
  );
}

export default App;
