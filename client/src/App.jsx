import { useState, Fragment } from "react";
import "./App.css";

// components
import AddWishlist from "./components/AddWishlist";
import ShowWishlist from "./components/ShowWishlist";
import AddItem from "./components/AddItem";
import ShowItems from "./components/ShowItems";
import Homepage from "./components/Homepage";
import styles from "./style";

// material ui
import { styled, useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CssBaseline } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function App() {
  const [wishlists, setWishlists] = useState([]); // Displays all wishlist
  const [showWishlists, setShowWishlists] = useState([]); // Displays items based on wishlist selected
  const [wishlistID, setWishlistID] = useState(""); // wishlistID === the selected wishlist ID
  const [wishlistName, setWishlistName] = useState(""); // wishlistID === the selected wishlist ID

  // material ui
  const theme = useTheme();
  const [open, setOpen] = useState(false); // state for opening side bar

  const drawerWidth = 290;

  const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    })
  );

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  if (wishlistID === "") {
  }
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h3" noWrap component="div">
            🎁 Gift Me 🎁
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          {/* Add a new wishlist Form */}
          <AddWishlist wishlists={wishlists} setWishlists={setWishlists} />
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {/* Display all wishlist */}
          <ShowWishlist
            wishlists={wishlists}
            setWishlists={setWishlists}
            setShowWishlists={setShowWishlists}
            setWishlistID={setWishlistID}
            setWishlistName={setWishlistName}
          />
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />

        {/* Add new item to specific wishlist */}

        <h1
          style={{
            textAlign: "center",
            fontSize: "50px",
            marginBottom: "10px",
          }}
        >
          {wishlistName}
        </h1>
        <div>
          {wishlistID ? (
            <AddItem
              wishlistID={wishlistID}
              showWishlists={showWishlists}
              setShowWishlists={setShowWishlists}
            />
          ) : (
            <Homepage />
          )}
        </div>

        {/* Display all items for each wishlist */}
        <ShowItems
          showWishlists={showWishlists}
          setShowWishlists={setShowWishlists}
          wishlists={wishlists}
          wishlistID={wishlistID}
          wishlistName={wishlistName}
        />
      </Main>
    </Box>
  );
}

export default App;
