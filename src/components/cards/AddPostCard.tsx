// REACT
import { useState } from "react";

// MATERIAL UI COMPONENTS
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";

// ICONS
import AddCircleIcon from "@mui/icons-material/AddCircle";

// COMPONENTS
import AddPostForm from "../forms/AddPostForm";

// INTERFACES
import IPost from "../../types/Post";

// STYLING
import "./styles/PostCard.scss";

interface IAddPostCard {
  onPostAdd: (post: IPost) => void;
}

const AddPostCard = ({ onPostAdd }: IAddPostCard) => {
  const [showDrawer, setShowDrawer] = useState(false);

  const handleAddSubmit = (post: IPost) => {
    setShowDrawer(false);
    onPostAdd(post);
  };

  return (
    <Grid item data-testid="post-add">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={() => setShowDrawer(true)}>
          <CardContent>
            <Grid
              container
              flexDirection="column"
              alignItems="center"
              rowGap={2}
              sx={{ p: 2 }}
            >
              <AddCircleIcon
                fontSize="large"
                color="primary"
                data-testid="post-add-icon"
              />
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color="primary"
                data-testid="post-add-text"
              >
                Add post
              </Typography>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
      <Drawer
        anchor="right"
        open={showDrawer}
        onClose={() => setShowDrawer(false)}
        data-testid="post-add-drawer"
      >
        <AddPostForm
          onSubmit={(data: IPost) => handleAddSubmit(data)}
          onCancel={() => setShowDrawer(false)}
        />
      </Drawer>
    </Grid>
  );
};

export default AddPostCard;
