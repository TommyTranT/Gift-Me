/* Add Item Component - Add a new item from form submit
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

const AddItem = ({ wishlistID, showWishlists, setShowWishlists }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [img_url, setImgUrl] = useState("");
  const [url, setUrl] = useState("");
  const [open, setOpen] = useState(false); // state to show dialog form

  const onSubmitForm = (e) => {
    e.preventDefault();
    const wishlist_id = wishlistID;
    const body = { name, description, price, img_url, url, wishlist_id };

    axios.post("http://localhost:8080/items", body).then((res) => {
      setName("");
      setDescription("");
      setPrice("");
      setImgUrl("");
      setUrl("");

      setShowWishlists([...showWishlists, res.data]); // State for displaying wishlist plus new data
      setOpen(false); // Close the dialog form
    });
  };

  const handleClickOpen = () => {
    setOpen(true); // Open the dialog form
  };

  const handleClickClose = () => {
    setOpen(false); // Close the dialog form
  };

  console.log({ wishlistID });
  return (
    <>
      <Button variant="contained" onClick={handleClickOpen}>
        Add Item
      </Button>
      <Dialog open={open} onClose={handleClickClose}>
        <DialogTitle>Add an Item</DialogTitle>
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
          <TextField
            type="number"
            label="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            autoComplete="off"
            margin="dense"
            variant="standard"
            fullWidth
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
          ></TextField>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={onSubmitForm}>
            Add Item
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddItem;
