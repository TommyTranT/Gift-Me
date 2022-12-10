import item from "../assets/item.jpg";

const ItemAd = () => (
  <section style={{ marginTop: "15%" }}>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h1 style={{ fontSize: "60px", maxWidth: "500px" }}>
        Add any item from online retailers with a personal note.
      </h1>
      <img
        src={item}
        alt="item_ad"
        style={{ maxWidth: "700px", maxHeight: "780px" }}
      />
    </div>
  </section>
);

export default ItemAd;
