/*
Show Wishlist Component - Display all wishlists
1. use axios get request to get wishlist and use effect to load them right away
2. make each wishlist a button that will change what items are displayed based on wishlist selected
*/

import axios from "axios";
import { useEffect } from "react";

const ShowWishlist = ({
  wishlists,
  setWishlists,
  setShowWishlists,
  setWishlistID,
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

  // Display all items from specific wishlist
  const getItems = (id) => {
    axios.get(`http://localhost:8080/items/show/${id}`).then((res) => {
      console.log(res.data);
      setShowWishlists(res.data);
    });
    setWishlistID(id);
  };

  return (
    <>
      {wishlists.map((wishlist) => (
        <section className="show_wishlist" key={wishlist.wishlist_id}>
          <button
            className="name"
            onClick={() => getItems(wishlist.wishlist_id)} // Change state of which items to display
          >
            {wishlist.name}
          </button>
        </section>
      ))}
    </>
  );
};

export default ShowWishlist;