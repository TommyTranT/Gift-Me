/*
Edit wishlist - Update wishlist name and description on form submit
1. Pass down wishlist info and state to change wishlists displayed
2. on change, update state and run axios query
3. change state to new data
*/

import axios from "axios";
import React from "react";
import { useState } from "react";

// material ui
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import EditIcon from "@mui/icons-material/Edit";

const EditWishlist = ({ wishlist, setWishlists }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false); // state to show dialog form

  const updateWishlist = (e) => {
    e.preventDefault();
    const body = { name, description };
    const wishlistId = wishlist.wishlist_id;
    axios
      .put(`http://localhost:8080/wishlists/${wishlistId}`, body)
      .then((res) => {
        axios.get("http://localhost:8080/wishlists").then((res) => {
          setWishlists(res.data);
          setName("");
          setDescription("");
          setOpen(false); // Close the dialog form
        });
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
      <Button onClick={handleClickOpen} style={{ minWidth: "30px" }}>
        <EditIcon />
      </Button>
      <Dialog open={open} onClose={handleClickClose}>
        <DialogTitle>Edit Wishlist</DialogTitle>
        <DialogContent>
          <TextField
            type="text"
            label={wishlist.name}
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="off"
            margin="dense"
            variant="standard"
            fullWidth
            helperText="Name"
          ></TextField>
          <TextField
            type="text"
            label={wishlist.description}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            autoComplete="off"
            margin="dense"
            variant="standard"
            fullWidth
            helperText="Description"
          ></TextField>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={updateWishlist}>
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

export default EditWishlist;
