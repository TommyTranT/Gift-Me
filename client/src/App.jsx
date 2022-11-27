import { useState, Fragment } from "react";
import "./App.css";

// components
import AddWishlist from "./components/AddWishlist";
import ShowWishlist from "./components/ShowWishlist";

function App() {
  const [wishlists, setWishlists] = useState([]);

  return (
    <>
      <div className="container">
        <AddWishlist wishlists={wishlists} setWishlists={setWishlists} />
        <ShowWishlist wishlists={wishlists} setWishlists={setWishlists} />
      </div>
    </>
  );
}

export default App;
