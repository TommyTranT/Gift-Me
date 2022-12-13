import { useState } from "react";

// material ui
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import { Typography } from "@mui/material";

const ShowSingleItem = ({ showWishlist, setShowWishlists }) => {
  const [name, setName] = useState(showWishlist.name);
  const [description, setDescription] = useState(showWishlist.description);
  const [price, setPrice] = useState(showWishlist.price);
  const [img_url, setImgUrl] = useState(showWishlist.img_url);
  const [url, setUrl] = useState(showWishlist.url);
  const [open, setOpen] = useState(false); // state to show dialog form

  const handleClickOpen = () => {
    setOpen(true); // Open the dialog form
  };

  const handleClickClose = () => {
    setOpen(false); // Close the dialog form
  };

  return (
    <>
      <Button onClick={handleClickOpen}>
        <OpenInBrowserIcon />
      </Button>
      <Dialog open={open} onClose={handleClickClose} maxWidth="xl" fullWidth>
        <DialogTitle>Edit Item</DialogTitle>
        <DialogContent>
          <Typography>
            <img src={img_url} style={{ height: 750, width: 750 }} />
            <div>
              <p>{name}</p>
              <p>{description}</p>
              <p>{price}</p>
            </div>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" href={url} target="_blank">
            Buy
          </Button>
          <Button variant="contained" onClick={handleClickClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ShowSingleItem;
