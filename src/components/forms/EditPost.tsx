// FORMIK
import { Formik, Form, Field } from "formik";

// MATERIAL UI COMPONENTS
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import { TextField } from "formik-mui";

import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

// ICONS
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";

// INTERFACES
import IPost from "../../types/Post";
import { useState } from "react";

interface IEditPost extends IPost {
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
  onCancel,
}: IEditPost) => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (values: IPost) => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      alert(JSON.stringify(values, null, 2));
    }, 500);
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
      onSubmit={(values) => handleSubmit(values)}
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
                  disabled={submitting}
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
              {submitting && <LinearProgress />}
              <ButtonGroup fullWidth aria-label="outlined primary button group">
                <Button
                  variant="contained"
                  startIcon={<CheckIcon />}
                  color="primary"
                  disabled={submitting}
                  onClick={submitForm}
                >
                  Save
                </Button>
                <Button
                  variant="contained"
                  startIcon={<DeleteIcon />}
                  color="error"
                  disabled={submitting}
                  onClick={() => "Delete action"}
                >
                  Delete
                </Button>
              </ButtonGroup>
            </div>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default EditPost;
