const EditItem = ({ showWishlist }) => {
  return (
    <>
      <form>
        <input placeholder={showWishlist.name}></input>
        <h1>EDIT {showWishlist.name}</h1>
        <button>Update Item</button>
      </form>
    </>
  );
};

export default EditItem;
