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

const ShowWishlist = ({
  wishlists,
  setWishlists,
  setShowWishlists,
  setWishlistID,
  setWishlistName,
}) => {
  // Display all wishlist from database
  const getWishlist = () => {
    axios.get("http://localhost:8080/wishlists").then((res) => {
      setWishlists(res.data);
    });
  };

  useEffect(() => {
    getWishlist();
  }, []);

  const deleteWishlist = (id) => {
    axios.delete(`http://localhost:8080/wishlists/${id}`).then((res) => {
      setWishlists(wishlists.filter((wishlist) => wishlist.wishlist_id !== id));
    });
  };

  const editWishlist = (id) => {
    axios.put(`http://localhost:8080/wishlists/${id}`).then();
  };

  // State that determines which items are displayed based on wishlist selected
  const getItems = (id, name) => {
    axios.get(`http://localhost:8080/items/show/${id}`).then((res) => {
      console.log(res.data);
      setShowWishlists(res.data);
    });
    setWishlistID(id); // State to send wishlist id
    setWishlistName(name); // State to display wishlist name
  };

  return (
    <>
      {wishlists.map((wishlist) => (
        <ListItem className="show_wishlist" key={wishlist.wishlist_id}>
          <ListItemButton
            className="name"
            onClick={() => getItems(wishlist.wishlist_id, wishlist.name)} // Change state of which items to display
          >
            <ListItemText primary={wishlist.name} />
          </ListItemButton>
          <button onClick={() => deleteWishlist(wishlist.wishlist_id)}>
            D
          </button>
          <EditWishlist wishlist={wishlist} setWishlists={setWishlists} />
        </ListItem>
      ))}
    </>
  );
};

export default ShowWishlist;
