import { useState, Fragment } from "react";
import "./App.css";

// components
import AddWishlist from "./components/AddWishlist";
import ShowWishlist from "./components/ShowWishlist";
import AddItem from "./components/AddItem";
import ShowItems from "./components/ShowItems";

// material ui
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function App() {
  const [wishlists, setWishlists] = useState([]); // Displays all wishlist
  const [showWishlists, setShowWishlists] = useState([]); // Displays items based on wishlist selected
  const [wishlistID, setWishlistID] = useState(""); // wishlistID === the selected wishlist ID
  const [wishlistName, setWishlistName] = useState(""); // wishlistID === the selected wishlist ID

  return (
    <>
      <div className="display:flex">
        {/* Add a new wishlist Form */}
        <AddWishlist wishlists={wishlists} setWishlists={setWishlists} />

        {/* Display all wishlist */}
        <ShowWishlist
          wishlists={wishlists}
          setWishlists={setWishlists}
          setShowWishlists={setShowWishlists}
          setWishlistID={setWishlistID}
          setWishlistName={setWishlistName}
        />

        {/* Add new item to specific wishlist */}
        <br />
        {/* <h1>{wishlistName}</h1> */}
        <AddItem
          wishlistID={wishlistID}
          showWishlists={showWishlists}
          setShowWishlists={setShowWishlists}
        />

        {/* Display all items for each wishlist */}
        <ShowItems
          showWishlists={showWishlists}
          setShowWishlists={setShowWishlists}
          wishlists={wishlists}
          wishlistID={wishlistID}
          wishlistName={wishlistName}
        />
      </div>
    </>
  );
}

export default App;
