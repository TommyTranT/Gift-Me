import { fontSize, maxWidth, width } from "@mui/system";
import { hero } from "../assets/";

const Hero = () => (
  <section>
    <div
      id="home"
      style={{
        display: "flex",
        justifyContent: "space-evenly",
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
        <img
          src={hero}
          alt="hero"
          style={{ maxWidth: "800px", maxHeight: "780px" }}
        />
      </div>
    </div>
  </section>
);

export default Hero;
