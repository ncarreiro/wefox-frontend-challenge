// MATERIAL UI COMPONENTS
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

// INTERFACES
import IPost from "../types/Post";

// NO IMAGE FALLBACK
import noImage from "../images/no-image.jpg";

const Post = ({
  id,
  title,
  image_url,
  content,
  lat,
  long,
  created_at,
  updated_at,
}: IPost) => (
  <Grid item>
    <Card sx={{ maxWidth: 345 }} data-testid={`post-${id}`}>
      <CardActionArea onClick={() => console.log("Card onClick action")}>
        <CardMedia
          data-testid={`post-${id}-image`}
          component="img"
          height="140"
          alt={title}
          image={image_url}
          onError={(event: any) => (event.target.src = noImage)}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Grid container>
            <Grid item xs>
              <Typography variant="body2" color="text.secondary">
                Latitude:
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="body2" color="text.secondary">
                {lat}
              </Typography>
            </Grid>
          </Grid>
          <Divider sx={{ my: 2 }} />
          <Grid container>
            <Grid item xs>
              <Typography variant="body2" color="text.secondary">
                Longitude:
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="body2" color="text.secondary">
                {long}
              </Typography>
            </Grid>
          </Grid>
          <Divider sx={{ my: 2 }} />
          <Grid container>
            <Grid item xs>
              <Typography variant="body2" color="text.secondary">
                Created at:
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="body2" color="text.secondary">
                {created_at}
              </Typography>
            </Grid>
          </Grid>
          <Divider sx={{ my: 2 }} />
          <Grid container sx={{ mb: 1 }}>
            <Grid item xs>
              <Typography variant="body2" color="text.secondary">
                Last updated:
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="body2" color="text.secondary">
                {updated_at}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
);

export default Post;
