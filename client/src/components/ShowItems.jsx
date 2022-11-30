import axios from "axios";
import EditItem from "./EditItem";

const ShowItems = ({
  wishlists,
  wishlistID,
  showWishlists,
  setShowWishlists,
}) => {
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
          <EditItem showWishlist={showWishlist} />
          <button onClick={() => deleteItem(showWishlist.item_id)}>
            Delete
          </button>
        </section>
      ))}
    </>
  );
};

export default ShowItems;
