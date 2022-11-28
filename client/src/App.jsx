import { useState, Fragment } from "react";
import "./App.css";

// components
import AddWishlist from "./components/AddWishlist";
import ShowItems from "./components/ShowItems";
import ShowWishlist from "./components/ShowWishlist";

function App() {
  const [wishlists, setWishlists] = useState([]); // Displays all wishlist
  const [selectWishlists, setSelectWishlists] = useState(""); //selectWishlists = wishlist_id

  return (
    <>
      <div className="container">
        <AddWishlist wishlists={wishlists} setWishlists={setWishlists} />
        <ShowWishlist
          wishlists={wishlists}
          setWishlists={setWishlists}
          selectWishlists={selectWishlists}
          setSelectWishlists={setSelectWishlists}
        />
        <p>What wishlist is selected: {selectWishlists}</p>
        <ShowItems selectWishlists={selectWishlists} />
      </div>
    </>
  );
}

export default App;
