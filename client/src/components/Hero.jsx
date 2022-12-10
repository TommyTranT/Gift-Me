import React from "react";
import { hero } from "../assets/";
import styles from "../style";

const Hero = () => (
  <section>
    <div>
      <div>
        <h1> Make whatever list you want with the products you care about</h1>
      </div>
      <div>
        <img src={hero} />
      </div>
    </div>
  </section>
);

export default Hero;
