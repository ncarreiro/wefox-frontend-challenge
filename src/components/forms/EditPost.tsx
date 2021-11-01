// REACT
import React, { useState } from "react";

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

// TOASTS
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

// ICONS
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";

// INTERFACES
import IPost from "../../types/Post";

interface IEditPost extends IPost {
  onSubmit: (post: IPost) => void;
  onCancel: () => void;
}

const EditPost = ({
  id,
  title,
  image_url,
  content,
  lat,
  long,
  created_at,
  updated_at,
  onSubmit,
  onCancel,
}: IEditPost) => {
  // AXIOS PUT METHOD
  const [{ loading, error }, executePut] = useAxios(
    {
      url: `/posts/${id}`,
      method: "PUT",
    },
    { manual: true }
  );

  // TOASTS STATES
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);

  const handleSubmit = async (values: IPost) => {
    try {
      await executePut({
        data: {
          title: values.title,
          content: values.content,
          image_url: values.image_url,
          lat: values.lat,
          long: values.long,
        },
      }).then(({ data }) => onSubmit(data));
      setShowSuccessToast(true);
    } catch (error) {
      setShowErrorToast(true);
    }
  };

  return (
    <Formik
      initialValues={{
        id,
        title,
        image_url,
        content,
        lat,
        long,
        created_at,
        updated_at,
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
      {({ values, submitForm }) => (
        <Form style={{ height: "100%" }}>
          <Grid
            container
            flexDirection="column"
            sx={{ width: 460, height: "100%", p: 2 }}
          >
            <Grid container>
              <Grid item xs>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ color: "#543d96" }}
                >
                  {values.title}
                </Typography>
              </Grid>
              <Grid item>
                <IconButton
                  disabled={loading}
                  onClick={onCancel}
                  aria-label="delete"
                >
                  <CloseIcon />
                </IconButton>
              </Grid>
            </Grid>
            <Field
              sx={{ width: "100%", my: 2 }}
              variant="standard"
              component={TextField}
              type="number"
              label="ID"
              name="id"
              disabled
            />
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
            <div style={{ marginTop: "auto" }}>
              {loading && <LinearProgress />}
              <ButtonGroup fullWidth aria-label="outlined primary button group">
                <Button
                  variant="contained"
                  startIcon={<CheckIcon />}
                  color="primary"
                  disabled={loading}
                  onClick={submitForm}
                >
                  Save
                </Button>
                <Button
                  variant="contained"
                  startIcon={<DeleteIcon />}
                  color="error"
                  disabled={loading}
                  onClick={() => setShowErrorToast(true)}
                >
                  Delete
                </Button>
              </ButtonGroup>
            </div>
          </Grid>

          {/* Success Toast */}
          <Snackbar
            open={showSuccessToast}
            autoHideDuration={6000}
            onClose={() => setShowSuccessToast(false)}
          >
            <Alert
              severity="success"
              onClose={() => setShowSuccessToast(false)}
            >
              Post {values.title} updated
            </Alert>
          </Snackbar>

          {/* Error Toast */}
          <Snackbar
            open={showErrorToast}
            autoHideDuration={6000}
            onClose={() => setShowErrorToast(false)}
          >
            <Alert severity="error" onClose={() => setShowErrorToast(false)}>
              Error: {error}
            </Alert>
          </Snackbar>
        </Form>
      )}
    </Formik>
  );
};

export default EditPost;
