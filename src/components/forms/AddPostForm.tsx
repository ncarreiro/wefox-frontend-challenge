// REACT
import { useContext } from "react";

// AXIOS
import useAxios from "axios-hooks";

// FORMIK
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-mui";

// MATERIAL UI COMPONENTS
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

// MATERIAL ICONS
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

// CONTEXTS
import { NotificationContext } from "../../App";

// INTERFACES
import IPost from "../../types/Post";

// STYLING
import "./AddPostForm.scss";

interface IAddPost {
  onSubmit: (post: IPost) => void;
  onCancel: () => void;
}

const AddPostForm = ({ onSubmit, onCancel }: IAddPost) => {
  // NOTIFICATION CONTEXT
  const { dispatch: notificationPush } = useContext(NotificationContext);

  // AXIOS PUT METHOD
  const [{ loading: addLoading, error: addError }, executePost] = useAxios(
    {
      url: `/posts`,
      method: "POST",
    },
    { manual: true }
  );

  const handleSubmit = async (values: IPost) => {
    try {
      await executePost({
        data: {
          title: values.title,
          content: values.content,
          image_url: values.image_url,
          lat: values.lat,
          long: values.long,
        },
      }).then(({ data: post }) => {
        notificationPush({
          type: "success",
          message: `Post ${values.title} added`,
        });
        onSubmit(post);
      });
    } catch (e) {
      notificationPush({ type: "error", message: `${addError || e}` });
    }
  };

  return (
    <Formik
      initialValues={{
        id: 0,
        title: "",
        content: "",
        image_url: "",
        lat: "",
        long: "",
      }}
      validate={(values: IPost) => {
        const errors: Partial<IPost> = {};
        if (!values.title) {
          errors.title = "Required";
        }
        if (!values.image_url) {
          errors.image_url = "Required";
        }
        if (!values.content) {
          errors.content = "Required";
        }
        return errors;
      }}
      onSubmit={(values: IPost) => handleSubmit(values)}
    >
      {({ submitForm }) => (
        <Form style={{ height: "100%" }}>
          <Grid
            container
            flexDirection="column"
            sx={{ width: 460, height: "100%" }}
          >
            <Grid
              container
              sx={{ p: 2 }}
              alignItems="center"
              className="add-post__title"
            >
              <Grid item xs sx={{ width: 0 }}>
                <Typography variant="h5" component="div" noWrap>
                  Add a new post
                </Typography>
              </Grid>
              <IconButton
                disabled={addLoading}
                onClick={onCancel}
                aria-label="delete"
                color="inherit"
              >
                <CloseIcon />
              </IconButton>
            </Grid>
            <Grid item container flexDirection="column" sx={{ p: 2 }}>
              <Field
                sx={{ width: "100%", my: 2 }}
                variant="standard"
                component={TextField}
                type="text"
                label="Title"
                name="title"
              />
              <Field
                sx={{ width: "100%", my: 2 }}
                variant="standard"
                multiline
                component={TextField}
                type="text"
                label="Content"
                name="content"
              />
              <Field
                sx={{ width: "100%", my: 2 }}
                variant="standard"
                component={TextField}
                type="text"
                label="Image"
                name="image_url"
              />
              <Field
                sx={{ width: "100%", my: 2 }}
                variant="standard"
                component={TextField}
                type="text"
                label="Latitude"
                name="lat"
              />
              <Field
                sx={{ width: "100%", my: 2 }}
                variant="standard"
                component={TextField}
                type="text"
                label="Longitude"
                name="long"
              />
            </Grid>
            <Grid
              item
              container
              flexDirection="column"
              sx={{ marginTop: "auto", p: 2 }}
            >
              {addLoading && <LinearProgress />}
              <ButtonGroup fullWidth aria-label="outlined primary button group">
                <Button
                  variant="contained"
                  startIcon={<CheckIcon />}
                  color="secondary"
                  disabled={addLoading}
                  onClick={submitForm}
                >
                  Create
                </Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default AddPostForm;
