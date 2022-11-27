import axios from "axios";
import { useState } from "react";

const AddWishlist = () => {
  const [name, setName] = useState("");

  const onSubmitForm = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/wishlists").then;
  };

  return (
    <>
      <form className="form" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="input_name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="text" className="input_description" />
        <button className="submit">Add</button>
      </form>
    </>
  );
};

export default AddWishlist;
