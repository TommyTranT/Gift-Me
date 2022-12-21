/*
Show Wishlist Component - Display all wishlists
1. use axios get request to get wishlist and use effect to load them right away
2. make each wishlist a button that will change what items are displayed based on wishlist selected
*/

import axios from "axios";
import { useEffect, useState } from "react";
import EditWishlist from "./EditWishlist";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const ShowWishlist = ({
  wishlists,
  setWishlists,
  setShowWishlists,
  setWishlistID,
  setWishlistName,
  setWishlistDescription,
}) => {
  // Display all wishlist from database
  const getWishlist = () => {
    axios.get(`${process.env.REACT_APP_BROWSER}wishlists`).then((res) => {
      setWishlists(res.data);
    });
  };

  useEffect(() => {
    getWishlist();
  }, []);

  const deleteWishlist = (id) => {
    axios
      .delete(`${process.env.REACT_APP_BROWSER}wishlists/${id}`)
      .then((res) => {
        setWishlists(
          wishlists.filter((wishlist) => wishlist.wishlist_id !== id)
        );
      });
  };

  // State that determines which items are displayed based on wishlist selected
  const getItems = (id, name, description) => {
    axios
      .get(`${process.env.REACT_APP_BROWSER}items/show/${id}`)
      .then((res) => {
        console.log(res.data);
        setShowWishlists(res.data);
      });
    setWishlistID(id); // State to send wishlist id
    setWishlistName(name); // State to display wishlist name
    setWishlistDescription(description); // State to display wishlist description
  };

  return (
    <>
      {wishlists.map((wishlist) => (
        <ListItem
          className="show_wishlist"
          key={wishlist.wishlist_id}
          style={{ backgroundColor: "aliceblue" }}
        >
          <ListItemButton
            className="name"
            onClick={() =>
              getItems(
                wishlist.wishlist_id,
                wishlist.name,
                wishlist.description
              )
            } // Change state of which items to display
          >
            <ListItemText primary={wishlist.name} />
          </ListItemButton>
          <EditWishlist
            wishlist={wishlist}
            setWishlists={setWishlists}
            setWishlistName={setWishlistName}
            setWishlistDescription={setWishlistDescription}
          />
          <Button
            onClick={() => deleteWishlist(wishlist.wishlist_id)}
            style={{ minWidth: "30px" }}
          >
            <DeleteIcon />
          </Button>
        </ListItem>
      ))}
    </>
  );
};

export default ShowWishlist;
