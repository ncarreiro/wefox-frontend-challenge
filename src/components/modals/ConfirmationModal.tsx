// REACT
import { useContext } from "react";

// MATERIAL UI COMPONENTS
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";

// MODAL
import { IModal, ModalContext } from "../../App";

const ConfirmationModalTemplate = ({
  message,
  onClose,
  onConfirm,
  open,
  ...other
}: any) => {
  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    onConfirm();
    onClose();
  };

  return (
    <Dialog maxWidth="xs" open={open} {...other}>
      <DialogTitle>Confirm action</DialogTitle>
      <DialogContent>
        <Typography>{message}</Typography>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel}>
          Cancel
        </Button>
        <Button onClick={handleOk}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
};

const ConfirmationModal = ({ modal }: { modal: IModal }) => {
  const { dispatch } = useContext(ModalContext);

  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ConfirmationModalTemplate
        open={modal.open}
        message={modal.message}
        onConfirm={modal.onConfirm}
        onClose={() => dispatch({ type: "close" })}
      />
    </Box>
  );
};

export default ConfirmationModal;
