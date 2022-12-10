import { wishlist } from "../assets";

const WishlistAd = () => (
  <section style={{ marginTop: "15%" }}>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <img src={wishlist} alt="wishlistAd" />
      <div style={{ fontSize: "60px", maxWidth: "500px" }}>
        <h1>Make a list for anything you can think of.</h1>
      </div>
    </div>
  </section>
);

export default WishlistAd;
