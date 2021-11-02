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
import PostsGrid from "./components/grid/PostsGrid";

// STYLING
import "./styles/App.scss";
import ConfirmationModal from "./components/modals/ConfirmationModal";

// INTERFACES
export interface INotification {
  open: boolean;
  status: AlertColor;
  message: string;
}

export interface IModal {
  open: boolean;
  message: string;
  onConfirm: () => void;
}

// CONTEXTS
export const NotificationContext = createContext<any>({
  dispatch: () => {},
});

export const ModalContext = createContext<any>({
  dispatch: () => {},
});

// REDUCERS
const notificationReducer = (
  state: { open: boolean; status: string; message: string },
  action: { type: "success" | "error" | "close"; message: string }
) => {
  switch (action.type) {
    case "success":
      return { open: true, status: "success", message: action.message };
    case "error":
      return { open: true, status: "error", message: action.message };
    case "close":
      return { ...state, open: false };
    default:
      throw new Error();
  }
};

const modalReducer = (
  state: { open: boolean; message: string; onConfirm: () => void },
  action: { type: "open" | "close"; message: string; onConfirm: () => void }
) => {
  switch (action.type) {
    case "open":
      return {
        open: true,
        message: action.message,
        onConfirm: action.onConfirm,
      };
    case "close":
      return { ...state, open: false };
    default:
      throw new Error();
  }
};

const App = () => {
  // NOTIFICATION REDUCER
  const [notification, notificationDispatch] = useReducer<any>(
    notificationReducer,
    {
      open: false,
      status: "info",
      message: "",
    }
  ) as [notification: INotification, dispatch: Dispatch<any>];

  // MODAL REDUCER
  const [modal, modalDispatch] = useReducer<any>(modalReducer, {
    open: false,
    message: "",
  }) as [modal: IModal, dispatch: Dispatch<any>];

  return (
    <NotificationContext.Provider value={{ dispatch: notificationDispatch }}>
      <ModalContext.Provider value={{ modal, dispatch: modalDispatch }}>
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

          {/* NOTIFICATIONS */}
          <Snackbar
            open={notification.open}
            autoHideDuration={6000}
            onClose={() => notificationDispatch({ type: "close" })}
          >
            <Alert
              severity={notification.status}
              onClose={() => notificationDispatch({ type: "close" })}
            >
              {notification.message}
            </Alert>
          </Snackbar>

          {/* MODAL */}
          <ConfirmationModal modal={modal} />
        </Grid>
      </ModalContext.Provider>
    </NotificationContext.Provider>
  );
};

export default App;
