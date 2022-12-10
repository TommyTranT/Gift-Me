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

      <h1 style={{ fontSize: "60px", maxWidth: "500px" }}>
        Perfect for the Holidays, birthdays and personal use.
      </h1>
    </div>
  </section>
);

export default WishlistAd;
