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
          <Card sx={{ maxWidth: 345, maxHeight: 500 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="345"
                image={showWishlist.img_url}
                alt="item_image"
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {showWishlist.name}
                </Typography>
                <Typography gutterBottom variant="h5">
                  {showWishlist.description}
                </Typography>
                <Typography gutterBottom variant="h5">
                  ${showWishlist.price}
                </Typography>
                <Button href={showWishlist.url} target="_blank">
                  Link
                </Button>
                <EditItem
                  showWishlist={showWishlist}
                  setShowWishlists={setShowWishlists}
                />
                <button onClick={() => deleteItem(showWishlist.item_id)}>
                  Delete
                </button>
              </CardContent>
            </CardActionArea>
          </Card>
        </section>
      ))}
    </>
  );
};

export default ShowItems;
