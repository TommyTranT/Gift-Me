import axios from "axios";
import React from "react";
import { useState } from "react";

const EditWishlist = ({ wishlist, wishlists, setWishlists }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

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
        });
      });
  };

  return (
    <div>
      <form onSubmit={(e) => updateWishlist(e)}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={wishlist.name}
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder={wishlist.description}
        />
        <button>Edit</button>
      </form>
    </div>
  );
};

export default EditWishlist;
<input type="text" />;
