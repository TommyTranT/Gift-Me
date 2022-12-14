import React from "react";
import { ReactComponent as Coffee } from "../assets/coffee.svg";
import { ReactComponent as Gifts } from "../assets/gifts.svg";
import { ReactComponent as Photo } from "../assets/photo.svg";
import { ReactComponent as SendGift } from "../assets/send_gift.svg";
import { ReactComponent as WebShopping } from "../assets/web_shopping.svg";
import { ReactComponent as Wishes } from "../assets/wishes.svg";
import { ReactComponent as Wishlist } from "../assets/wishlist.svg";
import { ReactComponent as Birthday } from "../assets/birthday.svg";

const Homepage = () => {
  return (
    <section>
      <Coffee />
      <Gifts />
      <Photo />
      <SendGift />
      <WebShopping />
      <Wishes />
      <Wishlist />
      <Birthday />
    </section>
  );
};

export default Homepage;
