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

const EditItem = ({ showWishlist, setShowWishlists }) => {
  const [name, setName] = useState(showWishlist.name);
  const [description, setDescription] = useState(showWishlist.description);
  const [price, setPrice] = useState(showWishlist.price);
  const [img_url, setImgUrl] = useState(showWishlist.img_url);
  const [url, setUrl] = useState(showWishlist.url);

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
        });
    });
  };

  return (
    <>
      <form onSubmit={(e) => updateItem(e)}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={showWishlist.name}
        ></input>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder={showWishlist.description}
        ></input>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder={showWishlist.price}
        ></input>
        <input
          type="text"
          value={img_url}
          onChange={(e) => setImgUrl(e.target.value)}
          placeholder={showWishlist.img_url}
        ></input>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder={showWishlist.url}
        ></input>
        <button>Update Item</button>
      </form>
    </>
  );
};

export default EditItem;
