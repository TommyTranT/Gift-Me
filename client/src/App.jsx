import { useState, Fragment } from "react";
import "./App.css";

// components
import AddWishlist from "./components/AddWishlist";
import ShowWishlist from "./components/ShowWishlist";

function App() {
  const [wishlists, setWishlists] = useState([]); // Displays all wishlist
  const [selectWishlists, setSelectWishlists] = useState(""); //selectWishlists = wishlist_id
  const [showWishlists, setShowWishlists] = useState([]);

  return (
    <>
      <div className="container">
        <AddWishlist wishlists={wishlists} setWishlists={setWishlists} />
        <ShowWishlist
          wishlists={wishlists}
          setWishlists={setWishlists}
          selectWishlists={selectWishlists}
          setSelectWishlists={setSelectWishlists}
          showWishlists={showWishlists}
          setShowWishlists={setShowWishlists}
        />
        <p>What wishlist is selected: {selectWishlists}</p>
      </div>
    </>
  );
}

export default App;
