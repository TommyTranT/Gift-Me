/*
Show Items Component - Display all items
1. use axios get request to get items based on wishlist selected
2. delete item based on item id using axios and filter state to not include that id
*/

import axios from "axios";
import EditItem from "./EditItem";

// material ui
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const ShowItems = ({
  wishlists,
  wishlistID,
  showWishlists,
  setShowWishlists,
  wishlistName,
}) => {
  //showWishlists = items database

  const deleteItem = (id) => {
    axios.delete(`http://localhost:8080/items/${id}`).then((res) => {
      setShowWishlists(
        showWishlists.filter((showWishList) => showWishList.item_id !== id)
      );
    });
  };

  return (
    <>
      <h1>{wishlistName}</h1>

      {showWishlists.map((showWishlist) => (
        <section className="show_items" key={showWishlist.item_id}>
          <h1>{showWishlist.name}</h1>
          <p>{showWishlist.description}</p>
          <p>{showWishlist.price}</p>
          <p>{showWishlist.img_url}</p>
          <p>{showWishlist.url}</p>
          <EditItem
            showWishlist={showWishlist}
            setShowWishlists={setShowWishlists}
          />
          <button onClick={() => deleteItem(showWishlist.item_id)}>
            Delete
          </button>
        </section>
      ))}
    </>
  );
};

export default ShowItems;
