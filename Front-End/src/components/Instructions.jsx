import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { VscInfo } from "react-icons/vsc";



export default function Instructions() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        How to play
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"🎯 Instructions "}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          🔹 The secret number has 4 unique digits.
          </DialogContentText>
          <DialogContentText>
          🔹 If you guess the right number in the right place, you get a bull.
          </DialogContentText>
          <DialogContentText>
          🔹 If you guess the right number but in the wrong place, you get a cow.
          </DialogContentText>
          <DialogContentText>
          🔹 You have 8 chances to guess the secret number.
          </DialogContentText>

          <DialogContentText>🔹 Let's start guessing!</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
