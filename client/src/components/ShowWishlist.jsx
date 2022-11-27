import axios from "axios";
import { useEffect } from "react";

const ShowWishlist = ({ wishlists, setWishlists }) => {
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
          <p className="name">{wishlist.name}</p>
          <p className="description">{wishlist.description}</p>
        </section>
      ))}
    </>
  );
};

export default ShowWishlist;
