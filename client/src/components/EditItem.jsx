/*
Edit Item Component - Updates each item on form submit
1. set state to the items current values
2. state change based on input on-change
3. form submit sends...
3a. axios put request to update database
3b. than another axios get request to get the wishlist items
3c. change state to view items based on the data response
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
import EditIcon from "@mui/icons-material/Edit";
import { Typography } from "@mui/material";

const EditItem = ({ showWishlist, setShowWishlists }) => {
  const [name, setName] = useState(showWishlist.name);
  const [description, setDescription] = useState(showWishlist.description);
  const [price, setPrice] = useState(showWishlist.price);
  const [img_url, setImgUrl] = useState(showWishlist.img_url);
  const [url, setUrl] = useState(showWishlist.url);
  const [open, setOpen] = useState(false); // state to show dialog form

  const updateItem = (e) => {
    e.preventDefault();
    const body = { name, description, price, img_url, url };
    const itemId = showWishlist.item_id;
    const wishListId = showWishlist.wishlist_id;
    console.log("Item successfully updated");
    axios.put(`http://localhost:8080/items/${itemId}`, body).then((res) => {
      axios
        .get(`http://localhost:8080/items/show/${wishListId}`)
        .then((res) => {
          setShowWishlists(res.data);
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
      <Button onClick={handleClickOpen}>
        <EditIcon />
      </Button>
      <Dialog open={open} onClose={handleClickClose}>
        <DialogTitle>Edit Item</DialogTitle>
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
            placeholder={showWishlist.name}
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
            placeholder={showWishlist.description}
          ></TextField>
          <TextField
            type="number"
            label="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            autoComplete="off"
            margin="dense"
            variant="standard"
            fullWidth
            placeholder={showWishlist.price}
          ></TextField>
          <TextField
            type="text"
            label="Picture URL"
            value={img_url}
            onChange={(e) => setImgUrl(e.target.value)}
            autoComplete="off"
            margin="dense"
            variant="standard"
            fullWidth
            placeholder={showWishlist.img_url}
          ></TextField>
          <TextField
            type="text"
            label="Direct Link"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            autoComplete="off"
            margin="dense"
            variant="standard"
            fullWidth
            placeholder={showWishlist.url}
          ></TextField>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={updateItem}>
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

export default EditItem;
