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
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import DeleteIcon from "@mui/icons-material/Delete";

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
      {/* <h1>{wishlistName}</h1> */}
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexFlow: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {showWishlists.map((showWishlist) => (
          <section
            className="show_items"
            key={showWishlist.item_id}
            style={{ marginBottom: "25px" }}
          >
            <Card
              sx={{
                maxWidth: 300,
                minWidth: 300,
                minHeight: 440,
                maxHeight: 440,
                marginTop: "15px",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={showWishlist.img_url}
                  alt="item_image"
                ></CardMedia>
                <CardContent>
                  <Typography
                    gutterBottom
                    style={{ textAlign: "center", fontWeight: "bold" }}
                  >
                    {showWishlist.name}
                  </Typography>

                  <Typography gutterBottom style={{ textAlign: "center" }}>
                    ${showWishlist.price}
                  </Typography>

                  <Typography
                    gutterBottom
                    style={{ textAlign: "center", fontStyle: "italic" }}
                  >
                    {showWishlist.description}
                  </Typography>

                  <div style={{ textAlign: "center" }}>
                    <Button href={showWishlist.url} target="_blank">
                      <OpenInNewIcon />
                    </Button>
                    <EditItem
                      showWishlist={showWishlist}
                      setShowWishlists={setShowWishlists}
                    />
                    <Button onClick={() => deleteItem(showWishlist.item_id)}>
                      <DeleteIcon />
                    </Button>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </section>
        ))}
      </div>
    </>
  );
};

export default ShowItems;
