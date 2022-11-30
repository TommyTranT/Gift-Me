/* Add Item Component - Add a new item from form submit
1. set state to blanks for each input
2. state change based on input on-change
3. on-submit will make a axios post request with all of the state value
4. reset all state to blank 
5. change state to display items to previous data plus the new data response
*/
import axios from "axios";
import { useState } from "react";

const AddItem = ({ wishlistID, showWishlists, setShowWishlists }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [img_url, setImgUrl] = useState("");
  const [url, setUrl] = useState("");

  const onSubmitForm = (e) => {
    e.preventDefault();
    const wishlist_id = wishlistID;
    const body = { name, description, price, img_url, url, wishlist_id };

    axios.post("http://localhost:8080/items", body).then((res) => {
      setName("");
      setDescription("");
      setPrice("");
      setImgUrl("");
      setUrl("");

      setShowWishlists([...showWishlists, res.data]); // State for displaying wishlist plus new data
    });
  };
  console.log({ wishlistID });
  return (
    <>
      <form onSubmit={onSubmitForm}>
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
          value={img_url}
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
