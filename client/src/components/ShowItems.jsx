import AddItem from "./AddItem";
import axios from "axios";

const ShowItems = ({ wishlists, showWishlists, setShowWishlists }) => {
  //showWishlists = items database

  const deleteItem = (id) => {
    axios.delete(`http://localhost:8080/items/${id}`).then((res) => {
      setShowWishlists(
        showWishlists.filter((showWishList) => showWishList.item_id !== id)
      );
    });
  };

  return (
    <>
      <h1>{wishlists.name}</h1>

      {showWishlists.map((showWishlist) => (
        <section className="show_items" key={showWishlist.item_id}>
          <h1>{showWishlist.name}</h1>
          <p>{showWishlist.description}</p>
          <p>{showWishlist.price}</p>
          <p>{showWishlist.img_url}</p>
          <p>{showWishlist.url}</p>
          <button>Edit</button>
          <button onClick={() => deleteItem(showWishlist.item_id)}>
            Delete
          </button>
        </section>
      ))}
    </>
  );
};

export default ShowItems;
