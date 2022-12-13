/*
Show Items Component - Display all items
1. use axios get request to get items based on wishlist selected
2. delete item based on item id using axios and filter state to not include that id
*/

import axios from "axios";
import EditItem from "./EditItem";
import ShowSingleItem from "./ShowSingleItem";
import { useState } from "react";

// material ui
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import DeleteIcon from "@mui/icons-material/Delete";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItem from "@mui/material/ListItem";
import SortIcon from "@mui/icons-material/Sort";

const ShowItems = ({
  showWishlists,
  setShowWishlists,
  sortPriceLowest,
  sortPriceHighest,
  sortNewest,
  sortOldest,
  DrawerHeader,
  theme,
}) => {
  //showWishlists = items database
  const [openSort, setOpenSort] = useState(false);

  const deleteItem = (id) => {
    axios.delete(`http://localhost:8080/items/${id}`).then((res) => {
      setShowWishlists(
        showWishlists.filter((showWishList) => showWishList.item_id !== id)
      );
    });
  };

  // turns 1000 into 1,000
  const refactorePrice = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleDrawerOpen = () => {
    setOpenSort(true);
  };

  const handleDrawerClose = () => {
    setOpenSort(false);
  };

  return (
    <>
      {/* <h1>{wishlistName}</h1> */}
      <div
        style={{ display: "flex", justifyContent: "end", marginRight: "15px" }}
      >
        <Fab onClick={handleDrawerOpen} variant="extended" color="primary">
          <SortIcon />
          Sort
        </Fab>
      </div>
      <Drawer open={openSort} anchor="right">
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem>
            <div style={{ width: "300px" }}>
              <p>Sort Items</p>
              <Divider />
              <p>Sort by Price</p>
              <ListItemButton onClick={sortPriceHighest}>
                Highest
              </ListItemButton>
              <ListItemButton onClick={sortPriceLowest}>Lowest</ListItemButton>
              <Divider />
              <p>Sort by Newest to Oldest</p>
              <ListItemButton onClick={sortNewest}>Newest</ListItemButton>
              <ListItemButton onClick={sortOldest}>Oldest</ListItemButton>
            </div>
          </ListItem>
        </List>
      </Drawer>
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
            style={{
              marginBottom: "25px",
              marginRight: "3px",
              marginLeft: "3px",
            }}
          >
            <Card
              sx={{
                maxWidth: 290,
                minWidth: 290,
                minHeight: 440,
                maxHeight: 440,
                marginTop: "15px",
              }}
            >
              <CardMedia
                component="img"
                height="300"
                image={showWishlist.img_url}
                alt="item_image"
              ></CardMedia>
              <CardContent style={{ paddingBottom: 0 }}>
                <Typography
                  gutterBottom
                  style={{ textAlign: "center", fontWeight: "bold" }}
                >
                  {showWishlist.name}
                </Typography>

                <Typography gutterBottom style={{ textAlign: "center" }}>
                  ${refactorePrice(showWishlist.price)}
                </Typography>

                <Typography
                  gutterBottom
                  style={{ textAlign: "center", fontStyle: "italic" }}
                >
                  {showWishlist.description}
                </Typography>
              </CardContent>

              <div style={{ textAlign: "center" }}>
                {showWishlist.url === "" ? (
                  <Button
                    href={showWishlist.url}
                    target="_blank"
                    variant="disable"
                    disabled="true"
                  >
                    <OpenInNewIcon />
                  </Button>
                ) : (
                  <Button href={showWishlist.url} target="_blank">
                    <OpenInNewIcon />
                  </Button>
                )}
                <EditItem
                  showWishlist={showWishlist}
                  setShowWishlists={setShowWishlists}
                />
                <ShowSingleItem
                  showWishlist={showWishlist}
                  setShowWishlists={setShowWishlists}
                />
                <Button onClick={() => deleteItem(showWishlist.item_id)}>
                  <DeleteIcon />
                </Button>
              </div>
            </Card>
          </section>
        ))}
      </div>
    </>
  );
};

export default ShowItems;
