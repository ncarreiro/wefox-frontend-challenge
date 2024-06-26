// REACT
import { useState } from "react";

// MATERIAL UI COMPONENTS
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";

// ICONS
import MapIcon from "@mui/icons-material/Map";

// COMPONENTS
import EditPostForm from "../forms/EditPostForm";

// INTERFACES
import IPost from "../../types/Post";

// NO IMAGE FALLBACK
import noImage from "./images/no-image.jpg";

// STYLING
import "./styles/PostCard.scss";

interface IPostCardComponent extends IPost {
  onPostChange: (post: IPost) => void;
  onPostDelete: (id: number) => void;
}

const PostCard = ({
  id,
  title,
  image_url,
  content,
  lat,
  long,
  created_at,
  updated_at,
  onPostChange,
  onPostDelete,
}: IPostCardComponent) => {
  const [showDrawer, setShowDrawer] = useState(false);

  const handleEditSubmit = (post: IPost) => {
    setShowDrawer(false);
    onPostChange(post);
  };

  const handleDeleteSubmit = (id: number) => {
    setShowDrawer(false);
    onPostDelete(id);
  };

  return (
    <Grid item>
      <Card sx={{ maxWidth: 345 }} data-testid={`post-${id}`}>
        <CardActionArea onClick={() => setShowDrawer(true)}>
          <CardMedia
            data-testid={`post-${id}-image`}
            component="img"
            height="220"
            alt={title}
            image={image_url}
            onError={(event: any) => (event.target.src = noImage)}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="primary"
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className="post__content"
            >
              {content}
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Grid container>
              <Grid item xs>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontWeight="bold"
                >
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
                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontWeight="bold"
                >
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
                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontWeight="bold"
                >
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
                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontWeight="bold"
                >
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
        <Grid container sx={{ p: 2 }} className="post__actions">
          <Button
            href={`https://www.google.com/maps?q=${lat},${long}`}
            target="_blank"
            startIcon={<MapIcon />}
          >
            Open in Google Maps
          </Button>
        </Grid>
      </Card>
      <Drawer
        anchor="right"
        open={showDrawer}
        onClose={() => setShowDrawer(false)}
      >
        <EditPostForm
          {...{
            id,
            title,
            image_url,
            content,
            lat,
            long,
            created_at,
            updated_at,
          }}
          onSubmit={(post: IPost) => handleEditSubmit(post)}
          onDelete={(id: number) => handleDeleteSubmit(id)}
          onCancel={() => setShowDrawer(false)}
        />
      </Drawer>
    </Grid>
  );
};

export default PostCard;
