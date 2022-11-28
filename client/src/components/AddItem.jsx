import axios from "axios";
import { useState } from "react";

const AddItem = ({ wishlistID }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [url, setUrl] = useState("");

  return (
    <>
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={"name"}
        ></input>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="description"
        ></input>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="price"
        ></input>
        <input
          type="text"
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
          placeholder="imgUrl"
        ></input>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="url"
        ></input>
        <button>Add item</button>
        <h1>What wishlist is selected: {wishlistID}</h1>
      </form>
    </>
  );
};

export default AddItem;
