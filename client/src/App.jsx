import { useState, Fragment } from "react";
import "./App.css";

// components
import AddWishlist from "./components/AddWishlist";
import ShowWishlist from "./components/ShowWishlist";

function App() {
  const [wishlist, setWishlist] = useState("");

  return (
    <>
      <div className="container">
        <AddWishlist wishlist={wishlist} setWishlist={setWishlist} />
        <ShowWishlist wishlist={wishlist} setWishlist={setWishlist} />
      </div>
    </>
  );
}

export default App;
