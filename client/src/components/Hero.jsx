import { fontSize, maxWidth, width } from "@mui/system";
import React from "react";
import { hero } from "../assets/";

const Hero = () => (
  <section>
    <div
      id="home"
      style={{
        display: "flex",
        justifyContent: "center",
        marginRight: "6px",
        marginLeft: "6px",
      }}
    >
      <div>
        <h1 style={{ fontSize: "68px", maxWidth: "470px" }}>
          {" "}
          Make your list <br /> With the products you care about.
        </h1>
      </div>
      <div>
        <img src={hero} alt="hero" />
      </div>
    </div>
  </section>
);

export default Hero;
