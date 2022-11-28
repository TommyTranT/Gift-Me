import axios from "axios";
import { useEffect } from "react";
import ShowItems from "./ShowItems";

const ShowWishlist = ({
  wishlists,
  setWishlists,
  selectWishlists,
  setSelectWishlists,
  showWishlists,
  setShowWishlists,
}) => {
  const getWishlist = () => {
    axios.get("http://localhost:8080/wishlists").then((res) => {
      setWishlists(res.data);
    });
  };

  useEffect(() => {
    getWishlist();
  }, []);

  const getItems = (id) => {
    axios.get(`http://localhost:8080/items/show/${id}`).then((res) => {
      console.log(res.data);
      setShowWishlists(res.data);
    });
  };

  return (
    <>
      {wishlists.map((wishlist) => (
        <section className="show_wishlist" key={wishlist.wishlist_id}>
          <button
            className="name"
            onClick={() => getItems(wishlist.wishlist_id)} // Change state of which items to display
          >
            {wishlist.name}
          </button>
        </section>
      ))}

      <section className="show_items">
        <ShowItems
          showWishlists={showWishlists}
          setShowWishlists={setShowWishlists}
        />
      </section>
    </>
  );
};

export default ShowWishlist;
