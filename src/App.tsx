// MATERIAL UI COMPONENTS
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// COMPONENTS
import PostsGrid from "./components/PostsGrid";

function App() {
  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ my: 2 }}>
      <Grid item xs={12}>
        <Typography variant="h2" align="center" gutterBottom component="div">
          Wefox Frontend Challenge
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" align="center" gutterBottom component="div">
          by Nahuel Carreiro
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <PostsGrid />
      </Grid>
    </Grid>
  );
}

export default App;
