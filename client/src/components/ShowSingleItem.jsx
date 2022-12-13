/*
Show Single Item
Basically copied from Edit Item but removed form and axios call
*/

import { useState } from "react";

// material ui
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import { Typography } from "@mui/material";

const ShowSingleItem = ({ showWishlist }) => {
  const [name] = useState(showWishlist.name);
  const [description] = useState(showWishlist.description);
  const [price] = useState(showWishlist.price);
  const [img_url] = useState(showWishlist.img_url);
  const [url] = useState(showWishlist.url);
  const [openItem, setItemOpen] = useState(false); // state to show dialog form

  const handleItemOpen = () => {
    setItemOpen(true); // Open the dialog form
  };

  const handleItemClose = () => {
    setItemOpen(false); // Close the dialog form
  };

  return (
    <>
      <Button onClick={handleItemOpen}>
        <OpenInBrowserIcon />
      </Button>
      <Dialog open={openItem} onClose={handleItemClose} maxWidth="xl" fullWidth>
        <DialogTitle>{name}</DialogTitle>
        <DialogContent>
          <Typography>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <img src={img_url} style={{ height: 575, width: 575 }} />
              <div>
                <p style={{ fontSize: 35, fontWeight: "bold", width: "416px" }}>
                  {name}
                </p>
                <p style={{ fontSize: 25 }}>{price}</p>
                <p style={{ fontSize: 15 }}>{description}</p>
              </div>
            </div>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" href={url} target="_blank">
            Buy
          </Button>
          <Button variant="contained" onClick={handleItemClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ShowSingleItem;
