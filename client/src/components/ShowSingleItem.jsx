import { Dialog, DialogTitle, Button } from "@mui/material";
import React, { useState } from "react";

const ShowSingleItem = ({ openItem, setOpenItem }) => {
  const handleItemClose = () => {
    setOpenItem(false);
  };

  return (
    <div>
      <Dialog open={openItem} onClose={handleItemClose}>
        <DialogTitle>Item Title</DialogTitle>
        <Button onClick={handleItemClose}>Close</Button>
      </Dialog>
    </div>
  );
};

export default ShowSingleItem;
