import AddItem from "./AddItem";

const ShowItems = ({ wishlists, showWishlists }) => {
  //showWishlists = items database

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
          <button>Delete</button>
        </section>
      ))}
    </>
  );
};

export default ShowItems;
