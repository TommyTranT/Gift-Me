import { useState, Fragment } from "react";
import "./App.css";

// components
import AddWishlist from "./components/AddWishlist";
import ShowWishlist from "./components/ShowWishlist";
import AddItem from "./components/AddItem";
import ShowItems from "./components/ShowItems";

function App() {
  const [wishlists, setWishlists] = useState([]); // Displays all wishlist
  const [showWishlists, setShowWishlists] = useState([]); // Displays items based on wishlist selected
  const [wishlistID, setWishlistID] = useState(""); // wishlistID === the selected wishlist ID

  return (
    <>
      <div className="container">
        {/* Add a new wishlist Form */}
        <AddWishlist wishlists={wishlists} setWishlists={setWishlists} />

        {/* Display all wishlist */}
        <ShowWishlist
          wishlists={wishlists}
          setWishlists={setWishlists}
          setShowWishlists={setShowWishlists}
          setWishlistID={setWishlistID}
        />

        {/* Display all items for each wishlist */}
        <ShowItems
          showWishlists={showWishlists}
          setShowWishlists={setShowWishlists}
          wishlists={wishlists}
        />

        {/* Add new item to specific wishlist */}
        <AddItem
          wishlistID={wishlistID}
          showWishlists={showWishlists}
          setShowWishlists={setShowWishlists}
        />
      </div>
    </>
  );
}

export default App;
