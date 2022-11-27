import axios from "axios";
import { useState } from "react";

const AddWishlist = ({ wishlists, setWishlists }) => {
  // State for adding wishlist from form
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const onSubmitForm = (e) => {
    e.preventDefault();
    const body = { name, description };

    axios.post("http://localhost:8080/wishlists", body).then((res) => {
      setName("");
      setDescription("");

      setWishlists([...wishlists, res.data]); // State for displaying wishlist plus new data
    });
  };

  return (
    <>
      <form className="form" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="input_name"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className="input_description"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="submit">Add</button>
      </form>
    </>
  );
};

export default AddWishlist;
