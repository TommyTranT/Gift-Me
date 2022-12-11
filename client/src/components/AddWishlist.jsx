/* Add Wishlist Component - Add a new wishlist from form submit
1. set state to blanks for each input
2. state change based on input on-change
3. on-submit will make a axios post request with all of the state value
4. reset all state to blank 
5. change state to display items to previous data plus the new data response
*/

import axios from "axios";
import { useState } from "react";

// material ui
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";

const AddWishlist = ({ wishlists, setWishlists }) => {
  // State for adding wishlist from form
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false); // state to show dialog form

  const onSubmitForm = (e) => {
    e.preventDefault();
    const body = { name, description };

    axios.post("http://localhost:8080/wishlists", body).then((res) => {
      setName("");
      setDescription("");

      setWishlists([...wishlists, res.data]); // State for displaying wishlist plus new data
      setOpen(false); // Close the dialog form
    });
  };

  const handleClickOpen = () => {
    setOpen(true); // Open the dialog form
  };

  const handleClickClose = () => {
    setOpen(false); // Close the dialog form
  };

  return (
    <>
      <Fab variant="extended" onClick={handleClickOpen} color="success">
        <AddIcon />
        New Wishlist
      </Fab>
      <Dialog open={open} onClose={handleClickClose}>
        <DialogTitle>New Wishlist</DialogTitle>
        <DialogContent>
          <TextField
            type="text"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="off"
            margin="dense"
            variant="standard"
            fullWidth
          ></TextField>
          <TextField
            type="text"
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            autoComplete="off"
            margin="dense"
            variant="standard"
            fullWidth
          ></TextField>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={onSubmitForm}>
            Save
          </Button>
          <Button variant="contained" onClick={handleClickClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddWishlist;
