import React from "react";
import { ReactComponent as Coffee } from "../assets/coffee.svg";
import { ReactComponent as Gifts } from "../assets/gifts.svg";
import { ReactComponent as SendGift } from "../assets/send_gift.svg";
import { ReactComponent as WebShopping } from "../assets/web_shopping.svg";
import { ReactComponent as Wishes } from "../assets/wishes.svg";
import { ReactComponent as Wishlist } from "../assets/wishlist.svg";
import { ReactComponent as Birthday } from "../assets/birthday.svg";
import Button from "@mui/material/Button";

const Homepage = ({ setOpen }) => {
  return (
    <section>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          paddingBottom: "200px",
          paddingTop: "50px",
        }}
      >
        <div>
          <p style={{ fontSize: "16px" }}>Welcome to Gift Me!</p>
          <p style={{ fontSize: "42px", marginTop: 0, marginBottom: "10px" }}>
            Any list, with Any Item
          </p>
          <p style={{ fontSize: "18px" }}>
            Create as much wishlist you can think of <br /> and add the products
            you want to track!
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              style={{ fontSize: "23px", marginTop: "50px" }}
              onClick={(e) => setOpen(true)}
            >
              Get Started Here!
            </Button>
          </div>
        </div>
        <Wishlist style={{ width: "600px" }} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          paddingBottom: "200px",
        }}
      >
        <Coffee />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          paddingBottom: "200px",
        }}
      >
        <Gifts />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          paddingBottom: "200px",
        }}
      >
        <SendGift />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          paddingBottom: "200px",
        }}
      >
        <WebShopping />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          paddingBottom: "200px",
        }}
      >
        <Wishes />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          paddingBottom: "200px",
        }}
      >
        <Birthday />
      </div>
    </section>
  );
};

export default Homepage;
