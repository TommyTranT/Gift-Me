import axios from "axios";
import { useEffect } from "react";

const ShowWishlist = ({
  wishlists,
  setWishlists,
  selectWishlists,
  setSelectWishlists,
}) => {
  const getWishlist = () => {
    axios.get("http://localhost:8080/wishlists").then((res) => {
      setWishlists(res.data);
    });
  };

  useEffect(() => {
    getWishlist();
  }, []);

  return (
    <>
      {wishlists.map((wishlist) => (
        <section className="show_wishlist" key={wishlist.wishlist_id}>
          <button
            className="name"
            onClick={() => setSelectWishlists(wishlist.wishlist_id)} // Change state of which items to display
          >
            {wishlist.name}
          </button>
        </section>
      ))}
    </>
  );
};

export default ShowWishlist;
