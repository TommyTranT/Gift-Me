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

const EditWishlist = ({
  wishlist,
  setWishlists,
  setWishlistDescription,
  setWishlistName,
}) => {
  const [name, setName] = useState(wishlist.name);
  const [description, setDescription] = useState(wishlist.description);
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
          setOpen(false); // Close the dialog form
          setWishlistName(name);
          setWishlistDescription(description);
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
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="off"
            margin="dense"
            variant="standard"
            fullWidth
            placeholder={wishlist.name}
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
            placeholder={wishlist.description}
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
