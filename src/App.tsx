// REACT
import { createContext, Dispatch, useReducer } from "react";

// MATERIAL UI COMPONENTS
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { AlertColor } from "@mui/material";

// TOASTS
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

// COMPONENTS
import PostsGrid from "./components/PostsGrid";

// STYLING
import "./App.scss";

// NOTIFICATIONS
interface INotification {
  open: boolean;
  status: AlertColor;
  message: string;
}

export const NotificationContext = createContext<any>({
  dispatch: () => {},
});

function notificationReducer(
  state: { open: boolean; status: string; message: string },
  action: { type: "success" | "error" | "close"; message: string }
) {
  switch (action.type) {
    case "success":
      return { open: true, status: "success", message: action.message };
    case "error":
      return { open: true, status: "error", message: action.message };
    case "close":
      return { open: false, status: "info", message: "" };
    default:
      throw new Error();
  }
}

function App() {
  // NOTIFICATION REDUCER
  const [notification, dispatch] = useReducer<any>(notificationReducer, {
    open: false,
    status: "info",
    message: "",
  }) as [notification: INotification, dispatch: Dispatch<any>];

  return (
    <NotificationContext.Provider value={{ dispatch }}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ py: 2 }}
      >
        <Grid item xs={12} sx={{ my: 2 }}>
          <Typography
            variant="h4"
            align="center"
            component="div"
            fontWeight="700"
            className="app__title"
          >
            wefox <span className="app__title--secondary">Frontend</span>{" "}
            Challenge
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <PostsGrid />
        </Grid>

        <Snackbar
          open={notification.open}
          autoHideDuration={6000}
          onClose={() => dispatch({ type: "close" })}
        >
          <Alert
            severity={notification.status}
            onClose={() => dispatch({ type: "close" })}
          >
            {notification.message}
          </Alert>
        </Snackbar>
      </Grid>
    </NotificationContext.Provider>
  );
}

export default App;
