const ShowItems = ({ showWishlists, setShowWishlists }) => {
  return (
    <>
      <h1 className="hi">hi</h1>
      {showWishlists.map((showWishlist) => (
        <section className="show_items" key={showWishlist.item_id}>
          <h1>{showWishlist.name}</h1>
        </section>
      ))}
    </>
  );
};

export default ShowItems;
