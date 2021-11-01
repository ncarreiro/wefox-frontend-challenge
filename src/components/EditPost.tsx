// FORMIK
import { Formik, Form, Field } from "formik";

// MATERIAL UI COMPONENTS
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import LinearProgress from "@mui/material/LinearProgress";
import { TextField } from "formik-mui";

// ICONS
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";

// INTERFACES
import IPost from "../types/Post";

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
}: IEditPost) => (
  <Grid item>
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
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          alert(JSON.stringify(values, null, 2));
        }, 500);
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Field
            style={{ width: "100%" }}
            variant="filled"
            component={TextField}
            type="number"
            label="ID"
            name="id"
            disabled
          />
          <br />
          <Field
            style={{ width: "100%" }}
            variant="filled"
            component={TextField}
            type="text"
            label="Title"
            name="title"
          />
          <br />
          <Field
            style={{ width: "100%" }}
            variant="filled"
            multiline
            component={TextField}
            type="text"
            label="Content"
            name="content"
          />
          <br />
          <Field
            style={{ width: "100%" }}
            variant="filled"
            component={TextField}
            type="text"
            label="Image"
            name="image_url"
          />
          <br />
          <Field
            style={{ width: "100%" }}
            variant="filled"
            component={TextField}
            type="text"
            label="Latitude"
            name="lat"
          />
          <br />
          <Field
            style={{ width: "100%" }}
            variant="filled"
            component={TextField}
            type="text"
            label="Longitude"
            name="long"
          />
          {isSubmitting && <LinearProgress />}
          <br />
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button
              startIcon={<CheckIcon />}
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
            >
              Save
            </Button>
            <Button
              startIcon={<CloseIcon />}
              variant="text"
              disabled={isSubmitting}
              onClick={onCancel}
            >
              Cancel
            </Button>
            <Button
              startIcon={<DeleteIcon />}
              color="error"
              disabled={isSubmitting}
              onClick={() => "Delete action"}
            >
              Delete
            </Button>
          </ButtonGroup>
        </Form>
      )}
    </Formik>
  </Grid>
);

export default EditPost;
